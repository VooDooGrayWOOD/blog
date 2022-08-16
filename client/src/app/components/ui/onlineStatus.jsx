import React from 'react'
import PropTypes from 'prop-types'

const OnlineStatus = ({ length }) => {
    return length === 0 ? (
        <h2>
            <span className="badge bg-danger">{'Никто нет на сайте'}</span>
        </h2>
    ) : length > 4 || length === 1 ? (
        <h2>
            <span className="badge bg-primary">
                {length} {'человек'} {'онлайн'}
            </span>
        </h2>
    ) : (
        <h2>
            <span className="badge bg-primary">
                {length} {'человека '} {'онлайн'}
            </span>
        </h2>
    )
}

OnlineStatus.propTypes = {
    length: PropTypes.number.isRequired
}

export default OnlineStatus
