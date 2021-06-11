import { createContext, useState, useEffect } from "react";
import React from "react";
import api from "../api/api";
import { Link, Redirect, useHistory } from "react-router-dom";
import Home from "../components/Home";
export const UsersContext = createContext();
const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const history = useHistory();
  const checkEmail = (serverUsers, formData) => {
    const users = serverUsers.find((user) => user.email === formData.email);
    if (users) return users;
  };
  const checkAccount = (server, form) => {
    const users = server.find(
      (user) => user.email === form.email && user.password === form.password
    );
    if (users) return users;
  };
  //jSON-Server for users
  const receive = async () => {
    const res = await api.get("/users");
    return res.data;
  };
  const removeUsers = async (id) => {
    try {
      await api.delete(`/users/${id}`);
      const newUsersList = users.filter((user) => {
        return user.id !== id;
      });
      setUsers(newUsersList);
    } catch (error) {
      console.log(error.message);
    }
  };
  const updateUsers = async (formdata) => {
    const res = await api.put(`/users/${formdata.id}`, formdata);
    const { id, name, email } = res.data;
    setUsers(
      users.map((user) => {
        return user.id === id ? { ...res.data } : user;
      })
    );
  };
  useEffect(() => {
    const getALL = async () => {
      const allUsers = await receive();
      if (allUsers) setUsers(allUsers);
    };
    getALL();
  }, []);
  //function Sign Up
  const submit = async (formData) => {
    const user = await api
      .get("/users")
      .then((res) => checkEmail(res.data, formData));
    if (user) {
      setError("Email existed");
    } else {
      const res = await api.post("/users", formData);
      setError("");
      setUsers([...users, res.data]);
      alert("You sign up successfully!");
    }
  };
  //  save name of user account
  useEffect(() => {
    const getItem = JSON.parse(localStorage.getItem("current", currentUser));
    setCurrentUser(getItem);
    console.log(getItem);
  }, []);
  useEffect(() => {
    localStorage.setItem("current", JSON.stringify(currentUser));
  }, [currentUser]);

  const UsersContextData = {
    users,
    error,
    currentUser,
    setError,
    setCurrentUser,
    submit,
    removeUsers,
    updateUsers,
    checkAccount,
  };
  return (
    <UsersContext.Provider value={UsersContextData}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
