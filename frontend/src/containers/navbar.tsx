import ImageBrand from '@/images/brand.svg'
import SidebarOpenProvider from '@/store/SidebarOpenContext'
import Image from 'next/image'
import Link from 'next/link'
import styles from './navbar.module.css'
import Sidebar from './sidebar'

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.topbar}>
        <SidebarOpenProvider>
          <Sidebar />
        </SidebarOpenProvider>

        <Link href={'/'}>
          <Image src={ImageBrand}
            alt={process.env.NEXT_PUBLIC_APP_NAME}
            priority 
          />
        </Link>

        <div className={styles.menu}>
          <Link href={'/about'}>Tentang</Link>
          <Link href={'/profile'}>Profil</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar