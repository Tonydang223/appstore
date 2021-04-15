import { Avatar, Box, Button, Container, CssBaseline, Grid, makeStyles,Paper,Typography } from '@material-ui/core';
import { LockOpenOutlined } from '@material-ui/icons';
import { Form, Formik } from 'formik';
import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import api from '../../api/api';
import { UsersContext } from '../../contexts/UsersContext';
import Copyright from './Copyright';
import TextFields from './TextFields';

const SignIn = () => {
  const history = useHistory();
  const {error,setError,setShow,setCurrentUser,checkAccount,setLoading} = useContext(UsersContext);

  const submitLogin = async (form) => {
    const getUsers = await api.get("/users").then(res => checkAccount(res.data,form))
    if(getUsers){
     setCurrentUser(form.email)
     setError("");
     history.push("/")
    }else{
       setError("Email is not corrected")
    }     
 }
  
 const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
      const classes = useStyles();
    return (
    <Container component="main" maxWidth="xs" className="container">
      <CssBaseline />
        <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOpenOutlined/>
        </Avatar>
        <Typography component="h1" variant="h5">
            Sign in
        </Typography>
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
         if(values.email == "admin@example.com" && values.password == "admin123"){
           history.push("/admin")
           setCurrentUser(values.email);
         }else{
          submitLogin(values)
         }
       }}>
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
            <Grid item xs={12}>
            <TextFields name="email" label="Email" type="email" placeholder="Email" className="inputBox inputBoxBottom"></TextFields>
            </Grid>
            <Grid item xs={12}>
            <TextFields name="password" label="Password" type="password" placeholder="Password" className="inputBox inputBoxBottom"></TextFields>
            </Grid>
        </Grid>
              
        <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        >
        Sign In
        </Button>
            {error&&error}
      
            <Grid container justify="flex-end">
                <Grid item>
                <Link to="/signUp" variant="body2" href>Already to have an account! SignUp</Link>
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

export default SignIn
