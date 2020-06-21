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
    console.log("esta es la res",res)
    const data = await res.json()
    console.log("la data que me trae profile es:",data)
    console.log("la data que me trae profile es:",data.email)

    return data;

}
