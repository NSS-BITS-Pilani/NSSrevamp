import React from 'react';
import classes from "./ProfileCard.scss";

const ProfileCard = (props) => {
    return (
        <div className={`${classes.card} cardab`}>
            <div className="imageWrapper">
                <div>
                    <img src={props.imgurl || `assets/${props.imgPath}`} alt="propic" className={`${classes.card_image} card_image`} />
                    </div>
                </div>
                <div className={`${classes.card_info} card_info`}>
                <div className={`${classes.designation} designation`}>{props.designation}</div>
                <div className={`${classes.personName} personName`}>{props.personName}</div>

                <div style={{display:"flex", flexDirection: "column", justifyContent:"center"}}>
                    <div className={`${classes.liIcon} liIcon`}><a href={props.linkedin || "https://google.com"} target="_blank"><img src="assets/image 11.png" width="32px" alt="LI"></img></a></div>
                </div>
                </div>
        </div>
    );
}

export default ProfileCard;