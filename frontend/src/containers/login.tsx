import Button from '@/components/button'
import Input from '@/components/input'
import Link from 'next/link'
import styles from './register.module.css'

const Login = () => {
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
          <span>{'Belum Memiliki Akun?'} <Link role='button'
            className={styles.link}
            href={'/profile?section=register'}
          >Gabung Sekarang</Link></span>
        </div>
      </div>
    </form>
  )
}

export default Login