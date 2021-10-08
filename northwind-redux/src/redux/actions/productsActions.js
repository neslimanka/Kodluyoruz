import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}
export function createProductSuccess(product) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, product };
}
export function updateProductSuccess(product) {
  return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, product };
}
export function saveProductApi(product) {
  //-->post işlemi-update
  //id gönderilmişsse güncelleme yap
  return fetch("http://localhost:3000/products/" + (product.id || ""), {
    method: product.id ? "PUT" : "POST", //--> eğer product.id varsa bu bir put request yoksa post
    headers: { "content-type": "application/json" },
    body: JSON.stringify(product), //--> body  bir post veya put yaptıgımızda url adresıne gönderdiğmiz data
  })
    .then(handleResponse)
    .catch(handleError);
}
export function saveProduct(product){
    return function(dispatch){//-->action u devreye sokuyor
      return saveProductApi(product)//-->veritabanına saveProductApi yap dedim.yaptıktan sonra..
      .then(savedProduct=>{ //-->yaptıktan sonra benım reduxıma yeni eklenen productımı söyle
          product.id?dispatch(updateProductSuccess(savedProduct))
          :dispatch(createProductSuccess(savedProduct))
          //

      }).catch(error=>{
          throw error;
      })
    }
}
export async function handleResponse(response){
    if(response.ok){
        return response.json()
    }
    const error=await response.text()
    throw new Error(error) 
}

export function handleError(error){
    console.log("Bir hata oluştu")
    throw console.error();
}
export function getProducts(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then((response) => response.json()) //her then bir önceki then in çıkardığı sonuçla ilgilenir!
      .then((result) => dispatch(getProductsSuccess(result)));
  };
}
