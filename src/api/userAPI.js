import AsyncStorage from '@react-native-community/async-storage';

export const registerUser = async (name, username, email, password) => {

    try {
        let register = false;

        const response = await fetch("http://10.0.2.2:3000/api/auth/register", {
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

export const profileUser = async () => {

    const token = await AsyncStorage.getItem("token")

    const res = await fetch('http://10.0.2.2:3000/api/auth/profile', {
        headers: new Headers({
            Authorization: "Bearer " + token
        })
    })

    const data = await res.json()

    return data;

}

export const loginUser = async (email, password) => {

    let login = false
    try {
        const res = await fetch("http://10.0.2.2:3000/api/auth/login", {
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

        if (data.token != null) {
            login = true
        }

        return login;
    }
    catch (e) {
        console.log("Error: ", e)
    }
}

export const updateUser = async (email,username, name) => {

    const token = await AsyncStorage.getItem("token")
    const res = await fetch("http://10.0.2.2:3000/api/users/update", {
        method: "POST",
        headers: {
            'Authorization': "Bearer " + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": email,
            "username": username,
            "name": name
        })
    })
    const data = await res.json()

    return data;

}

export const changePass = async (password,newPassword) => {

    const token = await AsyncStorage.getItem("token")
    const res = await fetch("http://10.0.2.2:3000/api/auth/changepassword", {
        method: "PUT",
        headers: {
            'Authorization': "Bearer " + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "password": password,
            "newPassword": newPassword
        })
    })
    const data = await res.json()

    return data;

}

export const nameMenu = async () => {

    const token = await AsyncStorage.getItem("token")

    const res = await fetch('http://10.0.2.2:3000/api/auth/profile', {
        headers: new Headers({
            Authorization: "Bearer " + token
        })
    })
    const data = await res.json()

    return data.username;

}