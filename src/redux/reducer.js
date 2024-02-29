import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant"

export const cartData = (data = [], action) => {
    // if (action.type === ADD_TO_CART) {
    //     console.warn('reducer called', action)
    //     return action.data
    // } else {
    //     return 'no action matched'
    // }
    switch (action.type) {
        case ADD_TO_CART:
            console.warn('ADD_TO_CART called', action)
            // add to cart logic
            return [action.data, ...data];

        case REMOVE_FROM_CART:
            console.warn('REMOVE_FROM_CART called', action)
            // const newData = data.map(value => ({ ...value }))
            // newData.length = newData.length ? newData.length - 1 : data
            const newData = data.length ? data.slice(0, -1) : data
            // data.length = data.length ? data.length - 1 : []
            return [...newData];

        case EMPTY_CART:
            console.warn('EMPTY_CART called', action)
            data = []
            return [...data];

        default:
            return data;
    }
}
