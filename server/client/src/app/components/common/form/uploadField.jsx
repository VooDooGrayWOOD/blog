import React from 'react'
import PropTypes from 'prop-types'
import TextField from './textField'

const UploadField = ({ value, name, onChange }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
    }
    return (
        <>
            <label
                className="mb-2 block text-sm font-medium text-teal-700"
                htmlFor={name}
            >
                Загрузить изображение
            </label>
            <input
                name={name}
                value={value}
                onChange={handleChange}
                className="block cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id={name}
                type="file"
            />
            <p className="mt-1 mb-4 text-sm text-teal-700" id="file_input_help">
                SVG, PNG, JPG or GIF (MAX. 800x400px).
            </p>
        </>
    )
}

UploadField.defaultProps = {
    type: 'image'
}
UploadField.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}

export default UploadField
