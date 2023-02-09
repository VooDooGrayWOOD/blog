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
            <form className="" onSubmit={handleSubmit}>
                <TextAreaField
                    value={data.content || ''}
                    onChange={handleChange}
                    name="content"
                    label="Сообщение"
                    error={errors.content}
                />
                <div className="flex content-end">
                    <button className="rounded-lg border border-none bg-teal-500 py-2 px-4 hover:bg-teal-700 hover:text-white">
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
