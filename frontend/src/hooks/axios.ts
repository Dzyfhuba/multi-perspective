import axios, { AxiosInstance } from 'axios'
import { useEffect, useState } from 'react'

interface AxiosHookReturnType {
  axios: AxiosInstance;
  error?: Error;
}

const useAxiosWithToken = (): AxiosHookReturnType => {
  const [axiosInstance, setAxiosInstance] = useState<AxiosInstance>()
  const [error, setError] = useState<Error | undefined>()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      const instance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      setAxiosInstance(instance)
    } else {
      setError(new Error('Token is not found in localStorage.'))
    }
  }, [])

  if (!axiosInstance) return { axios: axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL }), error }

  return { axios: axiosInstance, error }
}

const useAxiosWithoutToken = (): AxiosHookReturnType => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  })

  return { axios: instance }
}

export { useAxiosWithToken, useAxiosWithoutToken }
