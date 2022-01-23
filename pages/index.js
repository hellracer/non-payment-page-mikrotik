import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Payment Reminder!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Payment Reminder" />
        <p className="description">
          Your account is temporarily suspended, please contact support!
        </p>
      </main>

      <Footer />
    </div>
  )
}
