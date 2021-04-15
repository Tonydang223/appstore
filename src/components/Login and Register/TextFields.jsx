import { ErrorMessage, useField } from 'formik'
import React from 'react'
import "../../css/Form.scss";


const TextFields = ({placeholder,label,...props}) => {
    const[field,meta]=useField(props);

    return (
        <div>
            <div>
            <input className=" forms shadow-none" {...field} 
            {...props} placeholder={placeholder}
            autoComplete='off'/>  
            </div>
            <br/>
            <ErrorMessage name={field.name} render={msg=>(<span style={{color:"red"}}>{msg}</span>)}/>

        </div>
    )
}

export default TextFields
