import React, { useContext, useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Checkbox } from '@material-ui/core';
import { ProductContext } from '../../contexts/ProductContext';
import { useParams } from 'react-router-dom';
import { getOverflowOptions } from 'antd/lib/tooltip/placements';

const EditForm = () => {
    const {products,updateProduct} = useContext(ProductContext)

    const {id} = useParams();
    console.log(id);
    const newProducts = products.filter(product =>product.id === id);
    console.log(newProducts);

    return (
        <div>
          {newProducts.map(item => (
            <Formik
          initialValues={{
          id:id,
          image:item.image,
          title:item.title,
          category:item.category,
          description:item.description,
          availableSizes:item.availableSizes,
          discount:item.discount,
          price:item.price,
                  }}
      validate = {values => {
          // var errors = {}
          // if(!values.title.trim()){
          //   errors.title = "Title Required"
          // }else if(values.title.length<6){
          //   errors.title = "than 6"
          // }
          // if(!values.category.trim()){
          //   errors.category = "Category Required"
          // }
          // if(!values.description.trim()){
          //   errors.description = "Description Required"
          // }
          // if(!values.discount.trim()){
          //   errors.discount = "Discount Required"
          // }

          // if(!values.price.trim()){
          //   errors.price = "Price Required"
          // }
          // if(!values.image.trim()){
          //   errors.image = "Image Required"
          // }
          
          // return errors;
      }}
      onSubmit={(values,id) => {
        console.log(values);
    
          updateProduct(values,id)
          
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
            value={values&&values.title}
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
            values={values&&values.description}
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
          <label>X</label>
           <Field
            type="checkbox"
            name="availableSizes"
            label="AvailableSizes"
            as={Checkbox}
            value="X"
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
          </div>

          <ErrorMessage name="availableSizes" component="div"/>
          <br />
          <label>Discount</label>
          <Field type="discount" name="discount" label="Discount" value={values.discount}></Field>
          <ErrorMessage name="discount" component="div"/>
          <br />
          <lable>Price</lable>
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
          ))}
            
        </div>
    )
}

export default EditForm
