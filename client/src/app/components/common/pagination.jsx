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
                            'py-2 px-3 rounded-lg leading-tight bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white page-item' +
                            (page === currentPage ? ' active' : '')
                        }
                    >
                        <button
                            className="z-10 py-2 px-3 leading-tight hover:bg-gray-800 hover:text-gray-400 border-gray-700 bg-gray-700 text-gray-400"
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
