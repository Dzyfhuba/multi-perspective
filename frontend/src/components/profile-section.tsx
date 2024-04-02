'use client'
import Login from '@/containers/login'
import Register from '@/containers/register'
import { ProfileSectionContext, Section } from '@/store/ProfileSectionContext '
import { useContext, useEffect } from 'react'

function getQueryParam(key: string): string | null {
  const url = window.location.href;
  const queryStringStartIndex = url.indexOf('?');
  if (queryStringStartIndex !== -1) {
    const queryString = url.slice(queryStringStartIndex + 1);
    const params = new URLSearchParams(queryString);
    return params.get(key);
  }
  return null; // If no query string found
}

const ProfileSection = () => {
  const section = useContext(ProfileSectionContext)

  useEffect(() => {
    section.setSection(getQueryParam('section') as Section || 'register')
  }, [])

  return (
    <>
      {section.section === 'register' ? <Register /> : <></>}
      {section.section === 'login' ? <Login /> : <></>}
      {section.section === 'edit' ? <Login /> : <></>}
    </>
  )
}

export default ProfileSection