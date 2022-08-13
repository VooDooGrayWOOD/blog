import React from 'react'
import { useNavigate } from 'react-router'

const BackHistoryButton = () => {
    const history = useNavigate()
    return (
        <button className="btn btn-primary" onClick={() => history.goBack()}>
            <i className="bi bi-caret-left" />
            Назад
        </button>
    )
}

export default BackHistoryButton
