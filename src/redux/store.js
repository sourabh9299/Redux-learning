// Defualt store.js step 3 Then app.js
import { createStore, } from "redux"
import CounterReducer from "./CounterReducer"
const store = createStore(CounterReducer);

export default store;

