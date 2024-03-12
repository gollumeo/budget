export const apiInstance = axios.create({
    baseURL: '/api/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    withCredentials: true
})
