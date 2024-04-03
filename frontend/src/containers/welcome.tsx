'use client'

import Button from '@/components/button'
import WelcomeImage from '@/images/welcome.png'
import { ProfileSectionContext } from '@/store/ProfileSectionContext '
import { UserContext } from '@/store/UserContext '
import Image from 'next/image'
import { useContext } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './welcome.module.css'

const Welcome = () => {
  const section = useContext(ProfileSectionContext)
  const userContext = useContext(UserContext)

  const title = `Selamat datang, ${userContext? userContext.user.name : 'Kerabat'}!`
  const description = `Kami hadir dengan membawakan solusi terbaik untuk kebutuhan logistik Anda.
  Melayani dengan sepenuh hati untuk kenyamanan Anda dan keamanan barang sampai pada tujuan.
  Silahkan melakukan pendaftaran untuk dapat menikmati layanan kami.`
  return (
    <section id="welcome"
      className={styles.container}
    >
      {userContext.isLoading ? (
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
            {userContext ? (
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