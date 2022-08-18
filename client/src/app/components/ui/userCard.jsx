import React from 'react'
// import { history } from '../../utils/history'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { getCurrentUserData, getCurrentUserId } from '../../store/users'
import {useNavigate} from "react-router";


const UserCard = ({ id }) => {
    const currentUser = useSelector(getCurrentUserData())
    const currentUserId = useSelector(getCurrentUserId())
    // const handleClick = () => {
    //     history.replace(`/users/${currentUserId}/edit`)
    // }
    const navigate = useNavigate()

    return (
        <div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            {currentUserId === id && (
                <div className="flex justify-end px-4 pt-4">
                    <button
                        className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                        type="button"
                        onClick={() => {navigate(`/users/${currentUserId}/edit`)}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
                        </svg>
                    </button>
            </div>
            )}
            <div className="flex flex-col items-center pb-10">
                <img
                    className="m-12 w-[10rem] h-[10rem] rounded-full shadow-lg"
                    src={currentUser.image}
                    alt="current user"
                />
                <h5 className="mb-1 text-[2.5rem] font-medium text-gray-900 dark:text-white">
                    {currentUser.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                    Visual Designer
                </span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <a
                        href="#"
                        className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add friend
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                    >
                        Message
                    </a>
                </div>
            </div>
        </div>
    )
}

UserCard.propTypes = {
    user: PropTypes.string
}

export default UserCard
