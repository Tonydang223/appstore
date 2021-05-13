import React, { useContext } from 'react'
import { Form, Formik } from 'formik';
import { Link, useParams } from 'react-router-dom';
import TextFields from '../Login and Register/TextFields';
import { ContactContext } from '../../contexts/ContactContext';
import { Avatar, Box, Button, Container, CssBaseline, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
const ContactForm = () => {
    const {contacts,updateContact} = useContext(ContactContext);
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
      }
      
    }));
    const classes = useStyles();
    const {id} = useParams();
    console.log(id);
    const newContact = contacts.filter(contact => contact.id == id);
    console.log(newContact)
    return (
      <Container component="main" maxWidth="xs" className="container">
      <CssBaseline/>
        <div className={classes.paper}>
        <Typography component="h2" variant="h9" className={classes.fontsize}>
            Edit Contact
        </Typography>

        {newContact.map(contact =>(
        <Formik
 
        initialValues={{ 
            id:id,
            fullName: contact.fullName,
            email: contact.email,
            phone: contact.phone,
            message: contact.message,
       }}
         validate= {values => {
             const errors = {};
             if(!values.fullName.trim())
             {
                 errors.fullName = "FirstName required"
             }
            
         
             if(!values.email.trim())
             {
                 errors.email = "Email required"
             }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
             {
               errors.email = "Email address is invalid"
             }
             if(!values.phone.trim())
             {
                 errors.phone = "Phone required"
             }else if(isNaN(values.phone)){
                 errors.phone = "Values must be the numbers"
             }if(!values.message.trim())
             {
                 errors.message = "Your message required"
             }
             return errors;
         }}
        onSubmit={(values,id) => {
          console.log(values);
          updateContact(values,id) ;
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
              <Grid xs={12}>
              <TextFields name="fullName" label="fullName" type="fullName" className="form"></TextFields>
              </Grid>
              <Grid xs={12}>
              <TextFields name="email" label="email" type="email" className="form"></TextFields>
              </Grid>
              <Grid xs={12}>
              <TextFields name="phone" label="phone" type="phone" className="form"></TextFields>
              </Grid>
              <Grid xs={12}>
              <TextFields name="message" label="message" type="message" className="form"></TextFields>
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
      </Formik>
        ))}  
    </div>
    </Container>
    )
}

export default ContactForm
