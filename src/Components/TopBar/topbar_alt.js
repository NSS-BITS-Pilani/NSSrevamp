import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import classes from "./topbar_alt.scss";

const Topbar = () => {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="light" className={`${classes.navBarTop} navBarTop`}>
                <Navbar.Brand className={`${classes.brand} brand`}>
                    <div className={`${classes.logo} logo`} style={{ display: "flex", alignItems: "center"}}>
                        <div><img className={`${classes.nssLogo} nssLogo`} src="/assets/nss-logo-national-service-scheme 1.png" /></div>
                       <div style={{ display: "flex", alignItems: "center"}}>
                             <div className={`${classes.nss} nss`}>
                                NSS</div>
                            <div style={{display: "flex", flexDirection: "column", marginLeft: "0.2rem"}}>
                            <div className={`${classes.bits} bits`}>
                            BITS
                            </div>
                            <div className={`${classes.bits} bits`}>
                                    PILANI
                            </div>
                            </div>
                        </div>                
                        
                    </div>
                    
                </Navbar.Brand>
  <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    
    </Nav>
    <Nav className={`${classes.links_top} links_top`}>
                        <NavLink to={"/"} exact={true} className="top_link" activeClassName="active_top_link">Home</NavLink>
                        <NavLink to={"/aboutus"} className="top_link" activeClassName="active_top_link">About Us</NavLink>
                        <NavLink to={"/departments"} className="top_link" activeClassName="active_top_link">Departments</NavLink>
                      <NavLink to={"/events"} className="top_link" activeClassName="active_top_link">Events</NavLink>
                        <NavLink to={"/contacts"} className="top_link" activeClassName="active_top_link">Contacts</NavLink>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        
        </div>
    );
}

export default Topbar;