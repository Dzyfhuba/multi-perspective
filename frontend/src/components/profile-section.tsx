'use client'
import Login from '@/containers/login'
import Register from '@/containers/register'
import { ProfileSectionContext } from '@/store/ProfileSectionContext '
import { useContext } from 'react'

const ProfileSection = () => {
  const section = useContext(ProfileSectionContext)

  return (
    <>
      {section.section === 'register' ? <Register /> : <></>}
      {section.section === 'login' ? <Login /> : <></>}
      {section.section === 'edit' ? <Login /> : <></>}
    </>
  )
}

export default ProfileSection