import axios from "axios";


const imageInstance = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/images/search'
})

export const getImage = async ()=>{
    const {data} = await imageInstance.get("/")
    return data
}

