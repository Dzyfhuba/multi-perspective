'use client'

import Button from '@/components/button'
import { ProfileSectionContext } from '@/store/ProfileSectionContext '
import getUser from '@/variables/get-user'
import { useContext, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const WelcomeAuth = () => {
  const section = useContext(ProfileSectionContext)
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const user = await getUser()

      setLoggedIn(!!user)
      setLoading(false)
    })()
  }, [])

  if (isLoading) {
    return <Skeleton height={28}
      width={150}
      baseColor='#459467'
      highlightColor='#51b37b'
    />
  }

  if (isLoggedIn) {
    return (
      <Button outline
        small
        onClick={() => {
          window.localStorage.removeItem('token')
          window.location.reload()
        }}
      >
        KELUAR
      </Button>
    )
  }

  return (
    <>
      <Button outline
        small
        href='/profile?section=login'
        onClick={() => section.setSection('login')}
      >
        MASUK
      </Button>
      <Button flip
        small
        href='/profile?section=register'
        onClick={() => section.setSection('register')}
      >
        DAFTAR
      </Button>
    </>
  )
}

export default WelcomeAuth