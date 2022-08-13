import React, { useState } from 'react'
import LoginForm from '../components/ui/loginForm'
import { useParams } from 'react-router-dom'
import RegisterForm from '../components/ui/registerForm'

const Login = () => {
    const { type } = useParams()
    const [formType, setFormType] = useState(
        type === 'register' ? type : 'login'
    )
    const toggleFormType = () => {
        setFormType((prevState) =>
            prevState === 'register' ? 'login' : 'register'
        )
    }

    return (
        <div className="container m-auto">
            <div>
                {formType === 'register' ? (
                    <div className="">
                        <h3 className="flex justify-center mb-4">
                            Зарегестрироваться
                        </h3>
                        <RegisterForm />
                        <p className="flex justify-center pt-4">
                            Есть аккаунт?{' '}
                            <a
                                role="button"
                                onClick={toggleFormType}
                                className="pl-3"
                            >
                                {' '}
                                Войти
                            </a>
                        </p>
                    </div>
                ) : (
                    <div className="flex-col items-center">
                        <h3 className="flex justify-center mb-4">Войти</h3>
                        <LoginForm />
                        <p className="flex justify-center pt-4">
                            Нет аккаунта?{' '}
                            <a
                                role="button"
                                onClick={toggleFormType}
                                className="pl-3"
                            >
                                {' '}
                                Зарегестрироваться
                            </a>
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Login
