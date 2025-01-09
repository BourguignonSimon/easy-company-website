import type { NextPage } from 'next'
import Head from 'next/head'
import ServicesList from '@/components/services/ServicesList'
import { services } from '@/data/services'

const Services: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nos Services - Easy Company</title>
        <meta name="description" content="Découvrez nos services de conseil en stratégie et organisation d'entreprise." />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Nos Services</h1>
        <ServicesList services={services} />
      </main>
    </div>
  )
}

export default Services