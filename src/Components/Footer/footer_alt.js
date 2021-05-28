import React from 'react';
import classes from "./footer_alt.scss";

const footer_alt = () => {
    return (
        <footer class="ct-footer">
            
            <div className={`${classes.follow} follow`}>
                Follow us on
            </div>
            <div className={`${classes.mediaContainer} mediaContainer`}>
                <div className={`${classes.socialMedia} socialMedia`}>
                    <a href="#" target="_blank"><img src="/assets/image 11.png" /></a>
                    <a href="#" target="_blank"><img src="/assets/image 9.png" /></a>
                    <a href="#" target="_blank"><img src="/assets/image 10.png" /></a>
                    <a href="#" target="_blank"><img src="/assets/image 12.png" /></a>
                    <a href="#" target="_blank"><img src="/assets/image 13.png" /></a>
                </div>
            </div>
            
            
            <div class="alt_container">
                <ul class="ct-footer-list text_center">
                    <li>
                        <h2 class="ct-footer-list-header">NSS BITS PILANI</h2>
                        <ul>
                            <li style={{marginTop:"1rem"}}>
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <a href="#">Meet the team</a>
                            </li>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2 class="ct-footer-list-header">DEPARTMENTS</h2>
                        <ul>
                            <li style={{marginTop:"1rem"}}>
                                <a href="#">School</a>
                            </li>
                            <li>
                                <a href="#">Computer Literacy Programme</a>
                            </li>
                            <li>
                                <a href="#">Health and Public Awareness</a>
                            </li>
                            <li>
                                <a href="#">Umang</a>
                            </li>
                            <li>
                                <a href="#">Team Events</a>
                            </li>
                            <li>
                                <a href="#">Parishod</a>
                            </li>
                            <li>
                                <a href="#">English and Personality Development</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2 class="ct-footer-list-header">EVENTS</h2>
                        <ul>
                            <li style={{marginTop:"1rem"}}>
                                <a href="#">Junoon</a>
                            </li>
                            <li>
                               <a href="#">Blood Donation Camp</a>
                            </li>
                            <li>
                                <a href="#">Shop For A Smile</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2 class="ct-footer-list-header">OUR PARTNERS</h2>
                        <ul>
                            <li style={{marginTop:"1rem"}}>
                                <a href="#">BITSAA</a>
                            </li>
                            <li>
                                <a href="#">World Wildlife Fund</a>
                            </li>
                            <li>
                                <a href="#">Disha Foundation</a>
                            </li>
                            <li>
                                <a href="#">Deepaiaya</a>
                            </li>
                            <li>
                                <a href="#">Tender Heart</a>
                            </li>
                            <li>
                                <a href="#">Umang Jaipur</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="ct-footer-post">
                
                <div class="alt_container" style={{marginBottom:"4rem"}}>
                    <div class="inner-right">
                            <ul>
                                <li>
                                    <a href="">Facebook</a>
                                </li>
                                <li>
                                    <a href="">Instagram</a>
                                </li>
                                <li>
                                    <a href="">LinkedIn</a>
                                </li>
                                <li>
                                    <a href="">Twitter</a>
                                </li>
                            </ul>
                    </div>
                    <div class="inner-left">
                        <p>
                            © 2021 NSS BITS PILANI. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer_alt;