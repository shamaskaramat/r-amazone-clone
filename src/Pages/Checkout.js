import Header from '../Components/Header'
import { useStateValue } from '../StateProvider'
import './Checkout.css'
import CheckoutProduct from '../Components/CheckoutProduct'
import Subtotal from '../Components/Subtotal'

const Checkout = () => {
  const [{ basket }] = useStateValue()
  return (
    <>
      <Header />
      <div className='checkout'>
        <div className="checkout__left">
          <img className='banner1' src="https://image.shutterstock.com/image-vector/business-travel-special-offer-poster-260nw-796568554.jpg" alt="" />
          {basket?.length === 0 ? (
            <div>
              <h2>Your Shopping Basket is empty</h2>
              <p>You have no items in your basket, To buy one or "ADD TO BASKET" next to the item.</p>
            </div>
          ) : (
            <div className='shopping'>
              <h2>Your Shopping Basket</h2>
              {basket.map((item) => {
                return (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                )
              })}
            </div>
          )}
        </div>
        {basket?.length > 0 &&
          <div className="checkout__right">
            <Subtotal/>
          </div>
        }
      </div>
    </>
  )
}

export default Checkout