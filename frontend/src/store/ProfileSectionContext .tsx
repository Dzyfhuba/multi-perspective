'use client'

import { HTMLAttributes, createContext, useState } from 'react'

export type Section = 'register' | 'login' | 'edit' | null

type Context = {
  section: Section
  // eslint-disable-next-line no-unused-vars
  setSection: (section: Section) => void
}

export const ProfileSectionContext = createContext<Context>({
  section: null,
  setSection: () => { }
})

const ProfileSectionProvider = (props: HTMLAttributes<HTMLElement>) => {
  const [section, setSection] = useState<Section>(null)

  const handleSection = (section: Section) => {
    setSection(section)

    if (section) localStorage.setItem('profile-section', section)
    else localStorage.removeItem('profile-section')
  }

  return (
    <ProfileSectionContext.Provider value={{ section, setSection: handleSection }}>{props.children}</ProfileSectionContext.Provider>
  )
}

export default ProfileSectionProvider