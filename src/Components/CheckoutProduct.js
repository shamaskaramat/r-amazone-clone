import { useStateValue } from '../StateProvider'
import React from './CheckoutProduct.css'
const CheckoutProduct = ({ id, title, image, price, rating }) => {
    const [{},dispatch] = useStateValue();
    const removeFromBasket = ()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }
    return (
        <>
            <div className='checkoutproduct'>
                <img className='imageproduct' src={image} alt={title} />
                <div className='productinfo'>
                    <p className='checkoutproducttitle'>{title}</p>
                    <p className='checkoutproductprice'>
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className='checkoutrating'>
                        {Array(rating)
                            .fill()
                            .map(() => (<p>⭐</p>))
                        }
                    </div>
                    <button className='removeproduct' onClick={removeFromBasket}>REMOVE FROM BASKET</button>
                </div>
            </div>
        </>
    )
}

export default CheckoutProduct