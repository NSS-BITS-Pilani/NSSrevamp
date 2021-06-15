import React, {useState} from 'react';
import classes from "./events_alt.scss";
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import MobCard from './mobCard/mobCard';

const Events = () => {

    const [eventIndex, setEventIndex] = useState(1);

    const [showModal, setShowModal] = useState({show: false, index: 1});

    const Events = [
        { title: "Junoon", img:"/assets/CLP_icon.svg", color: "#E6FFB1" },
        { title: "Smile For A Shop", img:"/assets/CLP_icon.svg", color:"#A5F4FF70"  },
        { title: "Blood Donation Camp", img: "/assets/CLP_icon.svg", color: "#F2C94C" },
        { title: "Conferencia De Youth", img:"/assets/CLP_icon.svg", color:"#F2C94C"}
    ];

    return (
        <React.Fragment>
        <div className={`${classes.contentBody} contentBody`}>
            <Slide left>
            <aside className={`${classes.eveAside} eveAside`}>
                {Events.map((event, index) =>
                    <button onClick={() => setEventIndex(index)} style={eventIndex === index ? {background: `${Events[eventIndex].color}`} : null}>{event.title}</button>
                )}
                </aside>
            </Slide>
            <Zoom>
                    <div className={`${classes.mainContent} mainContentEve`} style={{ background: `${Events[eventIndex].color}` }}>
                <h1>{Events[eventIndex].title}</h1>
                <div className={`${classes.caption} caption`}>
                    A WORLD OF MILLION DIFFERENT ABILITIES
                </div>
                <div className={`${classes.eventQuote} eventQuote`}>
                    The literal meaning of the word "Junoon" means "passion and/or a frenzied carving for something."
                </div>
                <p>
                    The only disability that a person can have is a limited mindset. India has a population over a billion people , with a staggering 20 million of them physically and mentally challenged. They are generally thought as a burden to the society. While numerous NGO's cater to their specific needs and fight for their right to live a normal life, this September 15th and 16th, NSS -BITS Pilani pitches in to give them their right to equality and normalcy.

                    Junoon is not just an event, it is an effort to give the specially abled their right to equality and a sense of acceptance. It gives a platform to these specially abled to showcase their talent to the more privileged section of society and also prove that they are not less than anybody watching them and also everybody is “Equal”.
                    Junoon has taken upon itself to sensitize the next generation of potential leaders to the life of the specially abled.

                    We do not claim that we are going to redefine sports. But, in our own way, we intend to honor sports for all it stands, competition and chance. This September, the fight gets fiercer, this September, everyone gets their chance, this September, sport triumphs above all.

                    Junoon, now onto its 7th edition, is a unique sporting extravaganza for the specially abled youth of this country. In the new edition of this “Carnival of Spirit”, we expect the participation of over 200 with the support of over 10 NGOs. With all the support and some exciting changes, Junoon 2018 would be bigger success than its predecessors.
                </p>
                </div>
                </Zoom>
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
                {Events.map((event, i) =>
                    <MobCard
                        title={event.title}
                        img={event.img}
                        color={event.color}
                        click={() => {
                            setShowModal({ show: true, index: i });
                            setEventIndex(i);
                        }}
                    />)}
                    </Fade>
            </div>

            <Slide bottom>
            <div style={ showModal.show ? {display: "block", background:`${Events[eventIndex].color}`} : {display: "none"}} className="mobModal">
                <h1>School</h1>
                <p>School is one our foremost initiative for providing quality education to children of Pilani and its neighbouring areas. NSS School aims to bring about not just academic improvement but an overall development in children. We inculcate these qualities with the wide amount of activities children undergo in the whole year.</p>
                <h2>WORKING:</h2>
                <p> NSS School facilitates the education of almost 100 students of classes 1-12. To bring about a deeper development of children, we push for a closer bond between the mentor and student by maintaining a 1:2 ratio of volunteers to students, by facilitating home visits of students by the volunteers and by Parent Volunteer meets.
                    To bring about an overall development of students, School also organises events Udaan and Sports Day to inculcate and promote cultural spirit and sportsmanship among the students. These events are wholly organised by the first year recruits of NSS giving them management expertise and chance to bond deeper with the students.
                    NSS School has also started programs for English improvement called English Learning Program and for competitive exams preparation called UNNATI. We also have a program for preparing students for the prestigious Jawahar Navodaya schools. These programs aim to give the children a better base for future development.
                    More importantly, School aims to generate a mentor-student relation between volunteers and students. Home visits, occasional workshops, festival celebration, birthday celebrations and different cultural and sports events are all key components of this endeavour. Over the years, many students and volunteers alike have left school with a deep place in their hearts for each other.</p>
            </div>
            </Slide>
        </div>
            </React.Fragment>
    );
}

export default Events;