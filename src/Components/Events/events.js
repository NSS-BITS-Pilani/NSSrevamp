import React, {useState} from 'react';
import classes from "./events.scss";

const Events = () => {

    const events = [
        { title: "Junoon" },
        { title: "Smile For A Shop" },
        { title: "Blood Donation Camp" }
    ];

    const [eventIndex, setEventIndex] = useState(0);


    return (
        <div className={`${classes.mainBody} mainBody`}>
            <aside>
                {events.map((event, index) =>
                    <button onClick={() => setEventIndex(index)} style={eventIndex === index ? {background: "#EDFFFD"} : null}>{event.title}</button>
                )}
            </aside>
            <div className={`${classes.mainText} mainText`}>
                <h1>{events[eventIndex].title}</h1>
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
        </div>
    );
}

export default Events;