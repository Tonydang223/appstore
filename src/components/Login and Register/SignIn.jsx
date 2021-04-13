import { Button } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { UsersContext } from '../../contexts/UsersContext';
import TextFields from './TextFields';

const SignIn = () => {
  const history = useHistory();
  
const {submitLogin,error,setError,setShow,setCurrentUser} = useContext(UsersContext);
    return (
        <div>
             <h1>SIGN IN</h1>
     <Formik
       initialValues={{ 
        email: '',
        password: '',}}
       validate={values => {
         const errors = {};
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
         return errors;
       }}
       onSubmit={(values) => {
         console.log(values);
         if(submitLogin(values)){
           setCurrentUser(values.email)
          setError("");
          setShow(false);
           history.push("/")
         }else{
            setError("Email is not corrected")
         }
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
               <TextFields name="email" label="Email" type="email"></TextFields>
               <TextFields name="password" label="Password" type="password"/>
               <Button type ='submit'>Log In</Button>
               <span className="form-input-login">
                 Already to have an account! SignUp
                 <br/>
                 {error&&error}
      
                    <Link to="/signUp">here</Link>
                 
                </span>

           </Form>
         
       )}
     </Formik>
        </div>
    )
}

export default SignIn
