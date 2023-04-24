import React from 'react'
import picOne from "../images/house.jpg"
import picTwo from "../images/poolhouse.jpg"
const house= [
  {
    id:0,
    name:"Larry montry",
    location:"Sumber pack, Australia",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    reviews: "500 reviews",
    price:"$200",
    image:picOne
  },
  {
    id:1,
    name:"Summer bay",
    location:"Sumber pack, Lagos,  Nigeria",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    reviews: "350 reviews",
    price:"$120",
    image:picTwo
  },
]

function House() {
    const houseArray = house.map(oneHouse =>
        <div className="container">
          <img src={oneHouse.image} alt="house image" width={250} />
          <div className="info">
          <h3>{oneHouse.name}</h3>
          <p>{oneHouse.location}</p>
          <p><small>{oneHouse.reviews}</small></p>
          <hr/>
          <p className="description">{oneHouse.description}</p>
          </div>
          <hr/>
          <div className="pad">
            <button className="bookBtn">Book now</button>
            <p className="price"><b>{oneHouse.price}</b><small> /night</small></p>
          </div>
        </div>  
      )
  return (
    <div className="cards">
        {houseArray}
    </div>
  )
}

export default House