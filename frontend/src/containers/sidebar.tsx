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

  const handleSidebar = () => {
    sidebarState.setOpen(!sidebarState.open)
    setTimeout(() => {
      setState(!state)
    }, state ? 300 : 0);
  }

  useEffect(() => {
    document.querySelectorAll("a[href]").forEach(e => {
      e.addEventListener('click', ()  => {
        handleSidebar()
      })
    })
  }, [])

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

          <Link className={styles.item} href={'/'}>Beranda</Link>
          <Link className={styles.item} href={'/about'}>Tentang</Link>
          <Link className={styles.item} href={'/profile'}>Profil</Link>
        </div>
      </aside>
    </>
  )
}

export default Sidebar