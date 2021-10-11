import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function newsListReducer(state=initialState.news,action){
    switch (action.type) {
        case actionTypes.GET_NEWS_SUCCESS:
            
            return action.payload
    
        default:
            return state;
}
}