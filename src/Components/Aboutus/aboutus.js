import React from 'react';
import classes from "./aboutus.scss";
import ProfileCard from './ProfileCard/ProfileCard';
import ShowMoreText from 'react-show-more-text';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import { useSelector} from 'react-redux';


import Footer from "../Footer/footer";


const Aboutus = () => {

    const coords = useSelector((state) => state.coords);
    //console.log(coords);
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
                                        <p>
                                            Founded in 1964, BITS Pilani is a recognized university based on the late founder G.D. Birla, leading the community to the prosperity of emerging India. NSS BITS Pilani was founded in 1969 and developed with the same vision. Since then, it has been working hard to realize the vision of an advanced and self-sufficient community, actively contributing to the progress of the entire country. 
                                        </p>
                                        <br />
                                        <p>
                                            NSS BITS Pilani is composed of enthusiastic volunteers, under the guidance of respected teachers, who always keep in mind comprehensive and sustainable models for development. In addition to the main goals of community development, NSS also aims to inculcate service values ​​in students, and ultimately make them serious and responsible citizens dedicated to improving the country and the world. 
                                        </p>
                                        <br />
                                        <p>
                                            Our unremitting efforts are not only aimed at giving underdeveloped and oppressed people a chance to live a better life but also through our various campus-wide initiatives, such as clean-up activities, we also ensure that the development of the community does not remain incomplete. Our commitment towards excellence is complete and with each passing day, the resolve only goes stronger as can be seen through the diversification taking place while also ensuring that the basic aims and thoughts are not lost in the process.
                                        </p>
                                    </div>
                                    
                                    <ShowMoreText className={`${classes.mobInfo} mobInfo`} lines={5} anchorClass="anchor_class">
                                        Founded in 1964, BITS Pilani is a recognized university based on the late founder G.D. Birla, leading the community to the prosperity of emerging India. NSS BITS Pilani was founded in 1969 and developed with the same vision. Since then, it has been working hard to realize the vision of an advanced and self-sufficient community, actively contributing to the progress of the entire country.
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
                                        <p>
                                            NSS Bits Pilani has been in existence for more than 50 years and consists of more than 200 active volunteers guided by esteemed professors who have always kept in mind comprehensive and sustainable models for development. Along with the principal aim of community growth, NSS also aims to teach the values of service amongst the students, eventually making them aware and responsible citizens dedicated to improving the country and the world.
                                        </p>
                                    </div>
                                        
                                    <ShowMoreText className={`${classes.mobInfo} mobInfo`} lines={5} anchorClass="anchor_class">
                                        <p>
                                            NSS Bits Pilani has been in existence for more than 50 years and consists of more than 200 active volunteers guided by esteemed professors who have always kept in mind comprehensive and sustainable models for development.
                                        </p>
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
                                        <p>
                                            NSS BITS Pilani is the largest student volunteer body on the campus. It is extremely active and persevering in the field of social/community service.
                                        </p>
                                        <br />
                                        <p>
                                            Spreading happiness through community service has been one of the primary objectives of NSS. With innovative activities across the departments catering to all classes of the campus residents, we try to create small, happy, and memorable moments in their lives. We aim to bring about a positive change in the society with our focus on Education and Development.
                                        </p>
                                    </div>
                                        
                                    <ShowMoreText className={`${classes.mobInfo} mobInfo`} lines={5} anchorClass="anchor_class">
                                        <p>
                                            NSS BITS Pilani is the largest student volunteer body on the campus. It is extremely active and persevering in the field of social/community service.
                                        </p>
                                        <br />
                                        <p>
                                            Spreading happiness through community service has been one of the primary objectives of NSS. With innovative activities across the departments catering to all classes of the campus residents, 
                                        </p>
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
                            bits="assets/bits_logo.png"
                            linkedin="https://www.bits-pilani.ac.in/pilani/ashishtiwari/profile"
                        />
                    
                    </div>
                    <div className="mobCardsab">
                    <Slide left>
                    
                            <ProfileCard imgPath="ProfilePic.png" designation="Faculty Coordinator" linkedin="https://www.bits-pilani.ac.in/pilani/ashishtiwari/profile" personName="Ashish Tiwari" bits="assets/bits_logo.png" />
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
        
                <div className={`${classes.team_heading} team_heading`}>
                    <div className={`${classes.blue_bullet} blue_bullet`}></div>
                        {/*Leaderships
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
                <div className={`${classes.blue_bullet} blue_bullet`}></div> */}
                Core Team
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
            
            </div>
                <Fade>
                    <Footer></Footer>
                    </Fade>
        </React.Fragment>
    );
}

export default Aboutus;