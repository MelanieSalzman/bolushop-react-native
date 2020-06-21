import AsyncStorage from '@react-native-community/async-storage';

export const registerUser = async (email, password) => {

    try {
        const register = false;
        const response = await fetch("http://10.0.2.2:3000/api/auth/register", {
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
        console.log("la data es ", data)

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
        console.log("esta es la res",res)
        const data = await res.json()
        
        return data;

}
