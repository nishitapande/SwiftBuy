import { configureStore, combineReducers } from "@reduxjs/toolkit";

import {
  productListReducer,
  productDetailsReducer,
} from "./redcuers/productReducers";

import { cartReducer } from "./redcuers/cartReducers";

// const reducer = combineReducers({
//   productList: productListReducer,
//   productDetails: productDetailsReducer,
// });

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const initialState = {
  cart: {
    cartItemsFromStorage,
  },
};
// const middleware = [thunk];
// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer,
  initialState,
});

export default store;
