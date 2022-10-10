import { createAction, createSlice } from '@reduxjs/toolkit'
import commentService from '../services/comment.service'

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        commentsRequested: (state) => {
            state.isLoading = true
        },
        commentsReceived: (state, action) => {
            state.entities = action.payload
            state.isLoading = false
        },
        commentsRequestFiled: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        commentsCreated: (state, action) => {
            state.entities.push(action.payload)
        },
        commentRemove: (state, action) => {
            state.entities = state.entities.filter(
                (n) => n._id !== action.payload
            )
        }
    }
})

const { reducer: commentsReducer, actions } = commentsSlice
const {
    commentsRequested,
    commentsReceived,
    commentsRequestFiled,
    commentsCreated,
    commentRemove
} = actions

const createCommentsRequested = createAction(
    '/comments/createCommentsRequested'
)
const deleteCommentsRequested = createAction(
    '/comments/deleteCommentsRequested'
)

export const loadCommentsList = (pageId) => async (dispatch) => {
    dispatch(commentsRequested())
    try {
        const { content } = await commentService.getComments(pageId)
        dispatch(commentsReceived(content))
    } catch (error) {
        dispatch(commentsRequestFiled(error.message))
    }
}

export const createComments = (payload) => async (dispatch) => {
    dispatch(createCommentsRequested())
    try {
        const { content } = await commentService.createComment(payload)
        dispatch(commentsCreated(content))
    } catch (error) {
        dispatch(commentsRequestFiled(error.message))
    }
}

export const deleteComment = (id) => async (dispatch) => {
    dispatch(deleteCommentsRequested())
    try {
        const { content } = await commentService.removeComment(id)
        if (!content) {
            dispatch(commentRemove(id))
        }
    } catch (error) {
        dispatch(commentsRequestFiled(error.message))
    }
}

export const getComments = () => (state) => state.comments.entities
export const getCommentsLoadingStatus = () => (state) =>
    state.comments.isLoading

export default commentsReducer
