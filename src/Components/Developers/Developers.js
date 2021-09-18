import './Developers.scss';
import { NavLink } from 'react-router-dom';

const Developers = () => (
    <div>
        <img style={{ position: "absolute", right: "75%", top: "9.5rem", zIndex: "-1" }} src="/assets/ellipse_yellow.svg"></img>
            <img style={{ position: "absolute", right: "0%", top: "12rem", zIndex: "-1" }} src="/assets/blue_blob.svg"></img>
        <div className="devHead">
            <h1>Meet the developers</h1>
        </div>
        <div className="devContainer">
            <div className="devCard">
                <div className="content">
                    <div className="imgBx"><img src="assets/ProfilePic.png"></img></div>
                    <div className="contentBx">
                    <h3>Manan Agarwal<br></br><span>Frontend Developer</span></h3>
                    </div>
                </div>
                <ul className="sci">
                    <li>
                        <a href="#"><img src="assets/GitLogo.png" width="32px"></img></a>
                    </li>
                    <li>
                        <a href="#"><img src="assets/image 11.png" width="32px"></img></a>
                    </li>
                </ul>
            </div>

            <div className="devCard">
                <div className="content">
                    <div className="imgBx"><img src="assets/ProfilePic.png" width="250px"></img></div>
                    <div className="contentBx">
                    <h3>Akshat Garg<br></br><span>Backend Developer</span></h3>
                    </div>
                </div>
                <ul className="sci">
                    <li>
                        <a href="#"><img src="assets/GitLogo.png" width="32px"></img></a>
                    </li>
                    <li>
                        <a href="#"><img src="assets/image 11.png" width="32px"></img></a>
                    </li>
                </ul>
            </div>

            <div className="devCard">
                <div className="content">
                    <div className="imgBx"><img src="assets/ProfilePic.png" width="250px"></img></div>
                    <div className="contentBx">
                    <h3>Nachiket Kotalwar<br></br><span>Frontend Developer</span></h3>
                    </div>
                </div>
                <ul className="sci">
                    <li>
                        <a href="#"><img src="assets/GitLogo.png" width="32px"></img></a>
                    </li>
                    <li>
                        <a href="#"><img src="assets/image 11.png" width="32px"></img></a>
                    </li>
                </ul>
            </div>

            <div className="devCard">
                <div className="content">
                    <div className="imgBx"><img src="assets/ProfilePic.png" width="250px"></img></div>
                    <div className="contentBx">
                    <h3>Aman Kumar Shukla<br></br><span>Frontend Developer</span></h3>
                    </div>
                </div>
                <ul className="sci">
                    <li>
                        <a href="#"><img src="assets/GitLogo.png" width="32px"></img></a>
                    </li>
                    <li>
                        <a href="#"><img src="assets/image 11.png" width="32px"></img></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default Developers;