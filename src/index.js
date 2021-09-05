import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/Times New Roman/times_new_roman.ttf';
import { Provider } from 'react-redux';
import { ConfigureStore } from "./State/store";
import App from "./App";
import GA4React from "ga-4-react";

const store = ConfigureStore();

try {
  setTimeout(_ => {
    const ga4react = new GA4React("G-RLYDJ0CZJR");
    ga4react.initialize();
  }, 3000);
} catch (err) {}


ReactDOM.render(<Provider store = {store}><App/></Provider>, document.querySelector('#root'));
