import Head from 'next/head'
import About from '../components/About'
import Dropdown from '../components/Dropdown'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Technologies from '../components/Technologies'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Arnold Perez</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='relative p-6 max-w-screen-xl mx-auto'>
        <Header />
        <Dropdown />
        <Hero />
        <Projects />
        <Technologies />
        {/* <About /> */}
        <Footer />
      </div>
    </div>
  )
}
