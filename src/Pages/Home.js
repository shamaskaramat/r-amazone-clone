import React from 'react'
import Header from '../Components/Header'
import Product from '../Components/Product'
import Productcarts from '../Components/Productcarts'
import Productslider from '../Components/Productslider'
import './Home.css'
const Home = () => {
  return (
    <>
      <Header />
      <img className="bannertop" src="https://gmedia.playstation.com/is/image/SIEPDC/amazon-prime-page-banner-desktop-01-en-12nov20?$native--t$" alt="banner" />
      <div className='products'>
        <Product
          id="458795"
          title=" Timex Men's Expedition Acadia "
          price={12.99}
          rating={4}
          image="https://rukminim2.flixcart.com/image/714/857/watch/u/s/y/ya136206-gucci-original-imaemxn3hkwphu23.jpeg?q=50"
        />
        <Product
          id="454095"
          title=" Guides to Java Programming"
          price={5.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81yXligGY%2BL.__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg"
        />
      </div>
      <div className='products'>
        <Product
          id="454095"
          title=" Electronics"
          price={5.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
        />
        <Product
          id="454095"
          title=" Computers & Accessories"
          price={5.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
        />
        <Product
          id="454095"
          title=" Deal of the Day"
          price={5.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/41cUTlTtVML._AC_SY230_.jpg"
        />

      </div>
      <Productslider/>
     <Productcarts/>
     <Productslider/>
     <Productcarts/>


    </>
  )
}

export default Home