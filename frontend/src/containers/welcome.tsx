'use client'

import Button from '@/components/button'
import WelcomeImage from '@/images/welcome.png'
import Image from 'next/image'
import styles from './welcome.module.css'
import { useContext } from 'react'
import { ProfileSectionContext } from '@/store/ProfileSectionContext '

const Welcome = () => {
  const section = useContext(ProfileSectionContext)

  const title = 'Selamat datang, Kerabat!'
  const description = `Kami hadir dengan membawakan solusi terbaik untuk kebutuhan logistik Anda.
  Melayani dengan sepenuh hati untuk kenyamanan Anda dan keamanan barang sampai pada tujuan.
  Silahkan melakukan pendaftaran untuk dapat menikmati layanan kami.`
  return (
    <section id="welcome"
      className={styles.container}
    >
      <h1>{title}</h1>
      <p>{description}</p>
      <div className='flex gap-3'>
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
      </div>
      <Image
        src={WelcomeImage}
        alt={process.env.NEXT_PUBLIC_APP_NAME}
      />
    </section>
  )
}

export default Welcome