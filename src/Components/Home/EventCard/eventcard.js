import React from 'react';
import classes from "./eventcard.scss";

const EventCard = (props) => {
    return (
        <div className={`${classes.card} card`}>
            <img src={`assets/${props.imgPath}`} alt="Initiative" className={`${classes.card_image} card_image`}/>
                <div className={`${classes.card_info} card_info`}>
                    <div className={`${classes.event} event`}>Events</div>
                <div className={`${classes.event_heading} event_heading`}>{props.eventName}</div>
                    <span style={{fontSize:"0.725rem"}}>{props.eventInfo}</span>
                <div className={`${classes.view_more} view_more`}>View More</div>
                </div>
        </div>
    );
}

export default EventCard;