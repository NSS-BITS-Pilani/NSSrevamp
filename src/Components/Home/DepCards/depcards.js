import React from 'react';
import classes from "./depcards.scss";

const DepCard = (props) => {
    return (
        <div className={`${classes.depcard} depcard`}>
            <div className={`${classes.card_heading} card_heading`}>
                <div className={`${classes.card_color} card_color`}>
                    <div>{props.depName}</div>
                </div>
                
            </div>
            <div>
                {props.depInfo}  
            </div>
        </div>
    );
}

export default DepCard;