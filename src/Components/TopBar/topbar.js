import React from 'react';
import classes from "./topbar.scss";
import { NavLink } from 'react-router-dom';

const topbar = () => {
    return (
        <div className={`${classes.bar} bar`}>
            <div className="component1">
                <div className="nssLogo">
                    <img src="/assets/nss-logo-national-service-scheme 1.png" />
                </div>
            </div>
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
    )
}

export default topbar;