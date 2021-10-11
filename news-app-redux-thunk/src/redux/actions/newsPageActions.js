import * as actionTypes from "./actionTypes";

 export function getNewsPage(newsPage){
   return {type:actionTypes.GET_NEWSPAGE_SUCCESS,payload:newsPage}
 }
