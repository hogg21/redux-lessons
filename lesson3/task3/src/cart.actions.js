export const ADD = 'PRODUCTS/ADD';
export const REMOVE = 'PRODUCTS/REMOVE';

export const addProduct = (productData) => {
    return {
        type: ADD,
        payload: {
            productData,
        }
    }
}
export const removeProduct = (productId) => {
    return {
        type: REMOVE,
        payload: {
            productId,
        }
    }
}
