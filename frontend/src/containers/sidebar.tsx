'use client'
import Button from "@/components/button"
import { SidebarOpenContext } from "@/store/SidebarOpenContext"
import { useContext, useEffect, useState } from "react"
import { BiMenuAltLeft } from "react-icons/bi"
import styles from './sidebar.module.css'
import { MdClose } from "react-icons/md"
import Link from "next/link"

const Sidebar = () => {
  const sidebarState = useContext(SidebarOpenContext)
  const [state, setState] = useState(sidebarState.open)
  const [activeUrl, setActiveUrl] = useState('')

  const handleSidebar = () => {
    sidebarState.setOpen(!sidebarState.open)
    setTimeout(() => {
      setState(!state)
    }, state ? 300 : 0);
  }

  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''

  useEffect(() => {
    setActiveUrl(window.location.pathname)
  }, [pathname])

  return (
    <>
      <Button square onClick={handleSidebar} className={styles.hide}>
        <BiMenuAltLeft size={24} />
      </Button>

      <aside className={`${styles.container} ${styles.hide}`}>
        <div className={styles.overlay + (state ? ' ' + styles.containerOpen : '')} onClick={handleSidebar}></div>
        <div className={styles.content + (sidebarState.open ? ' ' + styles.open : '')}>
          <Button square onClick={handleSidebar} className={styles.close}>
            <MdClose size={24} />
          </Button>

          <Link onClick={handleSidebar} className={styles.item + (activeUrl === '/' ? ` ${styles.active}` : '')} href={'/'}>Beranda</Link>
          <Link onClick={handleSidebar} className={styles.item + (activeUrl === '/about' ? ` ${styles.active}` : '')} href={'/about'}>Tentang</Link>
          <Link onClick={handleSidebar} className={styles.item + (activeUrl === '/profile' ? ` ${styles.active}` : '')} href={'/profile'}>Profil</Link>
        </div>
      </aside>
    </>
  )
}

export default Sidebar