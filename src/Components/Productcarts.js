import React from 'react'
import Productcart from './Productcart'
import './Productcarts.css'
const Productcarts = () => {
  return (
    <div className='wrapper'>
    <Productcart
        title="For your Fitness Needs"
        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg"
    />
    <Productcart
        title="Shop Pet supplies"
        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_1X._SY304_CB639746743_.jpg"
    />
    <Productcart
        title="Shop activity trackers and smartwatchess"
        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
    />
    <Productcart
        title="International top sellers"
        image="https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SY195_.jpg"
    />
    </div>
  )
}

export default Productcarts