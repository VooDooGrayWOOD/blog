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
                <div className="m-3 block rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-md">
                    <AddCommentForm onSubmit={handleSubmit} />
                </div>
            </div>
            {sortedComments.length > 0 && (
                <div>
                    <div className="m-3 block rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-md">
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
