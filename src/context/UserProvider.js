import React, { useState, createContext } from 'react';

export const UserContext = createContext({signed:true});

export const UserProvider = (props) => {

    const [token, setToken] = useState(null)
    const [signed, setSigned] = useState(null)
    const [username, setUsername] = useState(null)

    const login = () => {
        setSigned(true)
    }

    const logout = () => {
        setSigned(false)
    }

    const getToken = (tokenNumber) => {
        setToken(tokenNumber)
    }

    const removeToken = () => {
        setToken(null)
    }

    const getUsername = (name) => {
        setUsername(name)
    }

    const removeUsername = () => {
        setUsername(null)
    }
    

    return(
        <UserContext.Provider value={{ signed, login, logout, token, getToken, removeToken, username, getUsername, removeUsername}}>
        {props.children}
        </UserContext.Provider>
    );
};
