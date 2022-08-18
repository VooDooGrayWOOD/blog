import React from 'react'
import PropTypes from 'prop-types'
import {Route, useNavigate} from 'react-router'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from '../../store/users'

const ProtectedRoute = ({ component: Component, children, ...rest }) => {
    const isLoggedIn = useSelector(getIsLoggedIn())
    console.log(isLoggedIn);
    const navigate = useNavigate()
    return (
        <Route
            {...rest}
            render={(props) => {
                if (!isLoggedIn) {
                    return navigate("/login", { replace: true })
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
