import { useSelector } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom'

function Cart() {
    const cartData = useSelector(state => state.cartData)
    let amount = cartData.length && cartData.map(item => item.price).reduce((prev, next) => prev + next)
    console.log('amount', amount);
    return (
        <div>
            <Link to='/'>Product List</Link>
            <h3>Cart Page</h3>
            <div className='cart-page-container'>
                <table>
                    <tr>
                        <td>Name</td>
                        <td>Color</td>
                        <td>Price</td>
                        <td>Brand</td>
                        <td>Category</td>
                    </tr>
                    {cartData.map((item, ind) => {
                        return (
                            <tr key={ind}>
                                <td>{item.name}</td>
                                <td>{item.color}</td>
                                <td>{item.price}</td>
                                <td>{item.brand}</td>
                                <td>{item.category}</td>
                            </tr>
                        )
                    })}
                </table>

                <div className='price-details'>
                    <div className='adjust-price'><span>Amount</span><span>{amount}</span></div>
                    <div className='adjust-price'><span>Discount</span><span>{amount / 10}</span></div>
                    <div className='adjust-price'><span>Tax</span><span>0000</span></div>

                    <div className='adjust-price'><span>Total</span><span>{amount - (amount / 10)}</span></div>
                </div>
            </div >
        </div>
    );
}

export default Cart;
