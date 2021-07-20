import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/Times New Roman/times_new_roman.ttf';
import { Provider } from 'react-redux';
import { store } from "./State/store";
import Loader from "./Components/Loader/loader";

ReactDOM.render(<Provider store = {store}><Loader/></Provider>, document.querySelector('#root'));
