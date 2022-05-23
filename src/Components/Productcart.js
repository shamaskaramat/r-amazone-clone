import React from 'react'
import './Productcart.css'
const Productcart = ({ title, image }) => {
    return (
        <>
            <div className='container'>
                <h2 className='title'>{title}</h2>
                <img src={image} alt={title} className='img' />
                <span className='text'>Shop Now</span>
            </div>
        </>
    )
}

export default Productcart