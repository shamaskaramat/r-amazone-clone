import React from 'react'
import './Product.css'
import { useStateValue } from '../StateProvider';
const Product = ({ id, title, image, price, rating }) => {
    const [{basket} , dispatch] = useStateValue();
    const addToBasket =()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id,
                title,
                image,
                price,
                rating
            }
        })
    }
    return (
        <>
            <div className='product'>
                <div className='productinfo'>
                    <p className='title'>{title}</p>
                    <p className='productprice'>
                        <smal>$</smal>
                        <strong>{price}</strong>
                    </p>
                    <div className='rating'>
                        {Array(rating)
                            .fill()
                            .map(() => (<p>⭐</p>))
                        }
                    </div>
                </div>
                <div className='info'>
                    <img src={image} alt="watch" className='productimg' />
                    <button className='productbtn' onClick={addToBasket}>ADD TO BASKET</button>
                </div>
            </div>
        </>
    )
}

export default Product