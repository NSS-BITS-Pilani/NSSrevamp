import React from 'react';
import classes from "./topbar.scss";
import { NavLink } from 'react-router-dom';

const topbar = () => {
    return (
        <div className={`${classes.bar} bar`}>
            <div className={`${classes.component1} component1`}>
                <div className={`${classes.logo} logo`}>
                    <div className={`${classes.nssLogo} nssLogo`}>
                        <img src="/assets/nss-logo-national-service-scheme 1.png" />
                    </div>
                    <div className={`${classes.nss} nss`}>
                        NSS
                    </div>
                    <div className={`${classes.bits} bits`}>
                        BITS PILANI
                    </div>
                </div>
            </div>
            <div className={`${classes.component2} component2`}>
                <NavLink to={"/"} className={`${classes.NavLink} NavLink`}>
                    Home
                </NavLink>

                <NavLink to={"/aboutus"} className={`${classes.NavLink} NavLink`}>
                    About Us
                </NavLink>

                <NavLink to={"/departments"} className={`${classes.NavLink} NavLink`}>
                    Departments
                </NavLink>

                <NavLink to={"/events"} className={`${classes.NavLink} NavLink`}>
                    Events
                </NavLink>

                <NavLink to={"/contacts"} className={`${classes.NavLink} NavLink`}>
                    Contacts
                </NavLink>
            </div>
        </div>
    );
}

export default topbar;