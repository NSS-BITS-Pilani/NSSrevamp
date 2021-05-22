import React from 'react';
import classes from "./depcards.scss";

const DepCard = (props) => {
    return (
        <div className={`${classes.depcard} depcard`}>
            <div style={{background:props.topColor}} className={`${classes.card_heading} card_heading`}>
                <div className={`${classes.card_color} card_color`}>
                    <div>{props.depName}</div>
                </div>
                
            </div>
            <div className={`${classes.depInfo} depInfo`}>
                {props.depInfo}  
            </div>
        </div>
    );
}

export default DepCard;