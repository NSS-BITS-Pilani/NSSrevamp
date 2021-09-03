import {BrowserRouter as Router, Route} from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"
import Aboutus from "./Aboutus/aboutus";
import Contacts from "./Contacts/contacts";
import Departments from "./Departments/departments";
import Home from "./Home/home.js";
import Events from "./Events/events.js";
import Resources from './Resources/Resouces';
import TopBar from './TopBar/topbar';
import Error_404 from './Error_404/Error_404';

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
      <Route path="/error_404" component={Error_404} />
    </Router>
  </ChakraProvider>
)
export default Main;