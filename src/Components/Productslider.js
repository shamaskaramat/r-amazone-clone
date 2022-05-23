import Slider from "react-slick";
import React from 'react'
import './Productslider.css'
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const Productslider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <>
        <h2 className="text">Popular products in Beauty internationally</h2>
        <Slider {...settings} className="wrapper">
        <div>
           <img src='https://m.media-amazon.com/images/I/71jYzj9mrAL._AC_SY200_.jpg' alt="" className='prodimg' />
        </div>
        <div>
          <img src='https://m.media-amazon.com/images/I/31yGL1k8LaL._AC_SY200_.jpg' alt="" className='prodimg' />
        </div>
        <div>
          <img src='https://m.media-amazon.com/images/I/81S-xWVH8kL._AC_SY200_.jpg' alt="" className='prodimg' />
        </div><div>
          <img src='https://m.media-amazon.com/images/I/81Quaej+AmL._AC_SY200_.jpg' alt="" className='prodimg' />
        </div><div>
          <img src='https://m.media-amazon.com/images/I/71FafuRrG1L._AC_SY200_.jpg' alt="" className='prodimg' />
        </div><div>
          <img src='https://m.media-amazon.com/images/I/71jYzj9mrAL._AC_SY200_.jpg' alt="" className='prodimg' />
        </div><div>
          <img src='https://m.media-amazon.com/images/I/81Quaej+AmL._AC_SY200_.jpg' alt="" className='prodimg' />
        </div><div>
          <img src='https://m.media-amazon.com/images/I/71acSwpvBdL._AC_SY200_.jpg' alt="" className='prodimg' />
        </div><div>
          <img src='https://m.media-amazon.com/images/I/61qrmiJ9ytL._AC_SY200_.jpg' alt="" className='prodimg' />
        </div><div>
          <img src='https://m.media-amazon.com/images/I/718wWetRhFS._AC_SY200_.jpg' alt="" className='prodimg' />
        </div><div>
          <img src='https://m.media-amazon.com/images/I/71znVolTx5L._AC_SY200_.jpg' alt="" className='prodimg' />
        </div><div>
          <img src='https://m.media-amazon.com/images/I/71znVolTx5L._AC_SY200_.jpg' alt="" className='prodimg' />
        </div>
        </Slider>
      </>
  )
}

export default Productslider