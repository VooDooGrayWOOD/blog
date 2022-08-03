import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import EditUserPage from '../components/page/editUserPage'
import UserPage from '../components/page/userPage'
import UsersListPage from '../components/page/usersListPage'
import { useSelector } from 'react-redux'
import { getCurrentUserId } from '../store/users'
import UsersLoader from '../components/ui/hoc/usersLoader'

const Users = () => {
    const params = useParams()
    const { userId, edit } = params
    const currentUserId = useSelector(getCurrentUserId())

    return (
        <>
            <UsersLoader>
                {userId ? (
                    edit ? (
                        userId === currentUserId ? (
                            <EditUserPage />
                        ) : (
                            <Navigate
                                to={`/users/${currentUserId}/edit`}
                                replace
                            />
                        )
                    ) : (
                        <UserPage userId={userId} />
                    )
                ) : (
                    <UsersListPage />
                )}
            </UsersLoader>
        </>
    )
}

export default Users
