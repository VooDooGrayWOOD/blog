import { orderBy } from 'lodash'
import React, { useEffect } from 'react'
import CommentsList from '../common/comments/commentsList'
import AddCommentForm from '../common/comments/addCommentForm'
import { useDispatch, useSelector } from 'react-redux'
import {
    createComments,
    deleteComment,
    getComments,
    getCommentsLoadingStatus,
    loadCommentsList
} from '../../store/comments'
import { useParams } from 'react-router-dom'

const Comments = () => {
    const { userId } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadCommentsList(userId))
    }, [userId, dispatch])
    const isLoading = useSelector(getCommentsLoadingStatus())
    const comments = useSelector(getComments())

    const handleSubmit = (data) => {
        dispatch(createComments({ ...data, pageId: userId }))
    }

    const handleRemoveComment = (id) => {
        dispatch(deleteComment(id))
    }

    const sortedComments = orderBy(comments, ['created_at'], ['desc'])

    return (
        <div className="flex-col">
            <div>
                <div className="ml-3 block rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                    <AddCommentForm onSubmit={handleSubmit} />
                </div>
            </div>
            {sortedComments.length > 0 && (
                <div>
                    <div className="ml-3 mt-3 block rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                        <h2>Комментарии</h2>
                        {!isLoading ? (
                            <CommentsList
                                comments={sortedComments}
                                onRemove={handleRemoveComment}
                            />
                        ) : (
                            'Loading...'
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Comments
