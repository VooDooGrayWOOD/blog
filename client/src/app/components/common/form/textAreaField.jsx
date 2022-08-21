import React from 'react'
import PropTypes from 'prop-types'

const TextAreaField = ({ label, value, name, onChange, error }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
    }

    const getInputClasses = () => {
        return (
            'p-2.5 w-full min-w-[450px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 form-control' +
            (error ? ' is-invalid' : '')
        )
    }

    return (
        <div className="mb-4">
            <label
                htmlFor={name}
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
                {label}
            </label>
            <div className="has-validation ">
                <textarea
                    id={name}
                    rows="6"
                    value={value}
                    name={name}
                    onChange={handleChange}
                    className={getInputClasses()}
                />
            </div>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}
TextAreaField.defaultProps = {
    type: 'text'
}
TextAreaField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
}

export default TextAreaField
