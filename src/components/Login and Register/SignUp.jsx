import { Avatar, Box, Button, Container, CssBaseline, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import { ErrorMessage, Form, Formik, useField } from 'formik';
import { Link } from 'react-router-dom';
import TextFields from './TextFields';
import "../../css/Form.scss";
import api from '../../api/api';
import React, { useContext, useEffect, useState } from 'react'
import { UsersContext } from '../../contexts/UsersContext';
import { LockOutlined } from '@material-ui/icons';
import Copyright from './Copyright';

const SignUp = () => {
    const {error,users,submit} = useContext(UsersContext);
    console.log(users);
        const useStyles = makeStyles((theme) => ({
        paper: {
          marginTop: theme.spacing(8),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        avatar: {
          margin: theme.spacing(1),
          backgroundColor: theme.palette.secondary.main,
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(3),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
      }));
      const classes = useStyles();


    return (
    <Container component="main" maxWidth="xs" className="container">
        <CssBaseline/>
        <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined/>
        </Avatar>
        <Typography component="h1" variant="h5">
            Sign up
        </Typography>
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
       onSubmit={(values,{resetForm}) => {
         console.log(values);
         submit(values)
         resetForm();
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
         <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <TextFields name="firstName" label="FirstName" type="firstName" className="inputBox"
            placeholder="FirstName"
            ></TextFields>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextFields name="LastName" label="LastName" type="LastName" placeholder="LastName" className="inputBox"></TextFields>
            </Grid>
            <Grid item xs={12}>
            <TextFields name="email" label="Email" type="email" placeholder="Email" className="inputBox inputBoxBottom"></TextFields>
            </Grid>
            <Grid item xs={12}>
            <TextFields name="password" label="Password" type="password" placeholder="Password" className="inputBox inputBoxBottom"></TextFields>
            </Grid>
            <Grid item xs={12}>
            <TextFields name="ConfirmPassword" label="ConfirmPassword" type="ConfirmPassword" placeholder="ConfirmPassword" className="inputBox inputBoxBottom"></TextFields>
            </Grid>
          </Grid>
            <Button 
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Register
            </Button>
            {error&&error}
            <Grid container justify="flex-end">
                <Grid item>
                <Link to="/signIn" variant="body2" href>Already to access the system! Login</Link>
                </Grid>
            </Grid>
           </Form>
       
         
       )}
     </Formik>
    </div>
    <Box mt={5}>
        <Copyright />
    </Box>
    </Container>
        
        
    )
}

export default SignUp
