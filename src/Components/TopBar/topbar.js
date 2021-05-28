import React, {useState} from 'react';
import classes from "./topbar.scss";
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

const Topbar = () => {

    const [showDrawer, setShowDrawer] = useState(false);

    const links =
    
        <React.Fragment>
    
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
    
        </React.Fragment>
    const navBtn = 
        <React.Fragment>
            <button onClick="">
                <NavLink to={"/"}>Home</NavLink>
            </button>
            <button onClick="">
                <NavLink to={"/aboutus"}>About Us</NavLink>
            </button>
            <button onClick="">
                <NavLink to={"/departments"}>Departments</NavLink>
            </button> 
            <button onClick="">
                <NavLink to={"/events"}>Events</NavLink>
            </button> 
            <button onClick="">
                <NavLink to={"/contacts"}>Contacts</NavLink>
            </button>
        </React.Fragment>

    return (
        <div className={`${classes.bar} bar`}>
            <div className={`${classes.component1} component1`}>
                <div className={`${classes.logo} logo`}>
                    <img className={`${classes.nssLogo} nssLogo`} src="/assets/nss-logo-national-service-scheme 1.png" />
                
                    <div className={`${classes.nss} nss`}>
                        NSS
                    </div>
                    <div className={`${classes.bits} bits`}>
                        BITS PILANI
                    </div>
                </div>
            </div>
            <div className={`${classes.component2} component2`}>
                {links}
            </div>

            <div className={`${classes.toggle} toggle`} onClick={() => {setShowDrawer(!showDrawer)} }>
                <FiMenu className={`${classes.FiMenu} FiMenu`}/>
            </div>

            <div className={`${classes.Barlinks} Barlinks`}>
                {showDrawer && <button className={`${classes.closeBtn} closeBtn`} onClick={() => { setShowDrawer(!showDrawer) }}><AiOutlineClose /></button>}
                {showDrawer && navBtn}
            </div>
        </div>
    );
}

export default Topbar;