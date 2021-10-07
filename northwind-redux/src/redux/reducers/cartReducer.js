//Reduer State yönetimini yaptığımız yerdi.

import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function cartReducer(state=initialState.cart,action){

    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            //eklenen elemanı sepetin içerisinde bul. Her bir sepet elemanı için c nın productçid eşit mi
            //parametre olarak gönderilen ürüne eşitse(payload.product.id) ise addedItem a taşı
            var addedItem=state.find(c=>c.product.id===action.payload.product.id);
            if(addedItem){//--> eğer lisede addedItem varsa mevcut ururnun sayısını bir arttır.
              var newState=state.map(cartItem => {
                  if(cartItem.product.id===action.payload.product.id){
                     return Object.assign({},addedItem,{quantity:addedItem.quantity+1})
                  }
                  return cartItem;
              })
              return newState;
              
            }else {
                return [...state,{...action.payload}] //--> state in bir kopyasını al ve o kopyaya action ile gelen 
                //payload ı ekle
            }
    
        default:
            return state;
    }
}

//ilgili nesnenın referansını değiştirmemız gerekıyor.Referansını değiştirmediğimiz zaman state i 
//değiştirmemış kabul ediyor redux.