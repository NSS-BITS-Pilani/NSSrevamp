import React from 'react';
import classes from "./depcards.scss";
import { HashLink } from 'react-router-hash-link';



const DepCard = (props) => {

   
    return (
        <HashLink to={`/departments/${props.depName}#depTop`}>
            <div className={`${classes.depcard} depcard`}>
                <div className={`${classes.card_heading} card_heading`}>
                    <div>{props.depName}</div>
                    <div className={`${classes.card_color} card_color`} style={{background:props.topColor}}></div>
                </div>
                <div className={`${classes.depInfo} depInfo`}>
                    {props.depInfo}  
                </div>
            </div>
        </HashLink>
    );
}

export default DepCard;