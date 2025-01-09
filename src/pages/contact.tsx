import type { NextPage } from 'next'
import Head from 'next/head'
import ContactForm from '@/components/contact/ContactForm'

const Contact: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Contact - Easy Company</title>
        <meta name="description" content="Contactez-nous pour en savoir plus sur nos services de conseil." />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Contact</h1>
        <ContactForm />
      </main>
    </div>
  )
}

export default Contact