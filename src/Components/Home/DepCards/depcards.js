import React from 'react';
import classes from "./depcards.scss";

const DepCard = (props) => {
    return (
        <div className={`${classes.card} depcard`}>
            <div className={`${classes.card_heading} card_heading`}>{props.depName}</div>
            <div>
                {props.depInfo}  
            </div>
        </div>
    );
}

export default DepCard;