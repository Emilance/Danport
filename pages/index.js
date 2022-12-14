import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import AppBanner from '../components/Banner.js'
import FancyBurger from '../components/FancyBurger.jsx'
import Footer from '../components/Footer.jsx'
import MobileSideNav from '../components/MobileSidebar.jsx'
import About from '../components/sections/About.jsx'
import Contact from '../components/sections/Contact.jsx'
import Experience from '../components/sections/Experience.jsx'
import Projects from '../components/sections/Projects.jsx'
import SideNav from '../components/SideNav.jsx'

import styles from '../styles/Home.module.css'

export default function Home() {
  const [openSideBar,  setOpenSideBar] = useState(false)
  const  toggleSideBar = ()=>{
    setOpenSideBar(!openSideBar)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel Portfolio</title>
        <meta name="description" content="A Portfolio website built with NextJs" />
        <link rel="icon" href="/danport.png" />
        <meta property="og:title"  content="Daniel Portfolio"/>
        <meta property="og:description"  content="A Portfolio website built with NextJs"/>
        <meta property="og:url"  content="https://danport.vercel.app/"/>
        <meta property="og:image6"  href="/danport.png"/>
      </Head>
     {openSideBar    &&  
        <MobileSideNav/>
    }
    <SideNav/>

      <div className={styles.pageContainer}>
        <FancyBurger toggleSideBar={toggleSideBar} />
        <AppBanner/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
 
      </div>
       
    </div>
  )
}
