import React, { useState } from 'react'
import TextAreaField from '../form/textAreaField'
import { validator } from '../../../utils/validator'
import PropTypes from 'prop-types'

const AddCommentForm = ({ onSubmit }) => {
    const [data, setData] = useState({})
    const [errors, setErrors] = useState({})
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }
    const validatorConfig = {
        content: {
            isRequired: {
                message: 'Сообщение не может быть пустым'
            }
        }
    }

    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const clearForm = () => {
        setData({})
        setErrors({})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        onSubmit(data)
        clearForm()
    }

    return (
        <div>
            <p>Добавить комментарий</p>
            <form onSubmit={handleSubmit}>
                <TextAreaField
                    value={data.content || ''}
                    onChange={handleChange}
                    name="content"
                    label="Сообщение"
                    error={errors.content}
                />
                <div className="flex content-end">
                    <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Опубликовать
                    </button>
                </div>
            </form>
        </div>
    )
}

AddCommentForm.propTypes = {
    onSubmit: PropTypes.func
}

export default AddCommentForm
