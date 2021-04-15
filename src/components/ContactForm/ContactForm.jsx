import React, { useContext } from 'react'
import { Button } from '@material-ui/core';
import { Form, Formik } from 'formik';
import { Link, useParams } from 'react-router-dom';
import TextFields from '../Login and Register/TextFields';
import { ContactContext } from '../../contexts/ContactContext';
const ContactForm = () => {
    const {contacts,updateContact} = useContext(ContactContext);
    const {id} = useParams();
    console.log(id);
    const newContact = contacts.filter(contact => contact.id == id);
    console.log(newContact)
    return (
        <div>
        <h4>Edit Contact</h4>
        <div>
        {newContact.map(contact =>(
        <Formik
 
        initialValues={{ 
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
        onSubmit={(values) => {
          console.log(values);
          updateContact(values) ;
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
                <TextFields name="fullName" label="fullName" type="fullName"></TextFields>
                <TextFields name="email" label="email" type="email"></TextFields>
                <TextFields name="phone" label="phone" type="phone"></TextFields>
                <TextFields name="message" label="message" type="message"></TextFields>
                <Button type='submit'>Update</Button>
            </Form>
          
        )}
      </Formik>
        ))}
        </div>
        
    
 </div>
    )
}

export default ContactForm
