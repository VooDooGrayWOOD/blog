import React from 'react'
import PropTypes from 'prop-types'
import UserCard from '../../../ui/userCard'
import Comments from '../../../ui/comments'
import { useSelector } from 'react-redux'
import { getUserById } from '../../../../store/users'
import { useParams } from 'react-router-dom'

const UserPage = () => {
    const params = useParams()
    const { userId } = params
    const user = useSelector(getUserById(userId))
    if (user) {
        return (
            <div className="container mx-auto flex justify-evenly pt-5 text-3xl text-teal-700">
                <div className="flex">
                    <div className="mb-6">
                        <UserCard user={user} />
                    </div>
                    <div className="mb-6">
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
