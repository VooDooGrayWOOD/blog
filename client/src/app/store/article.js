import { createSlice, createAction } from '@reduxjs/toolkit'
import articleService from '../services/article.service'
import { history } from '../utils/history'
import localStorageService from '../services/localStorage.service'
import login from '../layouts/login'

const articleSlice = createSlice({
    name: 'article',
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        articleRequested: (state) => {
            state.isLoading = true
        },
        articleReceved: (state, action) => {
            state.entities = action.payload
            state.dataLoaded = true
            state.isLoading = false
        },
        articleRequestFiled: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        articleCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = []
            }
            state.entities.push(action.payload)
        },
        articleUpdateSuccessed: (state, action) => {
            state.entities[
                state.entities.findIndex((u) => u._id === action.payload._id)
            ] = action.payload
        },
        articleRemove: (state, action) => {
            state.entities = state.entities.filter(
                (n) => n._id !== action.payload
            )
        }
    }
})

const { reducer: articleReducer, actions } = articleSlice
const {
    articleRequested,
    articleReceved,
    articleRequestFiled,
    articleCreated,
    articleRemove,
    articleUpdateSuccessed
} = actions

const createArticleRequested = createAction(
    '/articleTable/createArticleRequested'
)
const deleteArticleRequested = createAction(
    '/articleTable/deleteArticleRequested'
)
const articleUpdateRequested = createAction(
    'articleTable/articleUpdateRequested'
)
const updateArticleFailed = createAction('articleTable/updateArticleFailed')

export const loadArticleList = () => async (dispatch) => {
    dispatch(articleRequested())
    try {
        const { content } = await articleService.get()
        dispatch(articleReceved(content))
    } catch (error) {
        dispatch(articleRequestFiled())
    }
}

export const createArticle = (payload) => async (dispatch) => {
    dispatch(createArticleRequested())
    try {
        const { content } = await articleService.createArticle(payload)
        dispatch(articleCreated(content))
    } catch (error) {
        dispatch(articleRequestFiled(error.message))
    }
}

export const updateArticle = (payload) => async (dispatch) => {
    dispatch(articleUpdateRequested())
    try {
        const { content } = await articleService.update(payload)
        dispatch(articleUpdateSuccessed(content))
        history.push(`/article/${content._id}`)
    } catch (error) {
        dispatch(updateArticleFailed(error.message))
    }
}

export const deleteArticle = (articleId) => async (dispatch) => {
    dispatch(deleteArticleRequested())
    try {
        const { content } = await articleService.removeArticle(articleId)
        if (!content) {
            dispatch(articleRemove(articleId))
        }
    } catch (error) {
        dispatch(articleRequestFiled(error.message))
    }
}

export const getArticleList = () => (state) => state.article.entities
export const getAuthorArticleId = () => (state) => state.article.entities.author
export const getArticleById = (articleId) => (state) => {
    if (state.article.entities) {
        return state.article.entities.find((u) => u._id === articleId)
    }
}

export default articleReducer
