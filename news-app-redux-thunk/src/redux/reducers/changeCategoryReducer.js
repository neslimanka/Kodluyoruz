  
import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function changeCategoryReducer(state=initialState.currentCategory,action){
    switch (action.type) {
        case actionTypes.CHANGE_CATEGORY:
            
            return action.payload//category
    
        default:
            return state;
}
}

//action a bir categori yollucam parametre olarak,oda reducerda gelen actionun 
//payload ını return edecek. --->Reducer bizim için state döndürüyor