'use client'

import { HTMLAttributes, createContext, useState } from 'react'

type Context = {
  open: boolean
  setOpen: (open: boolean) => void
}

const initalState = false

export const SidebarOpenContext = createContext<Context>({
  open: initalState,
  setOpen: (open) => !open
})

const SidebarOpenProvider = (props: HTMLAttributes<HTMLElement>) => {
  const [open, setOpen] = useState(initalState)

  const toggleSidebar = () => {
    setOpen(prevState => !prevState)
  }

  return (
    <SidebarOpenContext.Provider value={{ open, setOpen: toggleSidebar }}>{props.children}</SidebarOpenContext.Provider>
  )
}

export default SidebarOpenProvider