import * as actionTypes from "../actions/actionTypes";

//counterReducer bir fonksiyon=fonksiyon değeri(state:action agöre state belirlenir,çağrılan actions)
// reducer çağırdıgım action ı içerip içermediğine bakacak.
const counterReducer = (state = 0, action) => {
  //statemizi kontrol ettiğimiz yer.Reducer ın içinde bir veritabanınıa bağlanılmaz!
  //Reducer ın içeriisnde tamamen basit state yönetimleri yapılır.
  let newState;
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return (newState = state + action.payload);

    case actionTypes.DECREASE_COUNTER:
      return (newState = state - action.payload);

      case actionTypes.INCREASE_BY_TWO_COUNTER:
        return (newState = state + action.payload);
        

    default:
      return state;
  }
};

export default counterReducer;

//JavaScript Immutability
//Reducer ın amacı state bilgisini döndürmektir.