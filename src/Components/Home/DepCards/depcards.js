import React from 'react';
import classes from "./depcards.scss";
import { NavLink} from 'react-router-dom';

const DepCard = (props) => {

   
    return (
        <NavLink to={props.depName === 'Events' ? "/events" : `/departments/${props.depName}`}>
        <div className={`${classes.depcard} depcard`}>
            <div className={`${classes.card_heading} card_heading`}>
                <div>{props.depName}</div>
                <div className={`${classes.card_color} card_color`} style={{background:props.topColor}}></div>
            </div>
            <div className={`${classes.depInfo} depInfo`}>
                {props.depInfo}  
            </div>
            </div>
        </NavLink>
    );
}

export default DepCard;