import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Slide from 'react-reveal/Slide';

import classes from "./topbar.scss";

const Topbar = () => {

    return (
        <Slide down>
            <nav>
                <Navbar collapseOnSelect expand="lg" variant="light" className={`${classes.navBarTop} navBarTop`}>
                    <Navbar.Brand className={`${classes.brand} brand`}>
                        <NavLink to={"/"} exact={true}>
                            <div className={`${classes.logo} logo`} style={{ display: "flex", alignItems: "center" }}>
                            
                                <div><img className={`${classes.nssLogo} nssLogo`} src="/assets/nss_84.png" /></div>
                                <div style={{ display: "flex", alignItems: "center"}}>
                                    <div className={`${classes.nss} nss`}>
                                        NSS
                                    </div>
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
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        
                        </Nav>
                        <Nav className={`${classes.links_top} links_top`}>
                            <NavLink to={"/"} exact={true} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">Home</NavLink>
                            <NavLink to={"/aboutus"} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">About Us</NavLink>
                            <NavLink to={"/departments"} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">Departments</NavLink>
                            <NavLink to={"/events"} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">Events</NavLink>
                            <NavLink to={"/resources"} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">Resources</NavLink>
                            <NavLink to={"/uc"} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">Umang Collection</NavLink>
                            <NavLink to={"/contactus"} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">Contact Us</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </nav>
        </Slide>
    );
}

export default Topbar;