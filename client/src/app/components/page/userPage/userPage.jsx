import React from 'react'
import PropTypes from 'prop-types'
import UserCard from '../../ui/userCard'
import Comments from '../../ui/comments'
import { useSelector } from 'react-redux'
import {getUserId} from "../../../services/localStorage.service";
import {getUserById} from "../../../store/users";

const UserPage = ({userId}) => {
    console.log(userId);
    const user = useSelector(getUserById(userId))
    if (user) {
        return (
            <div className="container mx-auto max-w-[760px] pt-5 text-teal-700 text-3xl">
                <div className="flex">
                    <div className="flex mb-6">
                        <UserCard user={user} />
                    </div>
                    <div className="flex mb-6">
                        <Comments />
                    </div>
                </div>
            </div>
        )
    } else {
        return <h1>Loading...</h1>
    }
}

UserPage.propTypes = {
    userId: PropTypes.string
}

export default UserPage
