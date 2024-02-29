import { ADD_TO_CART, EMPTY_CART } from "./constant";
import { REMOVE_FROM_CART } from "./constant";

export const addToCart = (data) => {
    console.warn('action is called', data);
    return {
        type: ADD_TO_CART,
        data // similar to {data: data} as key and value are same
    }
}

export const removeFromCart = (data) => {
    console.warn('action is called', data);
    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const emptyCart = () => {
    console.warn('action is called emptyCart ');
    return {
        type: EMPTY_CART,
    }
}
