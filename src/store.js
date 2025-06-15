// This file stores the Redux store configuration for the application. The store is created using Redux Toolkit's `configureStore` function, which simplifies the setup process and automatically includes useful middleware like Redux Thunk for handling asynchronous actions.
import { configureStore } from "@reduxjs/toolkit";
import shopingCartReducer from "./slices/shopingCartReducer";

const store = configureStore({
  reducer: {
    shopingCart: shopingCartReducer,
  },
});

export default store;