import React from 'react'
import PropTypes from 'prop-types'

const OnlineStatus = ({ length }) => {
    return length === 0 ? (
        <h2>
            <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">{'Никто нет на сайте'}</span>
        </h2>
    ) : length > 4 || length === 1 ? (
        <h2>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                {length} {'человек'} {'онлайн'}
            </span>
        </h2>
    ) : (
        <h2>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                {length} {'человека '} {'онлайн'}
            </span>
        </h2>
    )
}

OnlineStatus.propTypes = {
    length: PropTypes.number.isRequired
}

export default OnlineStatus
