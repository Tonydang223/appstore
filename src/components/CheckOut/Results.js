import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import { InputLabel,Input,FormHelperText,Button } from '@material-ui/core';
import {useState,useContext} from 'react';
import { UsersContext } from "../../contexts/UsersContext";
import { ProductContext } from "../../contexts/ProductContext";
const Results = () => {
  const { currentUser } = useContext(UsersContext);
  const {addEvualuate}= useContext(ProductContext);
    const [formValue, setFormValue] = useState({
        content:"",
    });
    const onSubmit = (e) => {
        e.preventDefault();
        setFormValue({...formValue,name: currentUser});
    }
    return (
        <>
        <div>
            You successfully ordered your products. 
            The order will be sent to you as soon as possible, we will send information about your order by phone's text message. 
            Thank you so much for using our services.
            Have a nice day!
            
        </div>
        {/* <FormControl onSubmit={onSubmit}>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" value={formValue} onChange={e => setFormValue(e.target.value)} />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            <Button type="submit">Submit</Button>
        </FormControl> */}
        <form onSubmit={onSubmit}>
            <input type="content" name= "content" value={formValue.content} onChange={e => setFormValue({...formValue,content: e.target.value,name: currentUser})} />
            <button onClick={ () => addEvualuate(formValue)}>Submit</button>
        </form>
        </>
    )
}

export default Results
