import type { NextPage } from 'next'
import Head from 'next/head'
import HeroSection from '@/components/home/HeroSection'
import ServicesOverview from '@/components/home/ServicesOverview'
import ContactSection from '@/components/home/ContactSection'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Easy Company - Conseil en stratégie et organisation</title>
        <meta name="description" content="Easy Company vous accompagne dans l'amélioration de votre organisation et de votre stratégie d'entreprise." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
        <ServicesOverview />
        <ContactSection />
      </main>
    </div>
  )
}

export default Home