import { createSlice } from '@reduxjs/toolkit'
import userService from '../services/user.service'
import authService from '../services/auth.service'
import localStorageService from '../services/localStorage.service'
import { createAction } from '@reduxjs/toolkit'
import { navigate } from '../utils/history'
import generateAuthError from '../utils/generateAuthError'

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
    userCreated,
    userLoggedOut,
    userUpdateSuccessed
} = actions

const authRequested = createAction('users/authRequested')
const userCreateRequested = createAction('users/userCreateRequested')
const createUserFailed = createAction('users/createUserFailed')
const userUpdateRequested = createAction('users/userUpdateRequested')
const updateUserFailed = createAction('users/updateUserFailed')

export const logIn =
    ({ payload, redirect }) =>
    async (dispatch) => {
        const { email, password } = payload
        dispatch(authRequested())
        try {
            const data = await authService.logIn({ email, password })
            dispatch(authRequestSuccess({ userId: data.localId }))
            localStorageService.setTokens(data)
            navigate.push(redirect)
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

export const signUp =
    ({ email, password, ...rest }) =>
    async (dispatch) => {
        dispatch(authRequested())
        try {
            const data = await authService.register({ email, password })
            localStorageService.setTokens(data)
            dispatch(authRequestSuccess({ userId: data.localId }))
            dispatch(
                createUser({
                    _id: data.localId,
                    email,
                    image: `https://avatars.dicebear.com/api/avataaars/${(
                        Math.random() + 1
                    )
                        .toString(36)
                        .substring(7)}.svg`,
                    ...rest
                })
            )
        } catch (error) {
            dispatch(authRequestFailed(error.message))
        }
    }

export const logOut = () => (dispatch) => {
    localStorageService.removeAuthData()
    dispatch(userLoggedOut())
    navigate.push('/')
}

function createUser(payload) {
    return async function (dispatch) {
        dispatch(userCreateRequested())
        try {
            const { content } = await userService.create(payload)
            dispatch(userCreated(content))
            navigate.push('/users')
        } catch (error) {
            dispatch(createUserFailed(error.message))
        }
    }
}

export const updateUser = (payload) => async (dispatch) => {
    dispatch(userUpdateRequested())
    try {
        const { content } = await userService.update(payload)
        dispatch(userUpdateSuccessed(content))
        navigate.push(`/users/${content._id}`)
    } catch (error) {
        dispatch(updateUserFailed(error.message))
    }
}

export const loadUsersList = () => async (dispatch, getState) => {
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
