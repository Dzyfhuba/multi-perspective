'use client'
import Button from '@/components/button'
import Input from '@/components/input'
import Link from 'next/link'
import styles from './register.module.css'
import { SyntheticEvent, useState } from 'react'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
import ResponseCustom from '@/types/response'
import { AxiosError, AxiosResponse } from 'axios'
import Axios from '@/variables/axios'

type FormData = {
  email?: string
  password?: string
}

const Login = () => {
  const [formData, setFormData] = useState<FormData>({})

  const ReactSwal = withReactContent(Swal)
  const router = useRouter()

  const handleForm = (e: SyntheticEvent) => {
    e.preventDefault()

    Axios.post<ResponseCustom>('/auth/login', formData)
      .then((res: AxiosResponse) => {
        if (res.status === 200) {
          ReactSwal.fire({
            title: 'Login Berhasil',
            icon: 'success'
          })
            .then(() => {
              if (res.data.item) localStorage.setItem('token', res.data.item.token || '')
              router.push('/')
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
      <h1>Masuk Sekarang</h1>
      <p>Masuk dan nikmati fitur kami</p>

      <div className={styles.content}>
        <Input type="email"
          label="Email"
          name="email"
          placeholder="Contoh: bambang@gmail.com"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <div>
          <Input type="password"
            label="Password"
            name="password"
            placeholder="******"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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