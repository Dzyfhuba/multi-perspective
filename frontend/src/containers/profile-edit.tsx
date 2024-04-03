'use client'
import Button from '@/components/button'
import Input from '@/components/input'
import ResponseCustom from '@/types/response'
import Axios from '@/variables/axios'
import getUser from '@/variables/get-user'
import { AxiosError, AxiosResponse } from 'axios'
import { SyntheticEvent, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import styles from './register.module.css'

type FormData = {
  name?: string
  city?: string
  password?: string
  email?: string
}

const ProfileEdit = () => {
  const [formData, setFormData] = useState<FormData>({})

  const ReactSwal = withReactContent(Swal)
  const handleForm = (e: SyntheticEvent) => {
    e.preventDefault()

    Axios.put<ResponseCustom>('/auth/user', formData)
      .then((res: AxiosResponse) => {
        if (res.status === 201) {
          ReactSwal.fire({
            title: 'Update Berhasil',
            icon: 'success'
          })
        }
      })
      .catch((error: AxiosError<ResponseCustom>) => {
        console.log(error)
        ReactSwal.fire({
          title: 'Update gagal',
          icon: 'error',
          text: error.response?.data.message || 'Check your form'
        })
      })
  }

  useEffect(() => {
    (async () => {
      const data = await getUser()

      setFormData(data.item)
    })()
  }, [])
  
  if (!formData) {
    return <Skeleton style={{ height: '80vh' }} />
  }
  console.log(formData)

  return (
    <form id="edit"
      onSubmit={handleForm}
    >
      <h1>Perbarui Profile</h1>
      <p>Masuk dan nikmati fitur kami</p>

      <div className={styles.content}>
        <Input type="text"
          label="Name"
          name="name"
          placeholder="Contoh: bambang"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          defaultValue={formData.name}
          required
        />
        <Input type="text"
          label="Kota"
          name="city"
          placeholder="Contoh: Pekalongan"
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          defaultValue={formData.city}
          required
        />
        <Input type="email"
          label="Email"
          name="email"
          placeholder="Contoh: bambang@gmail.com"
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          defaultValue={formData.email}
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
            Perbarui Sekarang
          </Button>
        </div>
      </div>
    </form>
  )
}

export default ProfileEdit