'use client'
import Button from '@/components/button'
import { UserContext } from '@/store/UserContext '
import User from '@/types/user'
import Axios from '@/variables/axios'
import { useContext, useEffect, useState } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import styles from './partners.module.css'
import { AxiosError } from 'axios'

const Partners = () => {
  const userContext = useContext(UserContext)
  const [customers, setCustomers] = useState<User[]>([])
  const ReactSwal = withReactContent(Swal)

  const title = 'Mitra AGROS'
  const description = `Kami berusaha semaksimal mungkin untuk memberikan kenyamanan dan keamanan kepada para pelanggan setia AGROS Indoneisa.
  Berikut merukapan daftar pelanggan setia kami.`

  const getData = async () => {
    const res = await Axios.get('/users/customers')

    setCustomers(res.data.data)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleDelete = (id: number) => {
    const customer = customers.filter(e => e.id === id)[0]
    ReactSwal.fire({
      icon: 'warning',
      html: (
        <span>Hapus mitra <span className='bold'>{customer.name}</span> dari kota <span className='bold'>{customer.city}</span></span>
      ),
      showCancelButton: true,
      showCloseButton: true,
      reverseButtons: true,
      confirmButtonColor: 'red',
      confirmButtonText: 'Delete'
    })
      .then(({ isConfirmed }) => {
        if(isConfirmed) {
          Axios.delete(`/users/${id}`)
            .then((res) => {
              ReactSwal.fire({
                icon: 'success',
                text: res.data.message
              })
              getData()
            })
            .catch((err:AxiosError) => {
              console.log(err.response?.data)
            })
        }
      })

  }

  return (
    <section id="partners">
      <h1>{title}</h1>
      <p>{description}</p>

      {(customers.length && !userContext.isLoading) ? (
        <div className={styles.grid}>
          {customers.map(customer => (
            <div key={customer.id}
              className={styles.card}
            >
              <h3>{customer.name}</h3>
              <span className={styles.city}>{customer.city}</span>

              {(userContext.user && userContext.user.role === 'superadmin') ? (
                <Button small
                  square
                  className={styles.destroy}
                  onClick={() => handleDelete(customer.id!)}
                >
                  <IoCloseCircleOutline size={24} />
                </Button>
              ) : <></>}
            </div>
          ))}
        </div>
      ): <></>}
    </section>
  )
}

export default Partners