import React from 'react';
import classes from "./depcards.scss";

const DepCard = (props) => {
    return (
        <div className={`${classes.depcard} depcard`}>
            <div className={`${classes.card_heading} card_heading`}>
                <div>{props.depName}</div>
                <div className={`${classes.card_color} card_color`} style={{background:props.topColor}}></div>
            </div>
            <div className={`${classes.depInfo} depInfo`}>
                {props.depInfo}  
            </div>
        </div>
    );
}

export default DepCard;