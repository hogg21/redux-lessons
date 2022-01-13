import { ADD, REMOVE } from './cart.actions.js';

const initialState = {
    products: []
}
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD: {
            return {
                ...state,
                products: state.products.concat(action.payload.productData)
            }
        }
        case REMOVE: {
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload.productId)
            }
        }
        default:
            return state;
    }
}