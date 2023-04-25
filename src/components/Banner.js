import React from 'react';
import hero from "../images/bannerMedium.jpg";

function Banner() {
  return (
    <div className='hero-img' style={{ backgroundImage: `url(${hero})` }}>
        {/* <h1 className='hero-text'>Get great deals, giving you the best experiences at affordable rates</h1>     */}
    </div>
  )
}

export default Banner