import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { paginate } from '../../../../utils/paginate'
import Pagination from '../../../common/pagination'
import OnlineStatus from '../../../ui/onlineStatus'
import UserTable from '../../../ui/usersTable'
import _ from 'lodash'
import { useSelector } from 'react-redux'

import { getCurrentUserId, getUsersList } from '../../../../store/users'

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
        return filteredUsers.filter((u) => u._id !== currentUserId)
    }

    const filteredUsers = filterUsers(users)
    const count = filteredUsers.length
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order])
    const usersCrop = paginate(sortedUsers, currentPage, pageSize)

    return (
        <div className="flex justify-center">
            <div className="flex w-[72rem] flex-col">
                <OnlineStatus length={count} />
                <input
                    type="text"
                    name="searchQuery"
                    placeholder="Search..."
                    onChange={handleSearchQuery}
                    value={searchQuery}
                    className="block rounded-lg border p-2.5 text-sm  bg-gray-700 border-teal-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-lime-500"
                />
                {count > 0 && (
                    <UserTable
                        users={usersCrop}
                        onSort={handleSort}
                        selectedSort={sortBy}
                    />
                )}
                <div className="flex justify-center pt-3">
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
