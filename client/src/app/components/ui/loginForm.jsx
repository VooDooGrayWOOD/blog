import React, { useEffect, useState } from 'react'
import { validator } from '../../utils/validator'
import TextField from '../common/form/textField'
import CheckBoxField from '../common/form/checkBoxField'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthErrors, logIn } from '../../store/users'
import { navigate } from '../../utils/navigate'

const LoginForm = () => {
    const loginError = useSelector(getAuthErrors())
    const [data, setData] = useState({ email: '', password: '', stayOn: false })
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    const validatorConfig = {
        email: {
            isRequired: {
                message: 'Электронная почта обязательна для заполнения'
            },
            isEmail: { message: 'Email введён не корректно' }
        },
        password: {
            isRequired: {
                message: 'Пароль обязателен для заполнения'
            },
            isCapitalSymbol: {
                message: 'Пароль должен содеражать хотя бы одну заглавную букву'
            },
            isContainDigit: {
                message: 'Пароль должен содеражать хотя бы одну цифру'
            },
            min: {
                message:
                    'Пароль должен состоять минимум из 8 (восьми) символов',
                value: 8
            }
        }
    }

    useEffect(() => {
        validate()
    }, [data])

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
        dispatch(logIn({ payload: data }))
        navigate.push('/')
    }

    return (
        <form onSubmit={handleSubmit} className="grid justify-items-center">
            <TextField
                label="Электронная почта"
                onChange={handleChange}
                name="email"
                value={data.email}
                error={errors.email}
            />
            <TextField
                label="Пароль"
                type="password"
                onChange={handleChange}
                name="password"
                value={data.password}
                error={errors.password}
            />
            <CheckBoxField
                value={data.stayOn}
                onChange={handleChange}
                name="stayOn"
            >
                Оставаться в системе
            </CheckBoxField>
            {loginError && <p className="text-danger">{loginError}</p>}
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                disabled={!isValid}
            >
                Отправить
            </button>
        </form>
    )
}

export default LoginForm
