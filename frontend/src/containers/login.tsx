import Input from '@/components/input'
import styles from './register.module.css'
import Button from '@/components/button'
import { useContext } from 'react'
import { ProfileSectionContext } from '@/store/ProfileSectionContext '

const Login = () => {
  const section = useContext(ProfileSectionContext)

  return (
    <form id="register">
      <h1>Masuk Sekarang</h1>
      <p>Masuk dan nikmati fitur kami</p>

      <div className={styles.content}>
        <Input type="email"
          label="Email"
          name="email"
          placeholder="Contoh: bambang@gmail.com"
          required
        />
        <div>
          <Input type="password"
            label="Password"
            name="password"
            placeholder="******"
            required
          />
          <Button primary
            small
            className={styles.submit}
          >
            Masuk Sekarang
          </Button>
          <span>{'Belum Memiliki Akun?'} <span role='button'
            className={styles.link}
            onClick={() => section.setSection('register')}
          >Gabung Sekarang</span></span>
        </div>
      </div>
    </form>
  )
}

export default Login