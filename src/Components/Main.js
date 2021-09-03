import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"
import Aboutus from "./Aboutus/aboutus";
import Contacts from "./Contacts/contacts";
import Departments from "./Departments/departments";
import Home from "./Home/home.js";
import Events from "./Events/events_alt.js";
import Resources from './Resources/Resouces';
import TopBar from './TopBar/topbar_alt';

const Main = () => (
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
)
export default Main;