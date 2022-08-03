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
        <div className="container min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[36rem] w-full space-y-8">
                {formType === 'register' ? (
                    <>
                        <h3 className="mb-4">Зарегестрироваться</h3>
                        <RegisterForm />
                        <p>
                            Есть аккаунт?{' '}
                            <a role="button" onClick={toggleFormType}>
                                {' '}
                                Войти
                            </a>
                        </p>
                    </>
                ) : (
                    <>
                        <h3 className="mb-4">Войти</h3>
                        <LoginForm />
                        <p>
                            Нет аккаунта?{' '}
                            <a role="button" onClick={toggleFormType}>
                                {' '}
                                Зарегестрироваться
                            </a>
                        </p>
                    </>
                )}
            </div>
        </div>
    )
}

export default Login
