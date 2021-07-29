import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "./App.scss";
import { ChakraProvider } from "@chakra-ui/react"
import Aboutus from "./Components/Aboutus/aboutus";
import Contacts from "./Components/Contacts/contacts";
import Departments from "./Components/Departments/departments";
import Home from "./Components/Home/home.js";
import Events from "./Components/Events/events_alt.js";
import Resources from './Components/Resources/Resouces';
import TopBar from './Components/TopBar/topbar_alt';

const App = () => (
  <ChakraProvider>
  <Router>
      <TopBar />
      <Route path="/aboutus" component={Aboutus} />
      <Route path="/departments/:id?" component={Departments} />
      <Route path="/events/:id?" component={Events} />
      <Route path="/contactus" component={Contacts} />
      <Route path="/contactus#" component={Contacts} />
      <Route path="/resources" component={Resources} />
      <Route path="/" exact component={Home} />
    </Router>
    </ChakraProvider>
);

export default App;