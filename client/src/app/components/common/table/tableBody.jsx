import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

const TableBody = ({ data, columns }) => {
    const renderContent = (item, column) => {
        if (columns[column].component) {
            const component = columns[column].component
            if (typeof component === 'function') {
                return component(item)
            }
            return component
        }
        return _.get(item, columns[column].path)
    }
    return (
        <tbody>
            {data.map((item) => (
                <tr className='bg-white hover:bg-gray-600 border-b dark:bg-gray-900 dark:border-gray-700' key={item._id}>
                    {Object.keys(columns).map((column) => (
                        <td className='py-6 w-[74rem] px-6 h-15' key={column}>{renderContent(item, column)}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}

TableBody.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.object.isRequired
}

export default TableBody
