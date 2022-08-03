import { combineReducers, configureStore } from '@reduxjs/toolkit'
import usersReducer from './users'
import commentsReducer from './comments'

const rootReducer = combineReducers({
    users: usersReducer,
    comments: commentsReducer
})

export function createStore() {
    return configureStore({
        reducer: rootReducer
    })
}
