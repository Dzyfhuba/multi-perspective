import Button from '@/components/button'
import Input from '@/components/input'
import Select from '@/components/select'
import styles from './register.module.css'
import { useContext } from 'react'
import { ProfileSectionContext } from '@/store/ProfileSectionContext '

const Register = () => {
  const section = useContext(ProfileSectionContext)

  return (
    <form id="register">
      <h1>Daftar Sekarang</h1>
      <p>Mari bergabung bersama kerabat AGROS Indonesia lainnya.</p>

      <div className={styles.content}>
        <Input type="text"
          label="Nama Lengkap Kerabat"
          name="name"
          placeholder="Contoh: Bambang"
          required
        />
        <Input type="text"
          label="Asal Kota"
          name="city"
          placeholder="Contoh: Pekalongan"
          required
        />
        <Input type="email"
          label="Email"
          name="email"
          placeholder="Contoh: bambang@gmail.com"
          required
        />
        <Input type="password"
          label="Password"
          name="password"
          placeholder="******"
          required
        />
        <div>
          <Select name="role"
            label="Role"
            placeholder="Pilih Role: Customer / Super Admin"
            required
          >
            <option value="customer">Customer</option>
            <option value="superadmin">Super Admmin</option>
          </Select>
          <Button primary
            small
            className={styles.submit}
          >
            Gabung Sekarang
          </Button>
          <span>{'Sudah Memiliki Akun?'} <span role='button'
            className={styles.link}
            onClick={() => section.setSection('login')}
          >Masuk Sekarang</span></span>
        </div>
      </div>
    </form>
  )
}

export default Register