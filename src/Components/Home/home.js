import React from 'react';
import classes from "./home.scss";

const home = () => {
    return (
        <div>
            
            <div className="initiatives">
                <div className="section_heading">Our initiatives</div>
                <div className="cards">
                <div className="card">
                    <img src="/assets/home_initiatives.png" alt="Initiative" className="card_image"/>
                    <div className="card_info">
                        <div className="event">Events</div>
                        <div className="event_heading">Junoon</div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra.
                        <div className="view_more">View More</div>
                    </div>
                </div>

                <div className="card">
                    <img src="/assets/home_initiatives.png" alt="Initiative" className="card_image"/>
                    <div className="card_info">
                        <div className="event">Events</div>
                        <div className="event_heading">Junoon</div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra.
                        <div className="view_more">View More</div>
                    </div>
                </div>

                <div className="card">
                    <img src="/assets/home_initiatives.png" alt="Initiative" className="card_image"/>
                    <div className="card_info">
                        <div className="event">Events</div>
                        <div className="event_heading">Junoon</div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra.
                        <div className="view_more">View More</div>
                    </div>
                </div>
    
                </div>
              <div className="button_div">
                    <span className="button">View More</span>
                </div>
            </div>
        </div>
    );
}

export default home;