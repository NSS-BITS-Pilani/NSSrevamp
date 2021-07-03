import React, { useState } from 'react';

import Footer from "../Footer/footer_alt";
    
import EventCard from './EventCard/eventcard';
import DepCard from './DepCards/depcards';

import Carousel from './Carousel/carousel';
import classes from "./home.scss";
import { NavLink } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Select } from "@chakra-ui/react"


import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const Home = () => {
    
    const events = [
        { eventName: "Junoon", eventInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra.", imgPath: "home_initiatives.png"},
        { eventName: "Junoon", eventInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra.", imgPath: "home_initiatives.png" },
        { eventName: "Junoon", eventInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra.", imgPath: "home_initiatives.png" }
    ];          // set top 3 events in this array

    const expandedEvents = [
        ...events, ...events
    ];          // set all events in this array

    const renderEvents = () => {
        if (!eventsExpanded) {
            return events.map((event) => <EventCard eventName={event.eventName} eventInfo={event.eventInfo} imgPath={event.imgPath}/>);
        }
        return expandedEvents.map((event) => <EventCard eventName={event.eventName} eventInfo={event.eventInfo} imgPath={event.imgPath}/>)
    }

    const [eventsExpanded, setEventsExpanded] = useState(false);
    
    const [currentDepartment, setCurrentDepartment] = useState("CLP");

    const departments = [
        { depName: "CLP", depInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit malesuada fames facilisis commodo, dui. Lorem ut suspendisse nec mauris consectetur ornare. Suspendisse condimentum massa, aliquet nec. Ut amet enim, in lectus scelerisque eget sodales est libero.", topColor:"rgba(255, 251, 165, 0.44)"},
        { depName: "D3", depInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit malesuada fames facilisis commodo, dui. Lorem ut suspendisse nec mauris consectetur ornare. Suspendisse condimentum massa, aliquet nec. Ut amet enim, in lectus scelerisque eget sodales est libero.", topColor:"rgba(165, 244, 255, 0.44)" },
        { depName: "Desco", depInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit malesuada fames facilisis commodo, dui. Lorem ut suspendisse nec mauris consectetur ornare. Suspendisse condimentum massa, aliquet nec. Ut amet enim, in lectus scelerisque eget sodales est libero.", topColor:"rgba(187, 107, 217, 0.23)" },
        { depName: "EPD", depInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit malesuada fames facilisis commodo, dui. Lorem ut suspendisse nec mauris consectetur ornare. Suspendisse condimentum massa, aliquet nec. Ut amet enim, in lectus scelerisque eget sodales est libero.", topColor:"rgba(170, 252, 204, 1)" },
        { depName: "HPA", depInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit malesuada fames facilisis commodo, dui. Lorem ut suspendisse nec mauris consectetur ornare. Suspendisse condimentum massa, aliquet nec. Ut amet enim, in lectus scelerisque eget sodales est libero.", topColor:"rgba(165, 244, 255, 0.44)" },
        { depName: "Parishod", depInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit malesuada fames facilisis commodo, dui. Lorem ut suspendisse nec mauris consectetur ornare. Suspendisse condimentum massa, aliquet nec. Ut amet enim, in lectus scelerisque eget sodales est libero.", topColor:"rgba(107, 217, 171, 0.23)" },
        { depName: "Events", depInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit malesuada fames facilisis commodo, dui. Lorem ut suspendisse nec mauris consectetur ornare. Suspendisse condimentum massa, aliquet nec. Ut amet enim, in lectus scelerisque eget sodales est libero.", topColor:"rgba(255, 190, 190, 0.43)" },
        { depName: "School", depInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit malesuada fames facilisis commodo, dui. Lorem ut suspendisse nec mauris consectetur ornare. Suspendisse condimentum massa, aliquet nec. Ut amet enim, in lectus scelerisque eget sodales est libero.", topColor:"rgba(165, 244, 255, 0.44)" },
        { depName: "Umang", depInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit malesuada fames facilisis commodo, dui. Lorem ut suspendisse nec mauris consectetur ornare. Suspendisse condimentum massa, aliquet nec. Ut amet enim, in lectus scelerisque eget sodales est libero.", topColor:"rgba(187, 107, 217, 0.23)" }
    ];
    
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
                            <div className={`${classes.homeimg} homeimg`}><img src="/assets/home_top.png" alt="img" /></div>
                        </div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum erat egestas facilisis. Netus molestie nibh pellentesque magna lectus. Faucibus mattis massa sed scelerisque. Donec lacus, ut mauris ac in suspendisse amet lacinia arcu.
                        <div className={`${classes.button_div} button_div`}>
                            <span className={`${classes.button} button`}><NavLink to={"/aboutus"}>View More</NavLink></span>
                        </div>
                    </div>
                            </Slide>
                        <Slide right>
                    <div className={`${classes.homeRight} homeRight`}>
                        <div className={`${classes.homeimg} homeimg`}><img src="/assets/home_top.png" alt="img" /></div>
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
                            <div className={`${classes.homeimg} homeimg`}><img src="/assets/rectangle_24.png" alt="img" /></div>
                        </div>
                            </div>
                        
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum erat egestas facilisis. Netus molestie nibh pellentesque magna lectus. Faucibus mattis massa sed scelerisque. Donec lacus, ut mauris ac in suspendisse amet lacinia arcu.
                              
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet et donec ut iaculis mauris amet fringilla neque eget. Habitant nec risus viverra at ut arcu, arcu venenatis. Lectus egestas diam at non nec mattis enim vivamus. Faucibus purus orci elit, id ornare pellentesque lectus aliquam. Ut leo consequat malesuada vel proin maecenas dictumst justo. Tristique nam iaculis amet augue justo volutpat varius imperdiet nunc.
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
                            <option value="HPA">HPA</option>
                            <option value="Parishod">Parishod</option>
                            <option value="Events">Events</option>
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