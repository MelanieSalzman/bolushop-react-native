import AsyncStorage from '@react-native-community/async-storage';

export const registerUser = async (email, password, username) => {

    try {
        let register = false;

        const response = await fetch("http://10.0.2.2:3000/api/auth/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "password": password,
                "username": username
            })
        })
        console.log("esta es la respuesta", response)

        const data = await response.json()

        console.log("la data es ", data)
        console.log("el token es ", data.token)

        await AsyncStorage.setItem('token', data.token)
        if (data.token != null) {
            register = true
        }

        console.log("el registro es", register)
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
    console.log("esta es la res", res)
    const data = await res.json()
    console.log("la data que me trae profile es:", data)
    console.log("la data que me trae profile es:", data.email)
    console.log("la data que me trae profile es:", data.password)

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

export const updateUser = async (email,username) => {

    const token = await AsyncStorage.getItem("token")
    console.log("paso por aca updateUser")
    const res = await fetch("http://10.0.2.2:3000/api/users/update", {
        method: "PUT",
        headers: {
            'Authorization': "Bearer " + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": email,
            "username": username
        })
    })
    const data = await res.json()

    return data;

}

export const changePass = async (password,newPassword) => {

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