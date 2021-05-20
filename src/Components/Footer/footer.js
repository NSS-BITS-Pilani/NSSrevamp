import React from 'react';
import classes from "./footer.scss";

const footer = () => {
    return (
        <div className={`${classes.footer} footer`}>
            <div className="follow">
                Follow us on
            </div>
            <div className="mediaContainer">
                <div className="socialMedia">
                    
                </div>
            </div>
            <div className="impLinks">
                <div>
                    <div className="heading">
                        nss bits pilani
                    </div>
                    <ul>
                        <li>
                            <a href="#" target="_blank">About us</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">Meet the team</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">Contact us</a>
                        </li>
                    </ul>                    
                </div>
                <div>
                    <div className="heading">
                        departments
                    </div>
                    <ul>
                        <li>
                            <a href="#" target="_blank">School</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">Computer Literacy Programme</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">Health and Public Awareness</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">Umang</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">Team Events</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">Parishodh</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">English and Personality Development</a>
                        </li>  
                    </ul>                    
                </div>
                <div>
                    <div className="heading">
                        events
                    </div>
                    <ul>
                        <li>
                            <a href="#" target="_blank">Junoon</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">Blood Donation Camp</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">Shop For A Smile</a>
                        </li>
                    </ul>                    
                </div>
                <div>
                    <div className="heading">
                        our partners
                    </div>
                    <ul>
                        <li>
                            <a href="#" target="_blank">BITSAA</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">World Wildlife Fund</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">Disha Foundation</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">Deepalaya</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">Tender Heart</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">Umang Jaipur</a>
                        </li>
                    </ul>                    
                </div>
            </div>
        </div>
    )
}

export default footer;