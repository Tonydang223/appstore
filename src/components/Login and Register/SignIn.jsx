import { Button } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react'
import { Link } from 'react-router-dom';
import TextFields from './TextFields';

const SignIn = () => {
async function handletition(e){
    console.log('dadad');
}
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
         handletition();

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
      
                    <Link to="/signUp">here</Link>
                 
                </span>

           </Form>
         
       )}
     </Formik>
        </div>
    )
}

export default SignIn
