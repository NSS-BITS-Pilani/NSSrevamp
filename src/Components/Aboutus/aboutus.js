import React from 'react';
import classes from "./aboutus.scss";
import ProfileCard from './ProfileCard/ProfileCard';
import ShowMoreText from 'react-show-more-text';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import { useSelector} from 'react-redux';


import Footer from "../Footer/footer_alt";


const Aboutus = () => {

    const coords = useSelector((state) => state.coords);
    console.log(coords);
    function compare( a, b ) {
        if ( a.srno < b.srno ){
            return -1;
        }
        if ( a.srno > b.srno ){
            return 1;
        }
        return 0;
    }

    coords.sort( compare );

    return (
        <React.Fragment>
            <img className={`${classes.hiddenimage} hiddenimage`} style={{ position: "absolute", right: "85%", top: "6.5rem", zIndex: "-1" }} src="/assets/ellipse_blue.svg"></img>
            <img className={`${classes.hiddenimage} hiddenimage`} style={{ position: "absolute", right: "37.5%", top: "22rem", zIndex: "-1" }} src="/assets/ellipse_yellow.svg"></img>
            <img className={`${classes.hiddenimage} hiddenimage`} style={{ position: "absolute", right: "80%", top: "39rem", zIndex: "-1" }} src="/assets/magenta_blob.svg"></img>
            <img className={`${classes.hiddenimage} hiddenimage`} style={{ position: "absolute", right: "0%", top: "66rem", zIndex: "-1" }} src="/assets/blue_blob.svg"></img>
                
            <div className={`${classes.mainDivision} mainDivision`}>
                    <div className={`${classes.section_heading} section_heading`} id="top">About us</div>
                    <Fade>
                        <div className={`${classes.aboutTop} aboutTop`}>
                            <div className={`${classes.aboutSection} aboutSectionH`}>
                                <div className={`${classes.bullet} bullet`} style={{backgroundColor:"#2F80ED"}}>
                                    
                                </div>
                                <div className={`${classes.title} title`} style={{ color: "rgba(47, 128, 237, 1)" }}>
                                    Introduction
                                </div>
                            </div>
                            <div className={`${classes.aboutSectionI} aboutSectionI`}>
                                <div className={`${classes.aboutInfoGap} aboutInfoGap`}></div>
                                <div className={`${classes.aboutInfo} aboutInfo`}>
                                    <div className={`${classes.desktopInfo} desktopInfo`}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor dictum tincidunt lobortis nisi. Vitae turpis augue vitae tempor, tellus interdum aliquam imperdiet mi. Faucibus sit praesent phasellus tincidunt justo, quisque purus dignissim. Elementum imperdiet quis viverra malesuada mauris est. Malesuada dolor tristique nibh viverra penatibus suspendisse. Magna et elit sed amet, sit tortor tempus et. Velit vitae morbi proin at. Diam integer hac metus, at senectus ligula duis lectus. Blandit magna ut diam malesuada.
                                    </div>
                                    
                                    <ShowMoreText className={`${classes.mobInfo} mobInfo`} lines={5} anchorClass="anchor_class">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor dictum tincidunt lobortis nisi. Vitae turpis augue vitae tempor, tellus interdum aliquam imperdiet mi. Faucibus sit praesent phasellus tincidunt justo, quisque purus dignissim. Elementum imperdiet quis viverra malesuada mauris est. Malesuada dolor tristique nibh viverra penatibus suspendisse. Magna et elit sed amet, sit tortor tempus et. Velit vitae morbi proin at. Diam integer hac metus, at senectus ligula duis lectus. Blandit magna ut diam malesuada.
                                    </ShowMoreText>   
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade>
                        <div className={`${classes.aboutTop} aboutTop`}>
                            <div className={`${classes.aboutSection} aboutSectionH`}>
                                <div className={`${classes.bullet} bullet`} style={{backgroundColor:"#6FCF97"}}>
                                
                                </div>
                                <div className={`${classes.title} title`} style={{ color: "rgba(39, 174, 96, 1)"}}>
                                    Organisation
                                </div>
                            </div>
                            <div className={`${classes.aboutSectionI} aboutSectionI`}>
                                <div className={`${classes.aboutInfoGap} aboutInfoGap`}></div>
                                <div className={`${classes.aboutInfo} aboutInfo`}>
                                    <div className={`${classes.desktopInfo} desktopInfo`}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor dictum tincidunt lobortis nisi. Vitae turpis augue vitae tempor, tellus interdum aliquam imperdiet mi. Faucibus sit praesent phasellus tincidunt justo, quisque purus dignissim. Elementum imperdiet quis viverra malesuada mauris est. Malesuada dolor tristique nibh viverra penatibus suspendisse. Magna et elit sed amet, sit tortor tempus et. Velit vitae morbi proin at. Diam integer hac metus, at senectus ligula duis lectus. Blandit magna ut diam malesuada.
                                    </div>
                                        
                                    <ShowMoreText className={`${classes.mobInfo} mobInfo`} lines={5} anchorClass="anchor_class">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor dictum tincidunt lobortis nisi. Vitae turpis augue vitae tempor, tellus interdum aliquam imperdiet mi. Faucibus sit praesent phasellus tincidunt justo, quisque purus dignissim. Elementum imperdiet quis viverra malesuada mauris est. Malesuada dolor tristique nibh viverra penatibus suspendisse. Magna et elit sed amet, sit tortor tempus et. Velit vitae morbi proin at. Diam integer hac metus, at senectus ligula duis lectus. Blandit magna ut diam malesuada.
                                    </ShowMoreText>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade>
                        <div className={`${classes.aboutTop} aboutTop`}>
                            <div className={`${classes.aboutSection} aboutSectionH`}>
                                <div className={`${classes.bullet} bullet`} style={{backgroundColor:"#F857A6"}}>
                        
                                </div>
                                <div className={`${classes.title} title`} style={{ color: "rgba(248, 87, 166, 1)"}}>
                                    Nature of work
                                </div>
                            </div>
                            <div className={`${classes.aboutSectionI} aboutSectionI`}>
                                <div className={`${classes.aboutInfoGap} aboutInfoGap`}></div>
                                <div className={`${classes.aboutInfo} aboutInfo`}>
                                    <div className={`${classes.desktopInfo} desktopInfo`}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor dictum tincidunt lobortis nisi. Vitae turpis augue vitae tempor, tellus interdum aliquam imperdiet mi. Faucibus sit praesent phasellus tincidunt justo, quisque purus dignissim. Elementum imperdiet quis viverra malesuada mauris est. Malesuada dolor tristique nibh viverra penatibus suspendisse. Magna et elit sed amet, sit tortor tempus et. Velit vitae morbi proin at. Diam integer hac metus, at senectus ligula duis lectus. Blandit magna ut diam malesuada.
                                    </div>
                                        
                                    <ShowMoreText className={`${classes.mobInfo} mobInfo`} lines={5} anchorClass="anchor_class">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor dictum tincidunt lobortis nisi. Vitae turpis augue vitae tempor, tellus interdum aliquam imperdiet mi. Faucibus sit praesent phasellus tincidunt justo, quisque purus dignissim. Elementum imperdiet quis viverra malesuada mauris est. Malesuada dolor tristique nibh viverra penatibus suspendisse. Magna et elit sed amet, sit tortor tempus et. Velit vitae morbi proin at. Diam integer hac metus, at senectus ligula duis lectus. Blandit magna ut diam malesuada.
                                    </ShowMoreText>
                                </div>
                            </div>
                        </div>
                    </Fade>
                <Fade>            
            <div className={`${classes.section_heading} section_heading`} style={{marginTop:"5rem", marginBottom:"2rem"}} id="mid">Our Team</div>

                <div className={`${classes.team_heading} team_heading`}>

            <div className={`${classes.blue_bullet} blue_bullet`}></div>
                Faculty Coordinator
            </div>

                    
            <div className={`${classes.profileCards} profileCards`}>
                <ProfileCard
                    imgPath="ProfilePic.png"
                    designation="Faculty Coordinator"
                    personName="Ashish Tiwari"
                        />
                    
                    </div>
                    <div className="mobCardsab">
                    <Slide left>
                    
                            <ProfileCard imgPath="ProfilePic.png" designation="Faculty Coordinator" personName="Ashish Tiwari" />
    </Slide>
                    </div>

                <div className={`${classes.team_heading} team_heading`}>
                    <div className={`${classes.blue_bullet} blue_bullet`}></div>
                Proffesors Incharge
            </div>

                    
            <div className={`${classes.profileCards} profileCards`}>
                <ProfileCard imgPath="ProfilePic.png" designation="Faculty Coordinator" personName="Ashish Tiwari" />
                <ProfileCard imgPath="ProfilePic.png" designation="Faculty Coordinator" personName="Ashish Tiwari" />
                <ProfileCard imgPath="ProfilePic.png" designation="Faculty Coordinator" personName="Ashish Tiwari" />
                        </div>
                    
                        
                    <div className="mobCardsab">
                    <Slide left>
                
                                    <ProfileCard imgPath="ProfilePic.png" designation="Faculty Coordinator" personName="Ashish Tiwari" />
                <ProfileCard imgPath="ProfilePic.png" designation="Faculty Coordinator" personName="Ashish Tiwari" />
                <ProfileCard imgPath="ProfilePic.png" designation="Faculty Coordinator" personName="Ashish Tiwari" />
</Slide>
                    </div>
                        
                </Fade>
                <Fade>
                <div className={`${classes.team_heading} team_heading`}>
                    <div className={`${classes.blue_bullet} blue_bullet`}></div>
                Leaderships
            </div>
            
            <div className={`${classes.profileCards} profileCards`}>
                <ProfileCard imgPath="ProfilePic.png" designation="Faculty Coordinator" personName="Ashish Tiwari" />
                <ProfileCard imgPath="ProfilePic.png" designation="Faculty Coordinator" personName="Ashish Tiwari" />
                        <ProfileCard imgPath="ProfilePic.png" designation="Faculty Coordinator" personName="Ashish Tiwari" />
                        
            </div>
<div className="mobCardsab">
<Slide left>

                                    <ProfileCard imgPath="ProfilePic.png" designation="Faculty Coordinator" personName="Ashish Tiwari" />
                <ProfileCard imgPath="ProfilePic.png" designation="Faculty Coordinator" personName="Ashish Tiwari" />
                <ProfileCard imgPath="ProfilePic.png" designation="Faculty Coordinator" personName="Ashish Tiwari" />
</Slide>
                    </div>                    
                <div className={`${classes.team_heading} team_heading`}>
                    <div className={`${classes.blue_bullet} blue_bullet`}></div>
                Coordinators
            </div>
            
                    <div className={`${classes.profileCards} profileCards`}>
                        {coords.map(coord => 
                            <ProfileCard imgPath="ProfilePic.png" imgurl={coord.imgurl} designation={coord.designation} personName={coord.name} linkedin={coord.linkedin} />
                        )}
                    </div>
<div className="mobCardsab">
<Slide left>

                {coords.map(coord => 
                            <ProfileCard imgPath="ProfilePic.png" imgurl={coord.imgurl} designation={coord.designation} personName={coord.name} linkedin={coord.linkedin} />
                        )}
</Slide>
                    </div>            
            </Fade>
            </div>
                <Fade>
                    <Footer></Footer>
                    </Fade>
        </React.Fragment>
    );
}

export default Aboutus;