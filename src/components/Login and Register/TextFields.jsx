import { ErrorMessage, useField } from 'formik'
import React from 'react'

const TextFields = ({label,...props}) => {
    const[field,meta]=useField(props);

    return (
        <div>
            <label htmlFor={field.label}>{label}</label>
            <input className="form-control" {...field} 
            {...props} 
            autoComplete='off'/>
            <br/>
            <ErrorMessage name={field.name}/>

        </div>
    )
}

export default TextFields
