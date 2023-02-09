import React from 'react'
import PropTypes from 'prop-types'

const OnlineStatus = ({ length }) => {
    return length === 0 ? (
        <h2>
            <span className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-red-400 text-red-900">{'Никто нет на сайте'}</span>
        </h2>
    ) : length > 4 || length === 1 ? (
        <h2>
            <span className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-teal-500 text-teal-900">
                {length} {'человек'} {'онлайн'}
            </span>
        </h2>
    ) : (
        <h2>
            <span className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-teal-500 text-teal-900">
                {length} {'человека '} {'онлайн'}
            </span>
        </h2>
    )
}

OnlineStatus.propTypes = {
    length: PropTypes.number.isRequired
}

export default OnlineStatus
