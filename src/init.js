import axios from 'axios'
import './configs/axios.config'
import './styles/index.css'

export default async (store, history) => {
    axios.interceptors.response.use(response => {
        return response
    },
    (e) => {
        return Promise.reject(e)
    })
}
