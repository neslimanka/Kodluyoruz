import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
)


reportWebVitals();


// ReactDOM.render(
//   <React.StrictMode>
//     <App /> ---->hangi componentin ana component olduğunnu bize söylüyor. */
//   </React.StrictMode>,
//   document.getElementById('root')-->root a git App compoennt yapısını oldugu gibi entegre et
// );