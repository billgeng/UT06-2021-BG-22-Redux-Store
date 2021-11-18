import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    UPDATE_PRODUCTS,
  } from "../actions/products";
  
  const initialState = {
    products: [],
    categories: []
  };
  
  export const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PRODUCT:
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      case REMOVE_PRODUCT:
        return {
          ...state,
          product: state.products.filter(
            (product) => product.id !== action.payload
          ),
        };
      case UPDATE_PRODUCTS:
        return {
          ...state,
          products: action.payload,
        };
      default:
        return state;
    }
  };