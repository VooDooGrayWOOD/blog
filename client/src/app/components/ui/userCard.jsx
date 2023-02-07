import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { getCurrentUserId } from '../../store/users'
import { useNavigate } from 'react-router-dom'

const UserCard = ({ user }) => {
    const currentUserId = useSelector(getCurrentUserId())
    const navigate = useNavigate()

    return (
        <div className="w-full rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
            {currentUserId === user._id && (
                <div className="flex justify-end px-4 pt-4">
                    <button
                        className="inline-block rounded-lg p-1.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                        type="button"
                        onClick={() => {
                            navigate(`/users/${currentUserId}/edit`)
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                            />
                        </svg>
                    </button>
                </div>
            )}
            <div className="flex flex-col items-center pb-10">
                <img
                    className="m-12 h-[10rem] w-[10rem] rounded-full shadow-lg"
                    src={user.image}
                    alt="current user"
                />
                <h5 className="mb-1 text-center font-medium text-gray-900 dark:text-white">
                    {user.name}
                </h5>
                <span className="pt-3 text-center text-sm text-gray-500 dark:text-gray-400">
                    Frontend Developer
                </span>
                {/*<div className="mt-4 flex space-x-3 md:mt-6">*/}
                {/*    <Link*/}
                {/*        to="#"*/}
                {/*        className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"*/}
                {/*    >*/}
                {/*        Add friend*/}
                {/*    </Link>*/}
                {/*    <Link*/}
                {/*        to="#"*/}
                {/*        className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"*/}
                {/*    >*/}
                {/*        Message*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

UserCard.propTypes = {
    user: PropTypes.object
}

export default UserCard
