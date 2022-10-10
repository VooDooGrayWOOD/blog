import React from 'react'
import EditUserPage from '../components/page/user/editUserPage'
import UserPage from '../components/page/user/userPage'
import UsersListPage from '../components/page/user/usersListPage'
import { useSelector } from 'react-redux'
import { getCurrentUserId } from '../store/users'
import UsersLoader from '../components/ui/hoc/usersLoader'
import { Navigate, useParams } from 'react-router-dom'

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
                            <Navigate to={`/users/${currentUserId}/edit`} />
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
