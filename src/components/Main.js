import { useDispatch } from "react-redux";
import { addToCart, emptyCart, removeFromCart } from '../redux/action'
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux"
import { useEffect } from "react";

function Main() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.productData)
    console.log('reducer data in main >> ', data);

    useEffect(() => {
        dispatch(productList())
    }, [])

    return (
        <>
            <div>
                <button onClick={() => { dispatch(emptyCart()) }}>
                    Empty Cart
                </button>
            </div>
            <div className="product-container">
                {data.map((item, ind) => {
                    return (
                        <div key={ind} className="product-item">
                            <img src={item.photo} alt="" height="150px" />
                            <div>Name: {item.name}</div>
                            <div>Color: {item.color}</div>
                            <div>Brand: {item.brand}</div>
                            <div>Price: {item.price}</div>
                            <div>Category: {item.category}</div>
                            <div>
                                <button onClick={() => { dispatch(addToCart(item)) }}>Add To Cart</button>
                                <button onClick={() => { dispatch(removeFromCart(item.id)) }}>Remove From Cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Main