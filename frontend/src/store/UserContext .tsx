'use client'

import User from '@/types/user'
import getUser from '@/variables/get-user'
import { HTMLAttributes, createContext, useEffect, useState } from 'react'

type Context = {
  user: User
  // eslint-disable-next-line no-unused-vars
  isLoading: boolean
}

export const UserContext = createContext<Context>({
  user: {},
  isLoading: true
})

const UserProvider = (props: HTMLAttributes<HTMLElement>) => {
  const [user, setUser] = useState<User>({})
  const [isLoading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    (async () => {
      const user = await getUser()

      setUser(user.item)
      setLoading(false)
    })()
  }, [])

  return (
    <UserContext.Provider value={{ user, isLoading }}>{props.children}</UserContext.Provider>
  )
}

export default UserProvider