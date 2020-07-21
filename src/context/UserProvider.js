import React, { useState, createContext } from 'react';

export const UserContext = createContext({signed:true});

export const UserProvider = (props) => {

    const [token, setToken] = useState('')
    const [signed, setSigned] = useState(false)
    const [username, setUsername] = useState('')

    return(
        <UserContext.Provider value={{ signed, setSigned, token, setToken, username, setUsername}}>
        {props.children}
        </UserContext.Provider>
    );
};
