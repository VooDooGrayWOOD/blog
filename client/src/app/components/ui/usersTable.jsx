import React from 'react'
import PropTypes from 'prop-types'
import Table from '../common/table/table'
import { Link } from 'react-router-dom'

const UserTable = ({ users, onSort, selectedSort }) => {
    const columns = {
        name: {
            path: 'name',
            name: 'Имя',
            component: (user) => (
                <Link to={`/users/${user._id}`}>{user.name}</Link>
            )
        }
    }
    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={users}
        />
    )
}

UserTable.propTypes = {
    users: PropTypes.array,
    onSort: PropTypes.func,
    selectedSort: PropTypes.object,
    onToggleBookMark: PropTypes.func
}

export default UserTable
