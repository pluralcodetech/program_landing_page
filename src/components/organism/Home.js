import React, {useEffect} from 'react'
import Accredit from '../molecules/Accredit'
import Certificate from '../molecules/Certificate'
import Enroll from '../molecules/Enroll'
import Faq from '../molecules/Faq'
import Footer from '../molecules/Footer'
import Header from '../molecules/Header'
import Press from '../molecules/Press'
import Talent from '../molecules/Talent'
import UpperPart from '../molecules/UpperPart'
import VideoPart from '../molecules/VideoPart'
import WhySection from '../molecules/WhySection'
import BeginEnroll from '../molecules/BeginEnroll'
import Tuition from '../molecules/Tuition'
import { useLocation } from 'react-router-dom'

const Home = () => {
  let location = useLocation()
  useEffect(()=> {
   if (location.hash) {
     let elem = document.getElementById(location.hash.slice(1))
     if(elem) {
       elem.scrollIntoView({behavior: "smooth"})
              }          
       } else {
 window.scrollTo({top:0,left:0, behavior: "smooth"})
               }
   }, [location,])
  return (
    <div>
      <Header />
      <UpperPart/>
      <Certificate/>
      <VideoPart/>
      <WhySection/>
      <Accredit/>
      <Talent/>
      <Press/>
      <Enroll/>
      <BeginEnroll/>
      <Tuition/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Home
