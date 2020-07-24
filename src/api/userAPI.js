import AsyncStorage from '@react-native-community/async-storage';
import React, {useContext} from 'react'
import Config from 'react-native-config';

/*urlAndroidEmulator = '10.0.2.2:3000'
urlNoxEmulator = '172.17.100.2:3000'
urlNgrox = 'urlngrox'*/

const urlSelected = '63bed48cffb6.ngrok.io';

export const registerUser = async (name, username, email, password) => {

  try {
    let register = false;

    const response = await fetch(`http://${urlSelected}/api/auth/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": name,
        "email": email,
        "password": password,
        "username": username
      })
    })

    const data = await response.json()

    await AsyncStorage.setItem('token', data.token)
    if (data.token != null) {
      register = true
    }

    return register;
  }
  catch (e) {
    console.log("Error: ", e)
  }
}

export const loginUser = async (email, password) => {

  // let login = false
  try {

    const res = await fetch(`http://${urlSelected}/api/auth/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    })

    const data = await res.json()

    await AsyncStorage.setItem('token', data.token)

    /*if (data.token != undefined) {
      login = true
    }*/
    const token = data.token;

    return token;
  }
  catch (e) {
    console.log("Error: ", e)
  }
}

export const updateUser = async (email, username, name) => {

  try {

    const token = await AsyncStorage.getItem("token")
    const res = await fetch(`http://${urlSelected}/api/users/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        username: username,
      }),
    }
    );

    const data = await response.json();

    await AsyncStorage.setItem("token", data.token);
    if (data.token != null) {
      register = true;
    }

    return register;
  } catch (e) {
    console.log("Error: ", e);
  }
};

export const profileUser = async () => {
  const token = await AsyncStorage.getItem("token");
  if (!token) {
    console.log(token);

    return undefined;
  }
  const res = await fetch(`http://${urlSelected}/api/auth/profile`, {
    headers: new Headers({
      Authorization: "Bearer " + token,
    }),
  });

  const data = await res.json();

  return data;
};

export const getUsername = async () => {
  const token = await AsyncStorage.getItem("token");
  if (!token) {
    console.log(token);

    return undefined;
  }
  const res = await fetch(`http://${urlSelected}/api/auth/profile`, {
    headers: new Headers({
      Authorization: "Bearer " + token,
    }),
  });

  const data = await res.json();
  const name = data.name
  console.log('pasa por aca')
  return name;
};


export const changePass = async (password, newPassword) => {
  const token = await AsyncStorage.getItem("token");
  const res = await fetch(
    `http://${urlSelected}/api/auth/changepassword`,
    {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        newPassword: newPassword,
      }),
    }
  );
  const data = await res.json();

  return data;
};

export const nameMenu = async () => {
  const token = await AsyncStorage.getItem("token");

  const res = await fetch(`http://${urlSelected}/api/auth/profile`, {
    headers: new Headers({
      Authorization: "Bearer " + token,
    }),
  });
  const data = await res.json();

  return data.username;
};

export const sendCode = async (email) => {

  try {
    let sended = false;

    const response = await fetch(`http://${urlSelected}/api/email/forgotpassword`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email
      })
    })

    const data = await response.json()

    if(data!=undefined)
    {
      sended= true
    }

    return sended;
  }
  catch (e) {
    console.log("Error: ", e)
  }
}


export const enterCode = async (email, code) => {

  try {
    let entered = false;

    const response = await fetch(`http://${urlSelected}/api/email/recoverpassword`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        "code": code
      })
    })

    const data = await response.json()

    if(data!=undefined)
    {
      entered= true
    }

    return entered;
  }
  catch (e) {
    console.log("Error: ", e)
  }
}

export const resetPassword = async (email, password) => {

  try {
    let reseted = false;

    const response = await fetch(`http://${urlSelected}/api/email/resetpassword`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    })

    const data = await response.json()

    if(data!=undefined)
    {
      reseted= true
    }

    return reseted;
  }
  catch (e) {
    console.log("Error: ", e)
  }
}

