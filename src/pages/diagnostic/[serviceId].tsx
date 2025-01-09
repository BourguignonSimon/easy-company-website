import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import ServiceDiagnosticForm from '@/components/diagnostic/ServiceDiagnosticForm'

const DiagnosticPage: NextPage = () => {
  const router = useRouter()
  const { serviceId } = router.query

  return (
    <div>
      <Head>
        <title>Diagnostic - Easy Company</title>
        <meta name="description" content="Évaluez vos besoins et obtenez des recommandations personnalisées." />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <ServiceDiagnosticForm
          serviceId={serviceId as string}
          onSubmit={(data) => {
            console.log('Form submitted:', data)
            // Handle form submission
          }}
        />
      </main>
    </div>
  )
}

export default DiagnosticPage