import styles from './story.module.css'
import ImageStory from '@/images/story.png'
import Image from "next/image"

const Story = () => {
  const title = 'Cerita Kerabat AGROS'
  const description = 'Terinspirasi dari arah mata angin yang membawa pada satu destinasi, Agros akan terus bergerak menciptakan pemerataan ekonomi sehingga bisa menjadi penghubung para stakeholders dalam aktivitas muatan berat, mulai dari shipper, transporter, driver, mitra pemeliharan, seller dan buyer intermoda yang menjangkau seluruh penjuru Nusantara.'
  return (
    <section id="story">
      <h1>{title}</h1>
      <div className='flex'>
        <Image src={ImageStory} alt={title} className={styles.image} />
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  )
}

export default Story