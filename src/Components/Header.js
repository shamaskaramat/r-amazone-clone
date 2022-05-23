import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useStateValue } from '../StateProvider';
const Header = () => {
    const [{basket}] = useStateValue()
    return (
        <>
            <nav className='header'>
            <Link to="/">
                <img src="https://www.pngmart.com/files/Amazon-Logo-Download-PNG-Image.png" alt="" className='logo' />
                </Link>
                <input type="text" className='searchheader' />
                <SearchIcon className='search' />
                <div className='links'>
                    <div className='headeroptions'>
                    <Link to="/Signin" style={{color:"white", textDecoration:"none"}}>
                        <span>Hello, Sign in</span>
                        <br />
                        <span>Accounts & Lists</span>
                        </Link>
                    </div>
                    <div className='headeroptions'>
                        <span>Return &</span>
                        <br />
                        <span>Order</span>
                    </div>
                    <div className='headeroptions'>
                    <Link to="/Checkout">
                        <ShoppingCartOutlinedIcon className='shopicon' style={{color:"white", textDecoration:"none"}}/>
                        <span className='number'>{basket?.length}</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header