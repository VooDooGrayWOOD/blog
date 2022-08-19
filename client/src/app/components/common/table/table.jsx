import React from 'react'
import PropTypes from 'prop-types'
import TableBody from './tableBody'
import TableHeader from './tableHeader'

const Table = ({ onSort, selectedSort, columns, data, children }) => {
    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="table-auto">
                {children || (
                    <>
                        <TableHeader {...{ onSort, selectedSort, columns }} />
                        <TableBody {...{ columns, data }} />
                    </>
                )}
            </table>
        </div>
    )
}

Table.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    children: PropTypes.array
}

export default Table
