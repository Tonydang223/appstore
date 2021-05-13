import React, { useContext } from 'react'
import { Form, Formik } from 'formik';
import { Link, useParams } from 'react-router-dom';
import TextFields from '../Login and Register/TextFields';
import { UsersContext } from '../../contexts/UsersContext';

import { Avatar, Box, Button, Container, CssBaseline, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import "../../css/Form.scss";


const EditAccountForm = () => {
    const{users,updateUsers}= useContext(UsersContext)
    const useStyles = makeStyles((theme) => ({
        paper: {
          marginTop: theme.spacing(8),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(3),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
        fontsize:{
          fontSize:20,
          color:'#004040'
        },

      }));
      const classes = useStyles();
    console.log(users);
   const {id} = useParams();
   const newUsers = users.filter(user => user.id == id)
    return (
        <Container component="main" maxWidth="xs" className="container">
        <CssBaseline/>
          <div className={classes.paper}>
          <Typography component="h2" variant="h9" className={classes.fontsize}>
              Edit Account
          </Typography>
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
       <Form onSubmit={handleSubmit} className={classes.form}>
           <Grid container spacing={0}>
           <label>First Name</label>
           <Grid xs={12}>
           <TextFields name="firstName" label="FirstName" type="firstName" className="form" ></TextFields>
           </Grid>
           <label> Last Name</label>
           <Grid xs={12}>
           <TextFields name="LastName" label="LastName" type="LastName" className="form" ></TextFields>
           </Grid>
           <label for="">Email</label>
           <Grid xs={12}>
           <TextFields name="email" label="Email" type="email" className="form" ></TextFields>
           </Grid>
           <label for="">Password</label>
           <Grid xs={12}>
           <TextFields name="password" label="Password" type="password" className="form" ></TextFields>
           </Grid>
           <label>ConfirmPassword</label>
           <Grid xs={12}>
           <TextFields name="ConfirmPassword" label="ConfirmPassword" type="ConfirmPassword" className="form" ></TextFields>
           </Grid>
           </Grid>
           <Button 
              type="submit"
              fullWidth
              variant="contained"
              style={{backgroundColor:" #004040", color:" #fff"}}
              className={classes.submit}>
              UPDATE
            </Button>       
    </Form>
     
   )}
 </Formik>))}
 </div>
 </Container>
            
    )
}

export default EditAccountForm
