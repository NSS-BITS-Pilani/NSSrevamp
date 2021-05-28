import React, {useState} from 'react';
import EventCard from './EventCard/eventcard';
import DepCard from './DepCards/depcards';
import classes from "./home.scss";
import { NavLink } from 'react-router-dom';

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
            return events.map((event) => <EventCard eventName={event.eventName} eventInfo={event.eventInfo} imgPath={event.imgPath} />);
        }
        return expandedEvents.map((event) => <EventCard eventName={event.eventName} eventInfo={event.eventInfo} imgPath={event.imgPath}/>)
    }

    const [ eventsExpanded, setEventsExpanded ] = useState(false);

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
            <div className={`${classes.mainInfo} mainInfo`}>
                <div className={`${classes.homeFlexBox} homeFlexBox`}>
                    <div className={`${classes.homeLeft} homeLeft`}>
                        <div className={`${classes.section_heading} section_heading`}>
                            NSS BITS PILANI<br></br>Not me but you
                        </div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum erat egestas facilisis. Netus molestie nibh pellentesque magna lectus. Faucibus mattis massa sed scelerisque. Donec lacus, ut mauris ac in suspendisse amet lacinia arcu.
                        <div className={`${classes.button_div} button_div`}>
                            <span className={`${classes.button} button`}><NavLink to={"/aboutus"}>View More</NavLink></span>
                        </div>
                    </div>
                    <div className={`${classes.homeRight} homeRight`}>
                        <div className={`${classes.homeimg} homeimg`}><img src="/assets/home_top.png" alt="img" align="right"/></div>
                    </div>
                </div>
            </div>


            <div className={`${classes.homeAbout} homeAbout`}>
                <div className={`${classes.section_heading} section_heading`}>Our initiatives</div>
                <div className={`${classes.aboutInfo} aboutInfo`}>
                    <div className={`${classes.aboutFlexBox} aboutFlexBox`}>
                        <div className={`${classes.left} left`}>
                            <div className={`${classes.homeimg} homeimg`}><img src="/assets/rectangle_24.png" alt="img" /></div>
                        </div>

                        <div className={`${classes.right} right`}>
                            <div className={`${classes.section_heading} section_heading`}>
                            <span style={{color: "rgba(39, 174, 96, 1)"}}>What are we</span>
                            </div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum erat egestas facilisis. Netus molestie nibh pellentesque magna lectus. Faucibus mattis massa sed scelerisque. Donec lacus, ut mauris ac in suspendisse amet lacinia arcu.
                        </div>
                    </div>
                </div>

                <div className={`${classes.aboutInfo} aboutInfo`}>
                    <div className={`${classes.aboutFlexBox} aboutFlexBox`}>
                        <div className={`${classes.leftB} leftB`}>
                            <div className={`${classes.section_heading} section_heading`}>
                            <span style={{color: "rgba(45, 156, 219, 1)"}}>What we do</span>
                            </div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet et donec ut iaculis mauris amet fringilla neque eget. Habitant nec risus viverra at ut arcu, arcu venenatis. Lectus egestas diam at non nec mattis enim vivamus. Faucibus purus orci elit, id ornare pellentesque lectus aliquam. Ut leo consequat malesuada vel proin maecenas dictumst justo. Tristique nam iaculis amet augue justo volutpat varius imperdiet nunc.
                        </div>
                        <div className={`${classes.rightB} rightB`}>
                            <div className={`${classes.homeimg} homeimg`}><img src="/assets/rectangle_24.png" align="right" alt="img" /></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={`${classes.initiatives} initiatives`}>
                <div className={`${classes.section_heading} section_heading`}>Our initiatives</div>
                <div className={`${classes.cards} cards`}>
                    {renderEvents()}
                </div>
              <div className={`${classes.button_div} button_div`}>
                    <span className={`${classes.button} button`} onClick={() => {setEventsExpanded(!eventsExpanded)}}>{eventsExpanded ? "View Less" : "View More"}</span>
                </div>
            </div>

            <div className={`${classes.departments} departments`}>
                <div className={`${classes.section_heading} section_heading`}>Our Departments</div>
                <div className={`${classes.cards} cards`}>
                    {departments.map((department) => <DepCard
                        depName={department.depName}
                        depInfo={department.depInfo}
                        topColor={department.topColor}/>)}
                </div>
            </div>
        </div>
    );
}

export default Home;