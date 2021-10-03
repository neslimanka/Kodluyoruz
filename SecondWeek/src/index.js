import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'alertifyjs/build/css/alertify.min.css';
import {BrowserRouter} from 'react-router-dom';
import HomePage from './HomePage';




ReactDOM.render(<BrowserRouter><HomePage /></BrowserRouter>, document.getElementById('root'));


reportWebVitals();


// ReactDOM.render(
//   <React.StrictMode>
//     <App /> ---->hangi componentin ana component olduğunnu bize söylüyor. */
//   </React.StrictMode>,
//   document.getElementById('root')-->root a git App compoennt yapısını oldugu gibi entegre et
// );