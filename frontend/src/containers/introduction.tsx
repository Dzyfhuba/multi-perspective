import styles from './introduction.module.css'
import ImageIntro1 from '@/images/intro1.png'
import ImageIntro2 from '@/images/intro2.png'
import ImageIntro3 from '@/images/intro3.jpg'
import Image from 'next/image'

const Introduction = () => {
  const title = 'Mengenal AGROS Indonesia Lebih Dekat'
  const description = `Agros adalah sistem terpadu satu pintu-one stop service yang berfokus pada pelayanan jasa logistik muatan berat.
  Agros menawarkan mitra terlatih, efisiensi dan transparansi, kemudahan akses untuk layanan pemeliharaan hingga fitur transaksi`

  const subtitle = 'Layanan AGROS Indonesia'
  const services = [
    {
      image: ImageIntro1,
      title: 'AGROS Shipper',
      description: 'Agros adalah sistem terpadu satu pintu—one stop service yang berfokus pada pelayanan jasa logistik muatan berat. Agros menawarkan mitra terlatih, efisiensi dan transparansi',
    },
    {
      image: ImageIntro2,
      title: 'AGROS Transporter',
      description: 'Tidak ada yang tidak mungkin. Kini, Perusahaan bisa dengan cepat mendapatkan keuntungan tanpa harus melakukan hal berat.',
    },
    {
      image: ImageIntro3,
      title: 'AGROS Driver',
      description: 'AGROS menawarkan keleluasaan untuk memilih proyek sehingga peningkatan pendapatan bukan lagi jadi impian.',
    },
  ]

  return (
    <section id="introduction">
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        <h2>{subtitle}</h2>
        <div className={styles.services}>
          {services.map((item, idx) => (
            <div key={idx}
              className={styles.card}
            >
              <Image src={item.image}
                alt={item.title}
                className={styles.image} 
              />
              <div className='p-3'>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Introduction