import { combineReducers, configureStore } from '@reduxjs/toolkit'
import usersReducer from './users'
import commentsReducer from './comments'
import articleReducer from './article'

const rootReducer = combineReducers({
    users: usersReducer,
    comments: commentsReducer,
    article: articleReducer
})

export function createStore() {
    return configureStore({
        reducer: rootReducer
    })
}
