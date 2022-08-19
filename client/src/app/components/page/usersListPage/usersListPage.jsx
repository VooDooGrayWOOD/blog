import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { paginate } from '../../../utils/paginate'
import Pagination from '../../common/pagination'
import OnlineStatus from '../../ui/onlineStatus'
import UserTable from '../../ui/usersTable'
import _ from 'lodash'
import { useSelector } from 'react-redux'

import { getCurrentUserId, getUsersList } from '../../../store/users'

const UsersListPage = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const currentUserId = useSelector(getCurrentUserId())
    const [searchQuery, setSearchQuery] = useState('')
    const [sortBy, setSortBy] = useState({ path: 'name', order: 'asc' })
    const pageSize = 4

    const users = useSelector(getUsersList())

    useEffect(() => {
        setCurrentPage(1)
    }, [searchQuery])

    const handleSearchQuery = ({ target }) => {
        setSearchQuery(target.value)
    }

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }
    const handleSort = (item) => {
        setSortBy(item)
    }

        function filterUsers(data) {
            const filteredUsers = searchQuery
                ? data.filter(
                      (user) =>
                          user.name
                              .toLowerCase()
                              .indexOf(searchQuery.toLowerCase()) !== -1
                  )
                : data
            return filteredUsers.filter((u) => u._id !== currentUserId._id)
        }

        const filteredUsers = filterUsers(users)
        const count = users.length
        const sortedUsers = _.orderBy(
            filteredUsers,
            [sortBy.path],
            [sortBy.order]
        )
        const usersCrop = paginate(sortedUsers, currentPage, pageSize)

        return (
            <div className="flex justify-center">
                <div className="flex flex-col">
                    <OnlineStatus length={count} />
                    <input
                        type="text"
                        name="searchQuery"
                        placeholder="Search..."
                        onChange={handleSearchQuery}
                        value={searchQuery}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    />
                    {count > 0 && (
                        <UserTable
                            users={usersCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                        />
                    )}
                    <div className="flex justify-items-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        )
}
UsersListPage.propTypes = {
    users: PropTypes.array
}

export default UsersListPage
