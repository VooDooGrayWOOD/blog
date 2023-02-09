import React from 'react'
import PropTypes from 'prop-types'

const TextAreaField = ({ label, value, name, onChange, error }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
    }

    const getInputClasses = () => {
        return (
            'p-2.5 w-full min-w-[250px] text-sm rounded-lg border-none bg-gray-700 placeholder-gray-400 text-white focus:ring-teal-700 focus:border-teal-500' +
            (error ? ' is-invalid' : '')
        )
    }

    return (
        <div className="mb-4">
            <label
                htmlFor={name}
                className="mb-2 block text-sm font-medium text-gray-500"
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
