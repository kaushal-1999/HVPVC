import React from 'react'
import Hero from './hero/HeroSection'
import AboutUs from './about/AboutUs'
import Departments from './department/Department'



const Home = () => {
    return (
        <>
            <Hero />
            <AboutUs/>
            <Departments/>
        </>
    )
}

export default Home