import styles from './footer.module.css'
import ImageBrand from '@/images/footer-brand.svg'
import ImageBackground from '@/images/footer-bg.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegCopyright } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <Image src={ImageBrand}
          alt={process.env.NEXT_PUBLIC_APP_NAME} 
        />
        <span className={styles.copyright}>{process.env.NEXT_PUBLIC_COMPANY_NAME} <FaRegCopyright /> 2024. All rights reserved.</span>
        <Link href={'/terms-and-conditions'}>SYARAT & KETENTUAN</Link>
        <Link href={'/privacy-policy'}>KEBIJAKAN PRIVASI</Link>
      </div>

      <Image src={ImageBackground}
        alt={process.env.NEXT_PUBLIC_APP_NAME}
        className={styles.background} 
      />
    </footer>
  )
}

export default Footer