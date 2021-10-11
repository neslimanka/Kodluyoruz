import * as actionTypes from "./actionTypes";

export function changeCategory(category){
    return {type:actionTypes.CHANGE_CATEGORY,payload:category}

    //return obje{type,payload}-->reducer CHANGE_CATEGORY i gördüğü anda stateti 
    //payload a belirtilen değer olarak set etmiş olacağız.ismide category değeride category 
}
export function getCategoriesSuccess(categories){
    return {type:actionTypes.GET_CATEGORİES_SUCCESS,payload:categories}
}

export function getCategories(){
    return function(dispatch){
        let url="http://localhost:3000/categories"
        return fetch(url).then(response=>response.json())//her then bir önceki then in çıkardığı sonuçla ilgilenir!
        .then(result=>dispatch(getCategoriesSuccess(result)))
    }
}