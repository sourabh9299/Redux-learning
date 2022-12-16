// Defualt store.js step 3 Then app.js
import { combineReducers, createStore, } from "redux"
import CounterReducer from "./CounterReducer"
import BatReducer from "./BatReducer";
const rootReducer = combineReducers({
    Count: CounterReducer,
    Buycount: BatReducer
})
const store = createStore(rootReducer);



export default store;

