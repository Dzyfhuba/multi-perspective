'use client'
import Button from '@/components/button'
import Input from '@/components/input'
import Select from '@/components/select'
import ResponseCustom from '@/types/response'
import Axios from '@/variables/axios'
import { AxiosError } from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SyntheticEvent, useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import styles from './register.module.css'

type FormData = {
  name?: string
  city?: string
  email?: string
  password?: string
  role?: string
}

const Register = () => {
  const [formData, setFormData] = useState<FormData>({})

  const ReactSwal = withReactContent(Swal)
  const router = useRouter()

  const handleForm = (e: SyntheticEvent) => {
    e.preventDefault()

    Axios.post<ResponseCustom>('/auth/register', formData)
      .then((res) => {
        if (res.status === 201) {
          ReactSwal.fire({
            title: 'Registrasi Berhasil',
            icon: 'success'
          })
            .then(() => {
              router.push('/profile?section=login')
            })
        }
      })
      .catch((error: AxiosError<ResponseCustom>) => {
        console.log(error)
        ReactSwal.fire({
          title: 'Registrasi gagal',
          icon: 'error',
          text: error.response?.data.message || 'Check your form'
        })
      })
  }

  return (
    <form id="register"
      onSubmit={handleForm}
    >
      <h1>Daftar Sekarang</h1>
      <p>Mari bergabung bersama kerabat AGROS Indonesia lainnya.</p>

      <div className={styles.content}>
        <Input type="text"
          label="Nama Lengkap Kerabat"
          name="name"
          placeholder="Contoh: Bambang"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <Input type="text"
          label="Asal Kota"
          name="city"
          placeholder="Contoh: Pekalongan"
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          required
        />
        <Input type="email"
          label="Email"
          name="email"
          placeholder="Contoh: bambang@gmail.com"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <Input type="password"
          label="Password"
          name="password"
          placeholder="******"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        <div>
          <Select name="role"
            label="Role"
            placeholder="Pilih Role: Customer / Super Admin"
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
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
          <span>{'Sudah Memiliki Akun?'} <Link role='button'
            className={styles.link}
            href={'/profile?section=login'}
            // onClick={() => section.setSection('login')}
          >Masuk Sekarang</Link></span>
        </div>
      </div>
    </form>
  )
}

export default Register