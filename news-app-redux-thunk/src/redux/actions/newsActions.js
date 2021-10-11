import * as actionTypes from "./actionTypes";

export function getNewsSuccess(news) {
  return { type: actionTypes.GET_NEWS_SUCCESS, payload: news };
}


export function getNews(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3000/news";
    if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then((response) => response.json()) //her then bir önceki then in çıkardığı sonuçla ilgilenir!
      .then((result) => dispatch(getNewsSuccess(result)));
  };
}