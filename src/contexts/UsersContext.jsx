import { createContext,useState,useEffect } from "react";
import React from 'react'
import api from '../api/api';
import { Link, useHistory } from 'react-router-dom';
import Home from "../components/Home";
export const UsersContext = createContext();
const UsersContextProvider = ({children}) => {
    const[users,setUsers] = useState([]);
    const [error,setError] = useState("");
    const [currentUser,setCurrentUser] = useState('')
    const [show,setShow]= useState(false);

    const checkEmail = (serverUsers,formData) =>{
        const users = serverUsers.find(user => user.email === formData.email);
        if(users) return users
      }
    const receive = async ()=>{
        const res = await api.get("/users")
        return res.data
    }
    const random = Math.floor(Math.random() *10000)
    const submit = async(formData) =>{

        const user = await api.get("/users").then(res => checkEmail(res.data,formData))
        if(user){
            setError("Email existed")
        }
        else{
          const requestDataUsers = {
            id:random,
            ...formData
          }
           const res = await api.post("/users",requestDataUsers);
           setError("");
           setUsers([...users,res.data]);

        }
    }
    // 

  const checkAccount = (server,form) => {
    const users = server.find((user)=>user.email === form.email && user.password === form.password);
    if(users) return users
  }
  const submitLogin = async (form) => {
     const getUsers = await api.get("/users").then(res => checkAccount(res.data,form))
     if(getUsers){
       return getUsers
     } 
  }
  //remove user
  const removeUsers = async (id) => {
    try {
      await api.delete(`/users/${id}`)
      const newUsersList = users.filter((user)=>{
        return user.id !== id;
      })
      setUsers(newUsersList)
    } catch (error) {
      console.log(error.message)

    }
  }
  const updateUsers = async (formdata) => {
    const res = await api.put(`/users/${formdata.id}`, formdata);
    const { id, name, email } = res.data;
    setUsers(
      users.map((user) => {
        return user.id === id ? { ...res.data } : user;
      })
    );
  }

    const onClickLogOut=()=>{
        setShow(true);
      }
    useEffect(() => {
        const getItem = JSON.parse(localStorage.getItem("users",currentUser))
        setCurrentUser(getItem)
       },[]);
    useEffect(() => {
         localStorage.setItem("users",JSON.stringify(currentUser))
       },[currentUser])
    useEffect(() => {
        const getALL = async ()=>{
            const allUsers = await receive();
            if(allUsers) setUsers(allUsers)
        }
        getALL();
    },[])
    const UsersContextData={
        users,
        error,
        show,
        currentUser,
        setError,
        setShow,
        submitLogin,
        setCurrentUser,
        submit,
        onClickLogOut,
        removeUsers,
        updateUsers
    }
    return (
        <UsersContext.Provider value={UsersContextData}>
              {children}
        </UsersContext.Provider>
       
    )
}

export default UsersContextProvider
