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
        dispatch(createComments(data, userId))
    }

    const handleRemoveComment = (id) => {
        dispatch(deleteComment(id))
    }

    const sortedComments = orderBy(comments, ['created_at'], ['desc'])

    return (
        <>
            <div className="card mb-2">
                <div className="card-body ">
                    <AddCommentForm onSubmit={handleSubmit} />
                </div>
            </div>
            {sortedComments.length > 0 && (
                <div className="card mb-3">
                    <div className="card-body ">
                        <h2>Comments</h2>
                        <hr />
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
        </>
    )
}

export default Comments
