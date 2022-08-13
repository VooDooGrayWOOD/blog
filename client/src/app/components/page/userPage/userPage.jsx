import React from 'react'
import PropTypes from 'prop-types'
import UserCard from '../../ui/userCard'
import Comments from '../../ui/comments'
import { useSelector } from 'react-redux'
import { getUserById } from '../../../store/users'

const UserPage = ({ userId }) => {
    const user = useSelector(getUserById(userId))
    console.log(user)
    if (user) {
        return (
            <div className="container mx-auto max-w-[760px] pt-5 text-teal-700 text-3xl">
                <div className="flex">
                    <div className="flex mb-3">
                        <UserCard user={user} />
                    </div>
                    <div className="">
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
