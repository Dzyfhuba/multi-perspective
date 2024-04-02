const Introduction = () => {
  const title = 'Mengenal AGROS Indonesia Lebih Dekat'
  const description = `Agros adalah sistem terpadu satu pintu-one stop service yang berfokus pada pelayanan jasa logistik muatan berat.
  Agros menawarkan mitra terlatih, efisiensi dan transparansi, kemudahan akses untuk layanan pemeliharaan hingga fitur transaksi`

  return (
    <section id="introduction">
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  )
}

export default Introduction