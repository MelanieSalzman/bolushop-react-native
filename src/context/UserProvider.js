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

    

    return(
        <UserContext.Provider value={{ signed, login, logout, token, setToken, username, setUsername}}>
        {props.children}
        </UserContext.Provider>
    );
};
