import dynamic from 'next/dynamic'
import Head from 'next/head'

const Dashboard = dynamic(() => import('../components/AshokanJobDashboard'), {
  ssr: false,
  loading: () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'var(--font-sans)',
      color: 'var(--color-text-secondary)',
      fontSize: 14,
    }}>
      Loading dashboard...
    </div>
  ),
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Job Intelligence Dashboard | Ashokan Engineering</title>
        <meta name="description" content="Private job intelligence dashboard for Ashokan Engineering Consultancy" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💼</text></svg>" />
      </Head>
      <Dashboard />
    </>
  )
}
