import AsyncStorage from '@react-native-community/async-storage';

export const addProduct = async (name, price, description, details, web) => {

    console.log("esto es el nombre que llega a addProduct", name)
    console.log("esto es el price que llega a addProduct", price)
    console.log("esto es el nombre que llega a addProduct", description)
    console.log("esto es el nombre que llega a addProduct", details)
    console.log("esto es el nombre que llega a addProduct", web)
    let added = false;
    try {
        const token = await AsyncStorage.getItem("token")

        const res = await fetch('http://10.0.2.2:3000/api/productos', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            },
            body: JSON.stringify({
                "name": name,
                "price": price,
                "description": description,
                "details": details,
                "web": web
            })
        })

        const data = await res.json()
        if (data != null) {
            added = true
        }
        return added
    }
    catch (e) {
        console.log("Error: ", e)
    }
}


export const updateProduct = async (id, name, description,price,details, web) => {

    console.log("esto es el nombre que llega a addProduct", name)
    console.log("esto es el price que llega a addProduct", price)
    console.log("esto es el nombre que llega a addProduct", description)
    console.log("esto es el nombre que llega a addProduct", details)
    console.log("esto es el nombre que llega a addProduct", web)
    let added = false;
    try {
        const token = await AsyncStorage.getItem("token")

        const url = 'http://10.0.2.2:3000/api/productos/' + id
        console.log('esta es la url',url)
        const res = await fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            },
            body: JSON.stringify({
                "name": name,
                "price": price,
                "description": description,
                "details": details,
                "web": web
            })
        })

        const data = await res.json()
        if (data != null) {
            added = true
        }
        return added
    }
    catch (e) {
        console.log("Error: ", e)
    }
}


export const getProducts = async () => {


    try {


        const res = await fetch('http://10.0.2.2:3000/api/productos', {
            method: "GET",

        })

        const data = await res.json()
        return data
    }

    catch (e) {
        console.log("Error: ", e)
    }
}

//no sé si es seller la palabra indicada(g)
//va el content type?
export const getProductsSeller = async () => {


    try {

        const token = await AsyncStorage.getItem("token")
        const res = await fetch('http://10.0.2.2:3000/api/productos/myProducts', {
            method: "GET",
            headers: new Headers({
                Authorization: "Bearer " + token
            })

        })

        const data = await res.json()
        return data
    }

    catch (e) {
        console.log("Error: ", e)
    }
}



