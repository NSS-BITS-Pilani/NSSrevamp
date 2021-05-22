import React from 'react';
import classes from "./ProfileCard.scss";

const ProfileCard = (props) => {
    return (
        <div className={`${classes.card} card`}>
            <img src={`assets/${props.imgPath}`} alt="propic" className={`${classes.card_image} card_image`}/>
                <div className={`${classes.card_info} card_info`}>
                <div className={`${classes.designation} designation`}>{props.designation}</div>
                <div className={`${classes.personName} personName`}>{props.personName}</div>
    
                <div className={`${classes.liIcon} liIcon`}><img src="assets/image 11.png" width="32px" alt="LI"></img></div>
                </div>
        </div>
    );
}

export default ProfileCard;