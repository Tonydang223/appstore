import { Button } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react'
import { Link } from 'react-router-dom';
import TextFields from './TextFields';

const SignUp = () => {
    return (
        <div>
            <h1>SIGN UP</h1>
     <Formik
       initialValues={{ 
        firstName: '',
        LastName: '',
        email: '',
        password: '',
        ConfirmPassword: ''}}
        validate= {values => {
            const errors = {};
            if(!values.firstName.trim())
            {
                errors.firstName = "FirstName required"
            }else if((values.firstName).length < 6){
                errors.firstName ="the FirstName is higher than 6"
            }
            if(!values.LastName.trim())
            {
                errors.LastName = "LastName required"
            }else if((values.LastName).length < 6){
                errors.LastName ="The LastName is higher than 6"
            }
        
            if(!values.email.trim())
            {
                errors.email = "Email required"
            }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
            {
              errors.email = "Email address is invalid"
            }
            if(!values.password.trim())
            {
                errors.password = "Password required"
            }else if(values.password.length<6){
                errors.password = "Password needs to be at least 6 characters and more"
            }
            if(!values.ConfirmPassword.trim()){
                errors.ConfirmPassword = "ConfirmPassword required"
            }else if(values.ConfirmPassword !== values.password){
                errors.ConfirmPassword ="Password does not match"
            }
            return errors;
        }}
       onSubmit={(values) => {
         console.log(values)
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
           <Form onSubmit={handleSubmit}>
               <TextFields name="firstName" label="FirstName" type="firstName"></TextFields>
               <TextFields name="LastName" label="LastName" type="LastName"></TextFields>
               <TextFields name="email" label="Email" type="email"></TextFields>
               <TextFields name="password" label="Password" type="password"></TextFields>
               <TextFields name="ConfirmPassword" label="ConfirmPassword" type="ConfirmPassword"></TextFields>
               <Button type='submit'>Register</Button>
               <Button type='reset'>Reset</Button>
               <span className="form-input-login">
                 Already to access the system! Login
                 <ul>
                   <li>
                    <Link to="/signIn">here</Link>
                    </li>
                    </ul>
                </span>

           </Form>
         
       )}
     </Formik>
   </div>
        
    )
}

export default SignUp
