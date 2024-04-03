import axios from 'axios'

const token = typeof window === 'undefined' ? null : localStorage.getItem('token')

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: token ? {
    Authorization: `Bearer ${token}`,
  } : {},
})

console.log(token)

export default Axios