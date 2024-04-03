'use client'

import User from '@/types/user'
import getUser from '@/variables/get-user'
import { HTMLAttributes, createContext, useEffect, useState } from 'react'

type Context = {
  user: User
  // eslint-disable-next-line no-unused-vars
  setUser: (user: User) => void
  isLoading: boolean
}

export const UserContext = createContext<Context>({
  user: {},
  setUser: () => { },
  isLoading: true
})

const UserProvider = (props: HTMLAttributes<HTMLElement>) => {
  const [user, setUser] = useState<User>({})
  const [isLoading, setLoading] = useState<boolean>(true)

  const handleSection = (user: User) => {
    localStorage.setItem('user', JSON.stringify(user))
  }

  useEffect(() => {
    (async () => {
      const user = await getUser()

      setUser(user.item)
      setLoading(false)
    })()
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser: handleSection, isLoading }}>{props.children}</UserContext.Provider>
  )
}

export default UserProvider