import React from 'react';
import "./mobCard.scss";


const MobCard = (props) => {

    return (
        <div className="mobCardWrapper">
            <div className="mobCardDEE" style={{background:props.color}}>
                
                <div className="mobCardimg">
                    <img src={props.img} align="center" style={{width:"100%", maxHeight:"170px"}}></img>
                </div>

                <div className="titleDE">
                    <div lassname="title_text">{props.title}</div>
                </div>

                <div className="cardBottom" onClick={props.click}>
                    <div className="viewDeets">View details</div>
                    <div className="nextIcon"><img src="assets/next.svg" /></div>
                </div>
            
            </div>
        </div>
    );
}

export default MobCard;