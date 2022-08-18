import React from 'react'
import {Link} from 'react-router-dom'
import EditUserPage from '../components/page/editUserPage'
import UserPage from '../components/page/userPage'
import UsersListPage from '../components/page/usersListPage'
import { useSelector } from 'react-redux'
import { getCurrentUserId } from '../store/users'
import UsersLoader from '../components/ui/hoc/usersLoader'
import {getUserId} from "../services/localStorage.service";
import {useParams} from "react-router";

const Users = () => {
    const params = useParams()
    const { edit } = params
    const userId = useSelector(getUserId)
    console.log(userId);
    const currentUserId = useSelector(getCurrentUserId())
    return (
        <>
            <UsersLoader>
                {userId ? (
                        <UsersListPage />
                ) : (
                    edit ? (
                        userId === currentUserId ? (
                            <EditUserPage />
                        ) : (
                            <Link
                                to={`/users/${currentUserId}/edit`}
                                replace
                            />
                        )
                    ) : (
                        <UserPage />
                    )
                )}
            </UsersLoader>
        </>
    )
}

export default Users
