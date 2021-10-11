//Reduer State yönetimini yaptığımız yerdi.

import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function newsPageReducer(state=initialState.newsPage,action){

    switch (action.type) {
        
        
            case actionTypes.GET_NEWSPAGE_SUCCESS:
               
                var item=state.find(c=>c.news.id===action.payload.news.id);
                if(item){
                    var newState=state.map(newsItem => {
                        if(newsItem.news.id===action.payload.news.id){
                           return Object.assign({},item)
                        }
                        return newsItem;
                    })
                    return newState;
                }
                else {
                    return [...state,{...action.payload}] //--> state in bir kopyasını al ve o kopyaya action ile gelen 
                }
                default:
                    return state;
}

}
