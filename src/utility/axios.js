import axios from "axios"

const axiosCLient = axios.create({
    baseURL: "http://localhost:8000",
    timeout: 40000,
    headers:{ "Content-Type" : "application/json"}
}
)

const AccessToken = (config) =>{
    const token = localStorage.getItem("authtoken")
    if(token){
        config.headers.Authorisation = `Bearer ${token}`
    }
    return config
}

const requestRejected = (error) =>{
    return Promise.reject(error)
}

const responseFullfilled = (response) =>{
 return response 
}
const responseRejected = (error) =>{
return Promise.reject(error)
}

axiosCLient.interceptors.request.use(AccessToken, requestRejected)
axiosCLient.interceptors.response.use(responseFullfilled, responseRejected)



 export const Api = {

    get: async (url, data) => {
        try {
            const response = await axiosCLient.get(url)
            return response.data
        } catch (error) {
            throw error
        }

    },

    Post: async (url, data = {}, headers = {}) => {
        try {
            const response = await axiosCLient.post(url, data, headers)
            return response.data
        } catch (error) {
            throw error
        }
    },

    Put: async (url, data = {}, headers = {}) => {
        try {
            const response = await axiosCLient.put(url, data, headers)
            return response.data
        } catch (error) {
            throw error
        }
    },
    Patch: async (url, data = {}, headers = {}) => {
        try {
            const response = await axiosCLient.patch(url, data, headers)
            return response.data
        } catch (error) {
            throw error
        }
    },
    Delete: async (url) => {
        try {
            const response = await axiosCLient.delete(url, data, headers)
            return response.data
        } catch (error) {
            throw error
        }
    },



}













