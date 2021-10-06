import * as actionTypes from "./actionTypes"


//increaseCounter bir fonskiyondur => fonksiyonun değeri{parametresi}
//fonksiyonun değeride fonksiyon
export const increaseCounter=()=>({
    type:actionTypes.INCREASE_COUNTER, //fonksiyonun action tipi
    payload:1
})
export const decreaseCounter=()=>({
    type:actionTypes.DECREASE_COUNTER, //fonksiyonun action tipi
    payload:1
})
export const increaseByTwoCounter=()=>({
    type:actionTypes.INCREASE_BY_TWO_COUNTER, //fonksiyonun action tipi
    payload:2
})