import React, { useContext, useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Checkbox } from '@material-ui/core';
import { ProductContext } from '../../contexts/ProductContext';
import { useParams } from 'react-router-dom';
import { getOverflowOptions } from 'antd/lib/tooltip/placements';
import { Avatar, Box, Button, Container, CssBaseline, Grid, makeStyles, TextField, Typography } from '@material-ui/core';

const EditForm = () => {
    const {products,updateProduct} = useContext(ProductContext)
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
  
    const newProducts = products.filter(product =>product.id == id);
    console.log(newProducts)

    return (
      <Container component="main" maxWidth="xs" className="container">
      <CssBaseline/>
        <div className={classes.paper}>
        <Typography component="h3" variant="h7" className={classes.fontsize}>
            Edit Product
        </Typography>
      {newProducts.map(product =>(
        <Formik
        initialValues={{
          id:id,
          image:product.image,
          title:product.title,
          category:product.category,
          description:product.description,
          availableSizes:product.availableSizes,
          discount:product.discount,
          price:product.price,
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
            // if(!values.discount.trim()){
            //   errors.discount = "Discount Required"
            // }
  
            // if(!values.price.trim()){
            //   errors.price = "Price Required"
            // }
            if(!values.image.trim()){
              errors.image = "Image Required"
            }
            
            return errors;
        }}
        onSubmit={(values,id) => {
            console.log(values);
            updateProduct(values,id);
            alert("You updated successfully!");
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
   
          <Form className={classes.form}>
            <Grid container spacing={2}>
            
            <Grid item xs={12}>
            <label>Title</label>
            <Field
              type="title"
              name="title"
              label="title"
              value={values.title}
              className="form"
            />
            <ErrorMessage name="title" component="div"/>
            </Grid>
            
            <Grid item xs={12}>
            <label>Category</label>
            <Field
              type="category"
              name="category"
              label="category"
              value={values.category}
              className="form"
            />
            <ErrorMessage name="category" component="div"/>
            </Grid>
            
            <Grid item xs={12}>
            <label>Description</label>
            <Field
              type="description"
              name="description"
              label="description"
              values={values.description}
              className="form"
            />
            <ErrorMessage name="description" component="div"/>
            </Grid>
            
            <Grid item xs={12}>
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
            </Grid>
            
            <Grid item xs={12}>
            <label>Discount</label>
            <Field type="discount" name="discount" label="Discount" value={values.discount}
             className="form"
            ></Field>
            <ErrorMessage name="discount" component="div"/>
            </Grid>
            
            <Grid item xs={12}>    
            <label>Price</label>
  
            <Field
              type="price"
              name="price"
              label="price"
              values={values.price}
              className="form"
            />
            <ErrorMessage name="price" component="div"/>
            </Grid>
            
            <Grid item xs={12}>
            <label>Image</label>
  
            <Field
              type="text"
              name="image"
              label="image"
              values={values.image}
              className="form"
            />
            <ErrorMessage name="image" component="div"/>
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

export default EditForm
