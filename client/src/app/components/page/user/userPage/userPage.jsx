import React from 'react'
import PropTypes from 'prop-types'
import UserCard from '../../../ui/userCard'
import Comments from '../../../ui/comments'
import { useSelector } from 'react-redux'
import { getUserById } from '../../../../store/users'
import { useParams } from 'react-router-dom'
import BackHistoryButton from '../../../common/backButton'

const UserPage = () => {
    const params = useParams()
    const { userId } = params
    const user = useSelector(getUserById(userId))
    if (user) {
        return (
            <>
                <div className="container mx-auto max-w-[760px] pt-5 text-l text-teal-700">
                    <BackHistoryButton />
                    <div className="justify-center md:flex">
                        <div className="m-3 mb-6">
                            <UserCard user={user} />
                        </div>
                        <div className="mb-6">
                            <Comments />
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return <h1>Loading...</h1>
    }
}

UserPage.propTypes = {
    userId: PropTypes.string
}

export default UserPage
