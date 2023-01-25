import React from 'react'
import Link from 'next/link'

export const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className="mini-bike">SMALL TEXT</p>
            <h3>MID TEXT</h3>
            <img src="" alt="mini-bike" className="hero-banner-image"/>
            
            <div><Link href="/product/ID">
                <button type="button">BUTTON TEXT 3</button>
            </Link>
            </div>
            <div className="desc">
                <h5>Description</h5>
                <p>DESCRIPTION HERE</p>
            </div>
            </div>
            <div></div>
            </div>

  )
}

export default HeroBanner
