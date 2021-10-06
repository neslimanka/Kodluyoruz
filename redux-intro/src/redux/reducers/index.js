import { combineReducers } from "redux"; //reducerları bir araya getir
import counterReducer from "./counterReducer";

const reducers=combineReducers({
    counterReducer
});

export default reducers;
