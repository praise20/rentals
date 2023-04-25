import React from 'react'
function Main(){
    return(
    <div className='service'>
    <h2 style={{padding:20, textAlign:"center"}}>Our Services</h2>
    <ul>
      <li>We offer lodgings all over the world</li>
      <li>Very affordable rates</li>
      <li>Our properties have additional amenities for people with disabilities</li>
      <li>24hours security with cctv coverage</li>
    </ul>
    </div>
    )
}

function Services() {
  return (
    <Main />
  )
}

export default Services