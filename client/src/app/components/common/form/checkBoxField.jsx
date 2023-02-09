import React from 'react'
import PropTypes from 'prop-types'

const CheckBoxField = ({ name, value, onChange, children, error }) => {
    const handleChange = () => {
        onChange({ name: name, value: !value })
    }

    const getInputClasses = () => {
        return 'sr-only peer' + (error ? ' is-invalid' : '')
    }

    return (
        <div className="form-check mb-4">
            <label
                htmlFor="default-toggle"
                className="flex relative items-center mb-4 cursor-pointer"
            >
                <input
                    type="checkbox"
                    value=""
                    id="default-toggle"
                    className={getInputClasses()}
                    onChange={handleChange}
                    checked={value}
                />
                <div className="w-11 h-6 bg-teal-500 rounded-full peer peer-focus:ring-4 peer-focus:ring-teal-300 peer-checked:after:translate-x-full peer-checked:after:border-gray after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-gray after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600">
                    {' '}
                </div>
                <span className="ml-4 text-sm font-medium text-teal-500">
                    {children}
                </span>
            </label>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}

CheckBoxField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    error: PropTypes.string
}

export default CheckBoxField
