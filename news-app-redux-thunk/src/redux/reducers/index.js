import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer"
import newsListReducer from "./newsListReducer"
import newsPageReducer from "./newsPageReducer";

const rootReducer=combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    newsListReducer,
    newsPageReducer


})

export default rootReducer;