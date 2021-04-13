import React, { useContext } from 'react'
import { Button } from '@material-ui/core';
import { Form, Formik } from 'formik';
import { Link, useParams } from 'react-router-dom';
import TextFields from '../Login and Register/TextFields';
import { UsersContext } from '../../contexts/UsersContext';

const EditAccountForm = () => {
    const{users,updateUsers}= useContext(UsersContext)
    console.log(users);
   const {id} = useParams();
   const newUsers = users.filter(user => user.id == id)
    return (
        <div>
        <h4>Edit Account</h4>
    {newUsers.map(user =>(<Formik
   initialValues={{ 
    firstName: user.firstName,
    LastName:user.LastName,
    email: user.email,
    password: user.password,
    ConfirmPassword:user.ConfirmPassword,
    id: id, }}
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
   onSubmit={(id,values) => {
     console.log(values);  
     updateUsers(id,values);   
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
           <Button type='submit'>Update</Button>
       </Form>
     
   )}
 </Formik>))}
            
</div>
    )
}

export default EditAccountForm
