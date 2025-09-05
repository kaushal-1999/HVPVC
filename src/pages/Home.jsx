import React from 'react'
import Hero from './hero/HeroSection'
import AboutUs from './about/AboutUs'
import Departments from './department/Department'
import Adminsion from './addminsions/Adminsion'



const Home = () => {
    return (
        <>
            <Hero />
            <AboutUs/>
            <Departments/>
            <Adminsion/>
        </>
    )
}

export default Home