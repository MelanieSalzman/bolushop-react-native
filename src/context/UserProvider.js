import React, { createContext } from 'react';

export const UserContext = createContext({signed:true});

export const UserProvider = (props) => {
    return(
        <UserContext.Provider value={{signed:false}}>
        {props.children}
        </UserContext.Provider>
    );
};
