import React, { useEffect, useState } from 'react'
import { validator } from '../../../../utils/validator'
import TextField from '../../../common/form/textField'
import RadioField from '../../../common/form/radioField'
import BackHistoryButton from '../../../common/backButton'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUserData, updateUser } from '../../../../store/users'

const EditUserPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()
    const dispatch = useDispatch()
    const currentUser = useSelector(getCurrentUserData())

    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        dispatch(
            updateUser({
                ...data
            })
        )
    }

    useEffect(() => {
        if (currentUser && !data) {
            setData({
                ...currentUser
            })
        }
    }, [currentUser, data])

    useEffect(() => {
        if (data && isLoading) {
            setIsLoading(false)
        }
    }, [data])

    const validatorConfig = {
        email: {
            isRequired: {
                message: 'Электронная почта обязательна для заполнения'
            },
            isEmail: {
                message: 'Email введен некорректно'
            }
        },
        name: {
            isRequired: {
                message: 'Введите ваше имя'
            }
        }
    }
    useEffect(() => {
        validate()
    }, [data])
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }
    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }
    const isValid = Object.keys(errors).length === 0
    return (
        <div className="container">
            <div className="row-auto">
                <div className="p-4">
                    <BackHistoryButton />
                    {!isLoading ? (
                        <form
                            onSubmit={handleSubmit}
                            className="grid justify-items-center"
                        >
                            <TextField
                                label="Имя"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextField
                                label="Электронная почта"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                error={errors.email}
                            />
                            <RadioField
                                options={[
                                    { name: 'Male', value: 'male' },
                                    { name: 'Female', value: 'female' },
                                    { name: 'Other', value: 'other' }
                                ]}
                                value={data.sex}
                                name="sex"
                                onChange={handleChange}
                                label="Выберите ваш пол"
                            />
                            <button
                                type="submit"
                                disabled={!isValid}
                                className="rounded border border-blue-700 bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
                            >
                                Обновить
                            </button>
                        </form>
                    ) : (
                        'Loading...'
                    )}
                </div>
            </div>
        </div>
    )
}

export default EditUserPage
