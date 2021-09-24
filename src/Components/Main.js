import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"
import Aboutus from "./Aboutus/aboutus";
import Contacts from "./Contacts/contacts";
import Departments from "./Departments/departments";
import Home from "./Home/home.js";
import Events from "./Events/events.js";
import Resources from './Resources/Resouces';
import TopBar from './TopBar/topbar';
import Developers from './Developers/Developers';
import Error_404 from './Error_404/Error_404';
import ScrollToTop from './ScrollToTop';

const Main = () => (
    <ChakraProvider>
    <BrowserRouter>
    <ScrollToTop />
    <TopBar />
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutus" component={Aboutus} />
        <Route path="/departments/:id?" component={Departments} />
        <Route path="/events/:id?" component={Events} />
        <Route path="/contactus" component={Contacts} />
        <Route path="/contactus#" component={Contacts} />
        <Route path="/resources" component={Resources} />
        <Route path="/developers" component={Developers} />
      <Route path="*" component={Error_404} />
    </Switch>
    </BrowserRouter>
    </ChakraProvider>
)
export default Main;