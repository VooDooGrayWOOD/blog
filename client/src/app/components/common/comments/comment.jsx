import React from 'react'
import { displayDate } from '../../../utils/displayDate'
import PropTypes from 'prop-types'
import { getCurrentUserId, getUserById } from '../../../store/users'
import { useSelector } from 'react-redux'

const Comment = ({
    content,
    created_at: created,
    _id: id,
    userId,
    onRemove
}) => {
    const currentUserId = useSelector(getCurrentUserId())
    const user = useSelector(getUserById(userId))

    const deleteButton = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
        </svg>
    )

    return (
        <div className="w-full max-w-3xl bg-white mt-3 p-3 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex">
                <div>
                    <div className="flex">
                        <img
                            src={user.image}
                            className="rounded-circle shadow-1-strong me-3 mr-[30px]"
                            alt="avatar"
                            width="40"
                            height="40"
                        />
                        <div className="flex-col justify-around">
                            <div className="mb-4">
                                <div className="flex justify-around items-center">
                                    <div className="flex">
                                        <p className="text-xl mb-1">
                                            {user && user.name}{' '}
                                            <span className="text-sm">
                                                - {displayDate(created)}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xl break-all">{content}</p>
                        </div>
                    </div>
                </div>
                <div className="ml-auto mb-auto">
                    {currentUserId === userId && (
                        <button className="" onClick={() => onRemove(id)}>
                            {deleteButton}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

Comment.propTypes = {
    content: PropTypes.string,
    edited_at: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    created_at: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    userId: PropTypes.string,
    onRemove: PropTypes.func,
    _id: PropTypes.string
}

export default Comment
