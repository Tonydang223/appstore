import React, { useContext, useEffect, useState } from 'react'
import { Avatar, Box, Button, Container, CssBaseline, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ProductContext } from '../../contexts/ProductContext';
import { Checkbox } from '@material-ui/core';




const ProductForm = () => {
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
  }));
  const classes = useStyles();
  
    const{addProduct,products} = useContext(ProductContext)
    return (
      <Container component="main" maxWidth="xs" className="container">
      <CssBaseline/>
        <div className={classes.paper}>
        <Typography component="h2" variant="h9">
            Add Product
        </Typography>
    <Formik
      initialValues={{
        image:'',
        title:'',
        category:'',
        description:'',
        availableSizes:[],
        discount:'',
        price:'',
      }}
      validate = {values => {
          var errors = {}
          if(!values.title.trim()){
            errors.title = "Title Required"
          }else if(values.title.length<6){
            errors.title = "than 6"
          }
          if(!values.category.trim()){
            errors.category = "Category Required"
          }
          if(!values.description.trim()){
            errors.description = "Description Required"
          }
          if(!values.discount.trim()){
            errors.discount = "Discount Required"
          }

          if(!values.price.trim()){
            errors.price = "Price Required"
          }
          if(!values.image.trim()){
            errors.image = "Image Required"
          }
          
          return errors;
      }}
      onSubmit={(values,{resetForm}) => {
          console.log(values);
          addProduct(values);
          resetForm({values:''})
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
      }) => (
 
        <Form>
          <label>Title</label>
          <Field
            type="title"
            name="title"
            label="title"
            value={values.title}
          />
          <ErrorMessage name="title" component="div"/>
          <br />
          <label>Category</label>
          <Field
            type="category"
            name="category"
            label="category"
            value={values.category}
          />
          <ErrorMessage name="category" component="div"/>
          <br></br>
          <label>Description</label>
          <Field
            type="description"
            name="description"
            label="description"
            values={values.description}
          />
          <ErrorMessage name="description" component="div"/>
          <br />
          <label>AvailableSize</label>
          <div>
          <label>XL</label>
          <Field
            type="checkbox"
            name="availableSizes"
            label="AvailableSizes"
            as={Checkbox}
            value="XL"
          />
          <label>M</label>
          <Field
            type="checkbox"
            name="availableSizes"
            label="AvailableSizes"
            as={Checkbox}
            value="M"
          />
          <label>L</label>
          <Field
            type="checkbox"
            name="availableSizes"
            label="AvailableSizes"
            as={Checkbox}
            value="L"
          />
          <label>XXL</label>
          <Field
            type="checkbox"
            name="availableSizes"
            label="AvailableSizes"
            as={Checkbox}
            value="XXL"
          />
          <label>XS</label>
          <Field
            type="checkbox"
            name="availableSizes"
            label="AvailableSizes"
            as={Checkbox}
            value="XS"
          />
          <label>S</label>
          <Field
            type="checkbox"
            name="availableSizes"
            label="AvailableSizes"
            as={Checkbox}
            value="S"
          />
          </div>
          
          <ErrorMessage name="availableSizes" component="div"/>
          <br />
          <label>Discount</label>
          <Field type="discount" name="discount" label="Discount" value={values.discount}></Field>
          <ErrorMessage name="discount" component="div"/>
          <br />
          <label>Price</label>
          <Field
            type="price"
            name="price"
            label="price"
            values={values.price}
          />
          <ErrorMessage name="price" component="div"/>
          <br />
          <label>Image</label>
          <Field
            type="text"
            name="image"
            label="image"
            values={values.image}
          />
          <ErrorMessage name="image" component="div"/>
          <br />
          <button type="submit" >
            Submit
          </button>
        </Form>
      )}
    </Formik>
    </div>
        </Container>

    )
}

export default ProductForm
