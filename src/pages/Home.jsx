import React from 'react'
import Hero from './hero/HeroSection'
import AboutUs from './about/AboutUs'
import Departments from './department/Department'
import Adminsion from './addminsions/Adminsion'
import Contact from './contact/Contact'
import Notice from './notice/Notice'



const Home = () => {
    return (
        <>
            <Hero />
            <Notice/>
            <AboutUs/>
            <Departments/>
            <Adminsion/>
            <Contact/>
        </>
    )
}

export default Home