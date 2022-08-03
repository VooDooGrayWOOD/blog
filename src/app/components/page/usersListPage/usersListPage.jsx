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
    const pageSize = 8

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

    if (users) {
        // function filterUsers(data) {
        //     const filteredUsers = searchQuery
        //         ? data.filter(
        //               (user) =>
        //                   user.name
        //                       .toLowerCase()
        //                       .indexOf(searchQuery.toLowerCase()) !== -1
        //           )
        //         : selectedProf
        //         ? data.filter(
        //               (user) =>
        //                   JSON.stringify(user.profession) ===
        //                   JSON.stringify(selectedProf)
        //           )
        //         : data
        //     return filteredUsers.filter((u) => u._id !== currentUserId._id)
        // }

        const filteredUsers = users
        const count = users.length
        const sortedUsers = _.orderBy(
            filteredUsers,
            [sortBy.path],
            [sortBy.order]
        )
        const usersCrop = paginate(sortedUsers, currentPage, pageSize)

        return (
            <div className="d-flex">
                <div className="d-flex flex-column">
                    <OnlineStatus length={count} />
                    <input
                        type="text"
                        name="searchQuery"
                        placeholder="Search..."
                        onChange={handleSearchQuery}
                        value={searchQuery}
                    />
                    {count > 0 && (
                        <UserTable
                            users={usersCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                        />
                    )}
                    <div className="d-flex justify-content-center">
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
    return 'loading...'
}
UsersListPage.propTypes = {
    users: PropTypes.array
}

export default UsersListPage
