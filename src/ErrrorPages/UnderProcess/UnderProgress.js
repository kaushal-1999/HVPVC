import React from 'react'
import './UnderProgress.css'
import under_construction from './under_construction.svg'
const UnderProgress = () => {
  return (
    <div class="uc__wrapper">
    <div class="uc__details">
        <h1 class="title">Coming Soon!</h1>
        <h3 class="intro">
            We are working hard to give you a better experience.
        </h3>
        <p class="uc__description">
            We are working hard on it & the site may go live very soon. We promise, it will be worth the wait!
        </p>
        <div class="uc__subscribe">
            <h3>Visit Devolper Profile : <a href="https://kaushalportfolio.vercel.app/">Kaushal Patil</a></h3>
            
        </div>
    </div>
    <div class="uc__art">
        <img src= {under_construction} alt=""/>
    </div>
</div>
  )
}

export default UnderProgress