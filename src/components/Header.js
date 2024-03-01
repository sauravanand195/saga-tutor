import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { productSearch } from '../redux/productAction';

const Header = () => {
    const result = useSelector((state) => state.cartData);
    const dispatch = useDispatch();
    console.log('reducer data in header >> ', result)

    return (
        <div className='header'>
            <Link to='/'>
                <h3 className='logo'>Home</h3>
            </Link>
            <div className='search-box'>
                <input type='search' onChange={(e) => dispatch(productSearch(e.target.value))} placeholder='Search Product' />
            </div>
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
