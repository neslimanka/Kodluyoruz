import * as actionTypes from "./actionTypes";

export function changeCategory(category){
    return {type:actionTypes.CHANGE_CATEGORY,payload:category}
    //return obje{type,payload}-->reducer CHANGE_CATEGORY i gördüğü anda stateti 
    //payload a belirtilen değer olarak set etmiş olacağız.ismide category değeride category 
}