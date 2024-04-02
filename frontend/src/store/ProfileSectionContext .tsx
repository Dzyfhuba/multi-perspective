'use client'

import { HTMLAttributes, createContext, useState } from 'react'

export type Section = 'register' | 'login' | 'edit'

type Context = {
  section: Section
  setSection: (section: Section) => void
}

const initalState: Section = localStorage.getItem('profile-section') as Section

export const ProfileSectionContext = createContext<Context>({
  section: initalState,
  setSection: () => {}
})

const ProfileSectionProvider = (props: HTMLAttributes<HTMLElement>) => {
  const [section, setSection] = useState<Section>(initalState)

  const handleSection = (section: Section) =>{
    setSection(section)

    localStorage.setItem('profile-section', section)
  }

  return (
    <ProfileSectionContext.Provider value={{ section, setSection: handleSection }}>{props.children}</ProfileSectionContext.Provider>
  )
}

export default ProfileSectionProvider