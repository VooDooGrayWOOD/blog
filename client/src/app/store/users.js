import { createSlice } from '@reduxjs/toolkit'
import userService from '../services/user.service'
import authService from '../services/auth.service'
import localStorageService from '../services/localStorage.service'
import { createAction } from '@reduxjs/toolkit'
import generateAuthError from '../utils/generateAuthError'
import { history } from '../utils/history'

const initialState = localStorageService.getAccessToken()
    ? {
          entities: null,
          isLoading: true,
          error: null,
          auth: { userId: localStorageService.getUserId() },
          isLoggedIn: true,
          dataLoaded: false
      }
    : {
          entities: null,
          isLoading: false,
          error: null,
          auth: null,
          isLoggedIn: false,
          dataLoaded: false
      }

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userRequested: (state) => {
            state.isLoading = true
        },
        userReceved: (state, action) => {
            state.entities = action.payload
            state.dataLoaded = true
            state.isLoading = false
        },
        usersRequestFiled: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        authRequestSuccess: (state, action) => {
            state.auth = action.payload
            state.isLoggedIn = true
        },
        authRequestFailed: (state, action) => {
            state.error = action.payload
        },
        userCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = []
            }
            state.entities.push(action.payload)
        },
        userLoggedOut: (state) => {
            state.entities = null
            state.isLoggedIn = false
            state.auth = null
            state.dataLoaded = false
        },
        userUpdateSuccessed: (state, action) => {
            state.entities[
                state.entities.findIndex((u) => u._id === action.payload._id)
            ] = action.payload
        },
        authRequested: (state) => {
            state.error = null
        }
    }
})

const { reducer: usersReducer, actions } = usersSlice
const {
    userRequested,
    userReceved,
    usersRequestFiled,
    authRequestSuccess,
    authRequestFailed,
    userLoggedOut,
    userUpdateSuccessed
} = actions

const authRequested = createAction('users/authRequested')
const userUpdateRequested = createAction('users/userUpdateRequested')
const updateUserFailed = createAction('users/updateUserFailed')

export const logIn =
    ({ payload }) =>
    async (dispatch) => {
        const { email, password } = payload
        dispatch(authRequested())
        try {
            const data = await authService.logIn({ email, password })
            localStorageService.setTokens(data)
            dispatch(authRequestSuccess({ userId: data.userId }))
        } catch (error) {
            const { code, message } = error.response.data.error
            if (code === 400) {
                const errorMessage = generateAuthError(message)
                dispatch(authRequestFailed(errorMessage))
            } else {
                dispatch(authRequestFailed(error.message))
            }
        }
    }

export const signUp = (payload) => async (dispatch) => {
    dispatch(authRequested())
    try {
        const data = await authService.register(payload)
        console.log(data)
        localStorageService.setTokens(data)
        dispatch(authRequestSuccess({ userId: data.userId }))
    } catch (error) {
        dispatch(authRequestFailed(error.message))
    }
}

export const logOut = () => (dispatch) => {
    localStorageService.removeAuthData()
    dispatch(userLoggedOut())
    console.log(history)
}

export const updateUser = (payload) => async (dispatch) => {
    dispatch(userUpdateRequested())
    try {
        const { content } = await userService.update(payload)
        dispatch(userUpdateSuccessed(content))
    } catch (error) {
        dispatch(updateUserFailed(error.message))
    }
}

export const loadUsersList = () => async (dispatch) => {
    dispatch(userRequested())
    try {
        const { content } = await userService.get()
        dispatch(userReceved(content))
    } catch (error) {
        dispatch(usersRequestFiled(error.message))
    }
}

export const getUsersList = () => (state) => state.users.entities
export const getCurrentUserData = () => (state) => {
    return state.users.entities
        ? state.users.entities.find((u) => u._id === state.users.auth.userId)
        : null
}
export const getUserById = (userId) => (state) => {
    if (state.users.entities) {
        return state.users.entities.find((u) => u._id === userId)
    }
}

export const getIsLoggedIn = () => (state) => state.users.isLoggedIn
export const getDataStatus = () => (state) => state.users.dataLoaded
export const getCurrentUserId = () => (state) => state.users.auth.userId
export const getUsersLoadingStatus = () => (state) => state.users.isLoading
export const getAuthErrors = () => (state) => state.users.error

export default usersReducer
