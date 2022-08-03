import React, { useEffect } from 'react'
import {
    getIsLoggedIn,
    getUsersLoadingStatus,
    loadUsersList
} from '../../../store/users'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

const AppLoader = ({ children }) => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(getIsLoggedIn())
    const usersStatusLoading = useSelector(getUsersLoadingStatus())
    useEffect(() => {
        if (isLoggedIn) {
            dispatch(loadUsersList())
        }
    }, [isLoggedIn])
    if (usersStatusLoading) return 'Loading...'
    return children
}

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}
export default AppLoader
