import React, {useState} from 'react';
import classes from "./events_alt.scss";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import MobCard from './mobCard/mobCard';
import { useSelector} from 'react-redux';
const BlockContent = require('@sanity/block-content-to-react')

const Events = (props) => {

    

    const [eventIndex, setEventIndex] = useState(1);

    const [showModal, setShowModal] = useState({ show: false, index: 1 });
    
    const [eventData, setEventData] = useState(null);
    
    const [currentEvent, setCurrentEvent] = useState("Loading...");

    const initialEvent = props.match.params.id;

    
    const serializers = {
            types: {
                code: (props) => (
                <pre data-language={props.node.language}>
                    <code>{props.node.code}</code>
                </pre>
                ),
            },
        }

    const Events = [
        { title: "Junoon", img:"/assets/CLP_icon.svg", color: "#E6FFB1" },
        { title: "Smile For A Shop", img:"/assets/CLP_icon.svg", color:"#A5F4FF70" },
        { title: "Blood Donation Camp", img: "/assets/CLP_icon.svg", color: "#F2C94C" },
        { title: "Conferencia De Youth", img:"/assets/CLP_icon.svg", color:"#F2C94C"}
    ];

    const dataArray = useSelector((state) => state.events);

    function onClickChange(index) {
        setEventIndex(index);
        eventData.forEach((element) => {
            if (element.title === dataArray[index].title) {
                setCurrentEvent(<BlockContent blocks={element.body} serializers={serializers} dataset="production" projectId="9gzz7muj" />);
            }
        });
    }

    

    React.useEffect(() => {
        setEventData(dataArray);
        let i = 2;

        dataArray.forEach(
            (data, index) => {
                if (data.title === "Smile For A Shop") i = index;
            }
        )

        if (initialEvent){
            dataArray.forEach((val, ind) => {
            if (val.title === initialEvent) {
                i = ind;
            }
        });
        }
        
        setEventIndex(i);
        setCurrentEvent(<BlockContent blocks={dataArray[i].body} serializers={serializers} dataset="production" projectId="9gzz7muj" />);
    }, []);

    return (
        <React.Fragment>
        <div className={`${classes.contentBody} contentBody`}>
            <Slide left>
            <aside className={`${classes.eveAside} eveAside`}>
                {dataArray.map((event, index) =>
                    <button onClick={() => onClickChange(index)} style={eventIndex === index ? {background: `${dataArray[eventIndex].color}`} : null}>{event.title}</button>
                )}
                </aside>
            </Slide>
            <Slide bottom>
                    <div className={`${classes.mainContent} mainContentEve`} style={{ background: `${dataArray[eventIndex].color}` }}>
                        {currentEvent}
                        
                </div>
                </Slide>
            </div>
            
            <div className={`${classes.mobileContent} mobileContent`}>
            <div className={`${classes.mobTitle} mobTitle`}>
                Events
            </div>

            <div className="backMob" onClick={() => setShowModal({show: false})} style={ showModal.show ? {display: "block"} : {display: "none"}}>
                <img src="assets/back.svg" /> Back
            </div>

            <div className="mobCols" style={!showModal.show ? { display: "grid" } : { display: "none" }}>
                <Fade>
                {dataArray.map((event, i) =>
                    <MobCard
                        title={event.title}
                        img={event.logo_url}
                        color={event.color}
                        click={() => {
                            setShowModal({ show: true, index: i });
                            onClickChange(i);
                        }}
                    />)}
                    </Fade>
            </div>

            <Slide bottom>
            <div style={ showModal.show ? {display: "block", background:`${dataArray[eventIndex].color}`} : {display: "none"}} className="mobModal">
                {currentEvent}
            </div>
            </Slide>
        </div>
            </React.Fragment>
    );
}

export default Events;