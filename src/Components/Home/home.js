import React, {useState} from 'react';
import EventCard from './EventCard/eventcard';
import DepCard from './DepCards/depcards';
import classes from "./home.scss";

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
        { depName: "CLP", depInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit malesuada fames facilisis commodo, dui. Lorem ut suspendisse nec mauris consectetur ornare. Suspendisse condimentum massa, aliquet nec. Ut amet enim, in lectus scelerisque eget sodales est libero." },
        { depName: "D3", depInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit malesuada fames facilisis commodo, dui. Lorem ut suspendisse nec mauris consectetur ornare. Suspendisse condimentum massa, aliquet nec. Ut amet enim, in lectus scelerisque eget sodales est libero." },
        { depName: "Desco", depInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit malesuada fames facilisis commodo, dui. Lorem ut suspendisse nec mauris consectetur ornare. Suspendisse condimentum massa, aliquet nec. Ut amet enim, in lectus scelerisque eget sodales est libero." },
        { depName: "EPD", depInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit malesuada fames facilisis commodo, dui. Lorem ut suspendisse nec mauris consectetur ornare. Suspendisse condimentum massa, aliquet nec. Ut amet enim, in lectus scelerisque eget sodales est libero." },
        { depName: "HPA", depInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit malesuada fames facilisis commodo, dui. Lorem ut suspendisse nec mauris consectetur ornare. Suspendisse condimentum massa, aliquet nec. Ut amet enim, in lectus scelerisque eget sodales est libero." },
        { depName: "Parishod", depInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit malesuada fames facilisis commodo, dui. Lorem ut suspendisse nec mauris consectetur ornare. Suspendisse condimentum massa, aliquet nec. Ut amet enim, in lectus scelerisque eget sodales est libero." },
        { depName: "Events", depInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit malesuada fames facilisis commodo, dui. Lorem ut suspendisse nec mauris consectetur ornare. Suspendisse condimentum massa, aliquet nec. Ut amet enim, in lectus scelerisque eget sodales est libero." },
        { depName: "School", depInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit malesuada fames facilisis commodo, dui. Lorem ut suspendisse nec mauris consectetur ornare. Suspendisse condimentum massa, aliquet nec. Ut amet enim, in lectus scelerisque eget sodales est libero." },
        { depName: "Umang", depInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit malesuada fames facilisis commodo, dui. Lorem ut suspendisse nec mauris consectetur ornare. Suspendisse condimentum massa, aliquet nec. Ut amet enim, in lectus scelerisque eget sodales est libero." }
    ];
    
    return (
        <div>
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
                    {departments.map((department) => <DepCard depName={department.depName} depInfo={department.depInfo}/>)}
                </div>
            </div>
        </div>
    );
}

export default Home;