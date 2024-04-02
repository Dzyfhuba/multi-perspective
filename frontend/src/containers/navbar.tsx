import Button from '@/components/button'
import ImageBrand from '@/images/brand.svg'
import Image from 'next/image'
import Link from 'next/link'
import { BiMenuAltLeft } from 'react-icons/bi'
import styles from './navbar.module.css'
import { ReducerAction, useContext, useReducer } from 'react'
import Sidebar from './sidebar'
import Client from '@/components/client'
import SidebarOpenProvider from '@/store/SidebarOpenContext'

const Navbar = () => {


  const handleSidebar = () => {

  }

  return (
    <nav className={styles.container}>
      <div className={styles.topbar}>
        <SidebarOpenProvider>
          <Sidebar />
        </SidebarOpenProvider>

        <Link href={'/'}>
          <Image src={ImageBrand} alt={process.env.NEXT_PUBLIC_APP_NAME} priority />
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