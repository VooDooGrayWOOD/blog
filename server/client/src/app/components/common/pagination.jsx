import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
    const pageCount = Math.ceil(itemsCount / pageSize)
    if (pageCount === 1) return null
    const pages = _.range(1, pageCount + 1)

    return (
        <nav aria-label="Page navigation example">
            <ul className="inline-flex items-center -space-x-px">
                {pages.map((page) => (
                    <li
                        aria-current="page"
                        key={'page_' + page}
                        className={
                            'py-2 px-3 rounded-lg leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white page-item' +
                            (page === currentPage ? ' active' : '')
                        }
                    >
                        <button
                            className="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
}

export default Pagination
