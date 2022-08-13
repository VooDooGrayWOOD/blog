import React from 'react'
import PropTypes from 'prop-types'

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === 'asc' ? 'desc' : 'asc'
            })
        } else {
            onSort({ path: item, order: 'asc' })
        }
    }

    const renderSortIcon = () => {
        return selectedSort.order === 'asc' ? 'up-fill' : 'down-fill'
    }

    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={
                            columns[column].path
                                ? () => handleSort(columns[column].path)
                                : undefined
                        }
                        {...{ role: columns[column].path && 'button' }}
                        scope="col"
                    >
                        {columns[column].name}
                        {selectedSort.path === columns[column].path ? (
                            <i className={'bi bi-caret-' + renderSortIcon()} />
                        ) : null}
                    </th>
                ))}
            </tr>
        </thead>
    )
}

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
}

export default TableHeader
