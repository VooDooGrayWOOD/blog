import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Input, Button } from '@material-tailwind/react'

const TextField = ({ label, type, value, name, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false)

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
    }

    const showPassIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
        </svg>
    )

    const dontShowPassIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            />
        </svg>
    )

    const getInputClasses = () => {
        return (
            'rounded-lg border-none bg-gray-700 placeholder-gray-400 text-white focus:ring-teal-700 focus:border-teal-500' +
            (error ? ' is-invalid' : '')
        )
    }

    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState)
    }

    return (
        <div className="mb-4">
            <div className="min-w-[320px]">
                <label
                    htmlFor={name}
                    className="mb-2 block text-sm font-medium text-gray-500"
                >
                    {label}
                </label>
                <div className="input-group has-validation flex items-center">
                    <Input
                        id={name}
                        value={value}
                        name={name}
                        type={showPassword ? 'text' : type}
                        className={getInputClasses()}
                        onChange={handleChange}
                        required
                    />
                    <div className="flex">
                        {type === 'password' && (
                            <Button
                                type="button"
                                className="m-auto rounded-full bg-gray-800 p-0 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                onClick={toggleShowPassword}
                            >
                                <i>
                                    {showPassword
                                        ? showPassIcon
                                        : dontShowPassIcon}
                                </i>
                            </Button>
                        )}
                    </div>
                </div>
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    )
}
TextField.defaultProps = {
    type: 'text'
}
TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
}

export default TextField
