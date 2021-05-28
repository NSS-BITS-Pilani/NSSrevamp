import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "./App.scss";

import Aboutus from "./Components/Aboutus/aboutus";
import Contacts from "./Components/Contacts/contacts";
import Departments from "./Components/Departments/departments.js";
import Home from "./Components/Home/home.js";
import Events from "./Components/Events/events.js";

import TopBar from './Components/TopBar/topbar_alt';
import Footer from './Components/Footer/footer_alt';

const App = () => (
  <Router>
      <TopBar />
      <Route path="/aboutus" exact component={Aboutus} />
      <Route path="/departments" exact component={Departments} />
      <Route path="/events" exact component={Events} />
      <Route path="/contacts" exact component={Contacts} />
      <Route path="/" exact component={Home} />
      <Footer />
    </Router>
);

export default App;