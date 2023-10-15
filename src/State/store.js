import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./Reducers";

const store = createStore(reducers,{},applyMiddleware(thunk))

export default store


// import { configureStore } from '@reduxjs/toolkit'

// export const store = configureStore({
//   reducers
// })