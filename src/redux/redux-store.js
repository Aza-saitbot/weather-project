import { applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {weatherCityReducer} from "./weatherCity-reducer";


let rootReducers=combineReducers({
    weather:weatherCityReducer,
})

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

export default store;







