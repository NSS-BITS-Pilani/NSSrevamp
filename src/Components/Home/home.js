import React, { useState } from 'react';

import Footer from "../Footer/footer_alt";
    
import EventCard from './EventCard/eventcard';
import DepCard from './DepCards/depcards';

import Carousel from './Carousel/carousel';
import HeroCarousel from './HeroCarousel/HeroCarousel';
import classes from "./home.scss";
import { NavLink } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Select } from "@chakra-ui/react"



import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import { useSelector} from 'react-redux';


const Home = () => {
    
    const dataArray = useSelector((state) => state.initiatives);
    let topInitiatives = [];
    const initiatives = dataArray;
    if (dataArray.length <= 3) {
       topInitiatives = dataArray;
    } else {
        topInitiatives = dataArray.slice(0,3);
    }

    const renderEvents = () => {
        if (!eventsExpanded) {
            return topInitiatives.map((event) => <EventCard eventName={event.title} eventInfo={event.information} imgPath={event.imageurl} eventType={event.eventType}/>);
        }
        return initiatives.map((event) => <EventCard eventName={event.title} eventInfo={event.information} imgPath={event.imageurl} eventType={event.eventType}/>);
    }

    const [eventsExpanded, setEventsExpanded] = useState(false);
    
    const [currentDepartment, setCurrentDepartment] = useState("CLP");

    const depInfoArray = useSelector((state) => state.departments);

    const departments = [
        { depName: "CLP", depInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit malesuada fames facilisis commodo, dui. Lorem ut suspendisse nec mauris consectetur ornare. Suspendisse condimentum massa, aliquet nec. Ut amet enim, in lectus scelerisque eget sodales est libero.", topColor:"#9E9E9E66"},
        { depName: "D3", depInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit malesuada fames facilisis commodo, dui. Lorem ut suspendisse nec mauris consectetur ornare. Suspendisse condimentum massa, aliquet nec. Ut amet enim, in lectus scelerisque eget sodales est libero.", topColor:"rgb(161, 14, 197,0.3)" },
        { depName: "Desco", depInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit malesuada fames facilisis commodo, dui. Lorem ut suspendisse nec mauris consectetur ornare. Suspendisse condimentum massa, aliquet nec. Ut amet enim, in lectus scelerisque eget sodales est libero.", topColor:"#FF980055" },
        { depName: "EPD", depInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit malesuada fames facilisis commodo, dui. Lorem ut suspendisse nec mauris consectetur ornare. Suspendisse condimentum massa, aliquet nec. Ut amet enim, in lectus scelerisque eget sodales est libero.", topColor:"#1DE9B556" },
        { depName: "Events", depInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit malesuada fames facilisis commodo, dui. Lorem ut suspendisse nec mauris consectetur ornare. Suspendisse condimentum massa, aliquet nec. Ut amet enim, in lectus scelerisque eget sodales est libero.", topColor:"#00968855" },
        { depName: "HPA", depInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit malesuada fames facilisis commodo, dui. Lorem ut suspendisse nec mauris consectetur ornare. Suspendisse condimentum massa, aliquet nec. Ut amet enim, in lectus scelerisque eget sodales est libero.", topColor: "#E91E6355" },
        { depName: "Parishod", depInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit malesuada fames facilisis commodo, dui. Lorem ut suspendisse nec mauris consectetur ornare. Suspendisse condimentum massa, aliquet nec. Ut amet enim, in lectus scelerisque eget sodales est libero.", topColor:"#4CAF5055" },
        { depName: "School", depInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit malesuada fames facilisis commodo, dui. Lorem ut suspendisse nec mauris consectetur ornare. Suspendisse condimentum massa, aliquet nec. Ut amet enim, in lectus scelerisque eget sodales est libero.", topColor:"#3F51B555" },
        { depName: "Umang", depInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit malesuada fames facilisis commodo, dui. Lorem ut suspendisse nec mauris consectetur ornare. Suspendisse condimentum massa, aliquet nec. Ut amet enim, in lectus scelerisque eget sodales est libero.", topColor:"#FFC10755" }
    ];

    if (depInfoArray) {
        departments.forEach((dep) => {
            let index = 0;
            depInfoArray.forEach((d, i) => {
                if (d.title === dep.depName) {
                    index = i;
                }
            })
            
            dep.depInfo = depInfoArray[index].shortbody;
        })
    }
    
    return (
        <div>
            <img className={`${classes.hiddenimage} hiddenimageH`} style={{ position: "absolute", right: "85%", top: "6.5rem", zIndex: "-1" }} src="/assets/ellipse_blue.svg"></img>
            <img className={`${classes.hiddenimage} hiddenimageH`} style={{ position: "absolute", right: "37.5%", top: "22rem", zIndex: "-1" }} src="/assets/ellipse_yellow.svg"></img>
            <img className={`${classes.hiddenimage} hiddenimageH`} style={{ position: "absolute", right: "80%", top: "44rem", zIndex: "-1" }} src="/assets/green_blob.svg"></img>
             <img className={`${classes.hiddenimage} hiddenimageH`} style={{ position: "absolute", right: "0%", top: "72rem", zIndex:"-1"}} src="/assets/blue_blob.svg"></img>
            <Fade>
            <div className={`${classes.mainInfo} mainInfo`}>
            
                    <div className={`${classes.homeFlexBox} homeFlexBox`}>
                        <Slide left>
                    <div className={`${classes.homeLeft} homeLeft`}>
                        <div className={`${classes.section_heading_home} section_heading_home`}>
                            
                            NSS BITS PILANI<br></br>Not me but you
                        </div>
                        <div className={`${classes.homeRight_mob} homeRight_mob`}>
                            <div>
                                <HeroCarousel></HeroCarousel>
                            </div>
                        </div>
                            NSS BITS Pilani is composed of enthusiastic volunteers, under the guidance of respected teachers, who always keep in mind comprehensive and sustainable models for development. In addition to the main goals of community development, NSS also aims to inculcate service values ​​in students, and ultimately make them serious and responsible citizens dedicated to improving the country and the world.
                        <div className={`${classes.button_div} button_div`}>
                            <span className={`${classes.button} button`}><NavLink to={"/aboutus"}>View More</NavLink></span>
                        </div>
                    </div>
                            </Slide>
                        <Slide right>
                    <div className={`${classes.homeRight} homeRight`}>
                        <div><HeroCarousel></HeroCarousel></div>
                            </div>
                            </Slide>
                    <div className={`${classes.button_div} button_div_mob`}>
                        <span className={`${classes.button} button`}><NavLink to={"/aboutus"}>View More</NavLink></span>
                    </div>
                    </div>
                    
            </div>

           
            <div className={`${classes.homeAbout} homeAbout`}>
                <Slide left>
                <div className={`${classes.section_heading_home} section_heading_home`}>About Us</div>
            </Slide>
                <div className={`${classes.aboutInfo} aboutInfo`}>
                        <div className={`${classes.aboutFlexBox} aboutFlexBox`}>
                            <Slide left>
                        <div className={`${classes.left} left`}>
                            <div className={`${classes.homeimg} homeimg`}><img src="/assets/rectangle_24.png" alt="img" /></div>
                        </div>
                            </Slide>
                            
                        <Slide right>
                        <div className={`${classes.right} right`}>
                            <div className={`${classes.section_heading_home} section_heading_home`}>
                                <span style={{ color: "rgba(39, 174, 96, 1)" }}>What are we</span>
                                <div className={`${classes.left_mob} left_mob`}>
                                    <div className={`${classes.homeimg} homeimg`}>
                                        <img src="/assets/rectangle_24.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                            NSS Bits Pilani has been in existence for more than 50 years and consists of more than 200 active volunteers guided by esteemed professors who have always kept in mind comprehensive and sustainable models for development.
                        </div>
                        </Slide>
                    </div>
                    </div>
                    
                
                    
                
                <div className={`${classes.aboutInfo} aboutInfo`}>
                    <div className={`${classes.aboutFlexBox} aboutFlexBox`}>
                            <Slide left>
                            <div className={`${classes.leftB} leftB`}>
                                <div className={`${classes.section_heading_home} section_heading_home`}>
                                    <span style={{ color: "rgba(45, 156, 219, 1)" }}>What we do</span>
                                    <div className={`${classes.rightB} rightB_mob`}>
                                        <div className={`${classes.homeimg} homeimg`}><img src="/assets/rectangle_24.png" align="right" alt="img" /></div>
                                    </div>
                                </div>
                                Spreading happiness through community service has been one of the primary objectives of NSS. With innovative activities across the departments catering to all classes of the campus residents, we try to create small, happy and memorable moments in their lives. We aim to bring about a positive change in the society with focus on Education and Development.
                            </div>
                            </Slide>
                            
                            <Slide right>
                        <div className={`${classes.rightB} rightB`}>
                            <div className={`${classes.homeimg} homeimg`}><img src="/assets/rectangle_24.png" align="right" alt="img" /></div>
                                </div>
                                </Slide>
                    </div>
                    </div>
                    
            </div>
            
            
            <div className={`${classes.initiatives} initiatives`}>
                    <div className={`${classes.section_heading_home} section_heading_home`}>Our initiatives</div>
                    <Slide bottom>
                <div className={`${classes.cards_desk} cards_desk`}>
                    <div className={`${classes.cards} cards`}>
                    {renderEvents()}
                </div>
              <div className={`${classes.button_div} button_div`}>
                    <span className={`${classes.button} button`} onClick={() => {setEventsExpanded(!eventsExpanded)}}>{eventsExpanded ? "View Less" : "View More"}</span>
                </div>
                    </div>
                    <div className={`${classes.homeCarousel1} homeCarousel1`}>
                        <Carousel slides={1}></Carousel>
                    </div>
                    <div className={`${classes.homeCarousel2} homeCarousel2`}>
                        <Carousel slides={2}></Carousel>
                        </div>
                    </Slide>    
            </div>

            <div className={`${classes.departments} departments`}>
                
                <div className={`${classes.section_heading_home} section_heading_home`}>Our Departments</div>
                <Form className={`${classes.formMob} formMob`}>
                        <Select variant="filled"
                            
                            bg={departments.find( dep => dep.depName === currentDepartment).topColor}
                            color="black"
                            size="lg"
                            value={currentDepartment}
                            onChange={e => setCurrentDepartment(e.target.value)}
                            focusBorderColor={departments.find(dep => dep.depName === currentDepartment).topColor}
                            _focusVisible={{backgroundColor: `${departments.find( dep => dep.depName === currentDepartment).topColor}` }}
                        >
                            <option value="CLP" style={{fontFamily:"poppins"}}>CLP</option>
                            <option value="D3">D3</option>
                            <option value="Desco">Desco</option>
                            <option value="EPD">EPD</option>
                            <option value="Events">Events</option>
                            <option value="HPA">HPA</option>
                            <option value="Parishod">Parishod</option>
                            <option value="School">School</option>
                            <option value="Umang">Umang</option>
                        </Select>
                </Form>
                <div className={`${classes.cards} cards`}>
                    {departments.map((department) => <DepCard
                        depName={department.depName}
                        depInfo={department.depInfo}
                        topColor={department.topColor}/>)}
                </div>

                <div className={`${classes.cards} cardsMob`}>
                    {departments.map(department => {
                        if (department.depName === currentDepartment) {
                            return <DepCard
                                depName={department.depName}
                                depInfo={department.depInfo}
                                topColor={department.topColor} />;
                        }
                        return null;
                        })}
                    </div>
                    
                </div>
            
            <Footer></Footer>
                </Fade>
        </div>
    );
}

export default Home;