import React from 'react'
import PropTypes from 'prop-types'
import UserCard from '../../ui/userCard'
import Comments from '../../ui/comments'
import { useSelector } from 'react-redux'
import { getUserById } from '../../../store/users'

const UserPage = ({ userId }) => {
    const user = useSelector(getUserById(userId))

    if (user) {
        return (
            <div className="container mx-auto max-w-[760px] pt-5 text-teal-700 text-3xl">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <UserCard user={user} />
                    </div>
                    <div className="col-md-8">
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
