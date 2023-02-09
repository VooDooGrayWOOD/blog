import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { validator } from '../../../../utils/validator'
import TextField from '../../../common/form/textField'
import RadioField from '../../../common/form/radioField'
import { createArticle } from '../../../../store/article'
import TextAreaField from '../../../common/form/textAreaField'
import BackHistoryButton from '../../../common/backButton'

const NewArticlePage = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        title: '',
        description: '',
        image: '',
        source: '',
        category: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    const validatorConfig = {
        title: {
            isRequired: {
                message: 'Заголовок обязателен для заполнения'
            }
        },
        description: {
            isRequired: {
                message: 'Описание обязательно для заполнения'
            }
        },
        image: {
            isRequired: {
                message: 'Добавьте ссылку изображение'
            }
        },
        source: {
            isRequired: {
                message: 'Добавьте источник статьи'
            }
        },
        category: {
            isRequired: {
                message: 'Добавьте категорию'
            }
        }
    }
    useEffect(() => {
        validate()
    }, [data, validate])

    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }
    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        const newData = {
            ...data
        }
        dispatch(createArticle(newData))
        window.history.go(-2)
    }

    return (
        <div className="container mx-auto max-w-[760px] pt-5 text-xl text-teal-700">
            <BackHistoryButton />
            <form onSubmit={handleSubmit} className="grid justify-items-center">
                <TextField
                    label="Заголовок"
                    name="title"
                    value={data.title}
                    onChange={handleChange}
                    error={errors.title}
                />
                <TextAreaField
                    label="Описание"
                    name="description"
                    value={data.description}
                    onChange={handleChange}
                    error={errors.description}
                />
                <TextField
                    label="Источник"
                    name="source"
                    value={data.source}
                    onChange={handleChange}
                    error={errors.source}
                />
                <RadioField
                    options={[
                        { name: 'General', value: 'general' },
                        { name: 'Sport', value: 'sport' },
                        { name: 'Other', value: 'other' }
                    ]}
                    value={data.category}
                    name="category"
                    onChange={handleChange}
                    label="Выберите категорию статьи"
                />
                <TextField
                    label="Изображение"
                    name="image"
                    value={data.image}
                    onChange={handleChange}
                    error={errors.image}
                />
                {/*<UploadField*/}
                {/*    name="image"*/}
                {/*    value={data.image}*/}
                {/*    onChange={handleChange}*/}
                {/*/>*/}
                <button
                    className="mb-10 rounded border border-blue-700 bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
                    type="submit"
                    disabled={!isValid}
                >
                    Отправить
                </button>
            </form>
        </div>
    )
}

export default NewArticlePage
