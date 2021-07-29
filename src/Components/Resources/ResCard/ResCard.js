import React from 'react';
import styles from "./ResCard.scss";

import LightSpeed from 'react-reveal/LightSpeed';


const ResCard = (props) => {

    return (
        <LightSpeed left>
        <div className="resCardCon">
            <div className="info">
                <div className="head">
                    Education    
                </div>
                <div className="infotext">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                </div>
            </div>
            <div className="linkslist">
                {props.links.map((link) =>
                    <div className="fancylink">
                        <div className="linktitle">{link.title}</div>
                        <div className="goimg"></div>
                    </div>
                )}
            </div>
            </div>
            </LightSpeed>
    );
}

export default ResCard;