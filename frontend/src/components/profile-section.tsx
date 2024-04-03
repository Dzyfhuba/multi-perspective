'use client'
import Login from '@/containers/login'
import ProfileEdit from '@/containers/profile-edit'
import Register from '@/containers/register'
import { ProfileSectionContext, Section } from '@/store/ProfileSectionContext '
import getUser from '@/variables/get-user'
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function getQueryParam(key: string): string | null {
  const url = window.location.href
  const queryStringStartIndex = url.indexOf('?')
  if (queryStringStartIndex !== -1) {
    const queryString = url.slice(queryStringStartIndex + 1)
    const params = new URLSearchParams(queryString)
    return params.get(key)
  }
  return null // If no query string found
}

const ProfileSection = () => {
  const section = useContext(ProfileSectionContext)
  const [mounted, setMounted] = useState(false)

  const router = useRouter()

  useEffect(() => {
    (async () => {
      const user = await getUser()

      if (user) {
        router.push('/profile?section=edit')
      }
      else {
        console.log(user)
        if (window.location.pathname === '/profile')
          router.push('/profile?section=login')
      }
    
      if (user) {
        section.setSection('edit')
        router.replace('/profile?section=edit')
      } else {
        section.setSection(getQueryParam('section') as Section)
      }
    
      console.log(getQueryParam('section'))
    
      setMounted(true)
    })()
  }, [router, section])

  if (!mounted) {
    return <Skeleton style={{ height: '80vh' }} />
  }

  console.log(section)

  switch (section.section) {
  case 'register':
    return <Register />
  case 'login':
    return <Login />
  case 'edit':
    return <ProfileEdit />
  default:
    return <Register />
  }
}

export default ProfileSection