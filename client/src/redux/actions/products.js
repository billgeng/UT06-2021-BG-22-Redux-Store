export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product
});

export const removeProduct = (productId) => ({
    type: REMOVE_PRODUCT,
    payload: productId
});

export const updateProducts = (products) => ({
    type: UPDATE_PRODUCTS,
    payload: products
});