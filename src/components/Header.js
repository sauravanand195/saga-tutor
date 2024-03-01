import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Header = () => {
    const result = useSelector((state) => state.cartData);
    console.log('reducer data in header >> ', result)

    return (
        <div className='header'>
            <Link to='/'>
                <h3 className='logo'>Home</h3>
            </Link>
            <Link to='/cart'>
                <div className='cart-div'>
                    <span>{result.length}</span>
                    <img src='https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_640.png' alt='' />
                </div>
            </Link>
        </div>
    )
}

export default Header
