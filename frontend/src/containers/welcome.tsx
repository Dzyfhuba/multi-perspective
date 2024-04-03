'use client'

import WelcomeImage from '@/images/welcome.png'
import Image from 'next/image'
import styles from './welcome.module.css'
import { useContext, useEffect, useState } from 'react'
import getUser from '@/variables/get-user'
import Skeleton from 'react-loading-skeleton'
import Button from '@/components/button'
import { ProfileSectionContext } from '@/store/ProfileSectionContext '
import 'react-loading-skeleton/dist/skeleton.css'
import User from '@/types/user'

const Welcome = () => {
  const section = useContext(ProfileSectionContext)
  const [user, setUser] = useState<User>()
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const user = await getUser()

      setUser(user.item)
      setLoading(false)
    })()
  }, [])

  // if (isLoading) {
  //   return <Skeleton height={28}
  //     width={150}
  //     baseColor='#459467'
  //     highlightColor='#51b37b'
  //   />
  // }

  const title = `Selamat datang, ${user? user.name : 'Kerabat'}!`
  const description = `Kami hadir dengan membawakan solusi terbaik untuk kebutuhan logistik Anda.
  Melayani dengan sepenuh hati untuk kenyamanan Anda dan keamanan barang sampai pada tujuan.
  Silahkan melakukan pendaftaran untuk dapat menikmati layanan kami.`
  return (
    <section id="welcome"
      className={styles.container}
    >
      {isLoading ? (
        <Skeleton height={300}
          baseColor='#459467'
          highlightColor='#51b37b'
          style={{
            opacity: '20%'
          }}
        />
      ) : (
        <>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className='flex gap-3'>
            {user ? (
              <Button outline
                small
                onClick={() => {
                  window.localStorage.removeItem('token')
                  window.location.reload()
                }}
              >
                KELUAR
              </Button>
            ) : (
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
            )}
          </div>
        </>
      )}
      <Image
        src={WelcomeImage}
        alt={process.env.NEXT_PUBLIC_APP_NAME}
      />
    </section>
  )
}

export default Welcome