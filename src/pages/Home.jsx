import React from 'react'
import Layout from '../components/Layout/Layout'
import Hero from '../components/ui/home/Hero'
import Services from '../components/ui/home/Services'
import Map from '../components/ui/home/Map'

const Home = () => {
  return (
    <Layout>
        <Hero/>
        <Services/>
        <Map/>
    </Layout>
  )
}

export default Home
