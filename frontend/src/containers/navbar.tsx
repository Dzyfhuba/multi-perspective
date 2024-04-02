// @live
import Button from '@/components/button'
import theme from '@/helpers/theme'
import ImageBrand from '@/images/brand.svg'
import { css } from '@emotion/css'
import Image from 'next/image'
import Link from 'next/link'
import { BiMenuAltLeft } from 'react-icons/bi'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <nav>
      <div className={styles.topbar}>
        <Button square>
          <BiMenuAltLeft size={24} />
        </Button>
        
        <Link href={'/'}>
          <Image src={ImageBrand} alt={process.env.NEXT_PUBLIC_APP_NAME} priority />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar