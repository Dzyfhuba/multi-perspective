'use client'
import { useContext, useEffect, useState } from 'react'
import styles from './partners.module.css'
import { UserContext } from '@/store/UserContext '
import Axios from '@/variables/axios'
import User from '@/types/user'

const Partners = () => {
  const userContext = useContext(UserContext)
  console.log(userContext)
  const [customers, setCustomers] = useState<User[]>([])

  const title = 'Mitra AGROS'
  const description = `Kami berusaha semaksimal mungkin untuk memberikan kenyamanan dan keamanan kepada para pelanggan setia AGROS Indoneisa.
  Berikut merukapan daftar pelanggan setia kami.`

  useEffect(() => {
    (async () => {
      const res = await Axios.get('/users/customers')

      setCustomers(res.data.data)
    })()
  }, [])

  return (
    <section id="partners">
      <h1>{title}</h1>
      <p>{description}</p>

      <div className={styles.grid}>
        {customers.map(customer => (
          <div key={customer.id}
            className={styles.card}
          >
            <h3>{customer.name}</h3>
            <span className={styles.city}>{customer.city}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Partners