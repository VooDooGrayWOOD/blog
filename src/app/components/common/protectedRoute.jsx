import React from 'react'
import PropTypes from 'prop-types'
import { Navigate, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from '../../store/users'

const ProtectedRoute = ({ component: Component, children, ...rest }) => {
    const isLoggedIn = useSelector(getIsLoggedIn())
    console.log(isLoggedIn)
    return (
        <Route
            {...rest}
            render={(props) => {
                if (!isLoggedIn) {
                    return <Navigate to="/login" replace />
                }
                return Component ? <Component {...props} /> : children
            }}
        />
    )
}

ProtectedRoute.propType = {
    component: PropTypes.func,
    location: PropTypes.object,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default ProtectedRoute
