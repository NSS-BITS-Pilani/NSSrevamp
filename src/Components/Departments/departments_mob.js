import React, {useState} from 'react';
import classes from "./departments_mob.scss";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import MobCard from './mobCard/mobCard';


const Departments = () => {

    const [showModal, setShowModal] = useState({show: false, index: 0});

    const Departments = [
        { title: "CLP", color: "#fffeed", img:"/assets/CLP_icon.svg", color:"#E6FFB1" },
        { title: "D3", color: "#fffeed", img:"/assets/D3.svg", color:"#A5F4FF70" },
        { title: "Desco", color: "#fffeed", img:"/assets/Desco_icon.svg", color:"#F2C94C"  },
        { title: "EPD", color: "#fffeed", img:"/assets/EPD.svg", color:"#27AE60"  },
        { title: "HPA", color: "#fffeed", img:"/assets/HPA.svg", color:"#F857A6"  },
        { title: "Parishod", color: "#fffeed", img:"/assets/CLP_icon.svg", color:"#E6FFB1"  },
        { title: "School", color: "#fffeed", img:"/assets/school.svg", color:"#9B51E0"  },
        { title: "Umang", color: "#fffeed", img:"/assets/CLP_icon.svg", color:"#E6FFB1"  },
    ];
    

    return (
        <div className={`${classes.mobileContent} mobileContent`}>
            <div className={`${classes.mobTitle} mobTitle`}>
                Departments
            </div>

            <div className="backMob" onClick={() => setShowModal({show: false})} style={ showModal.show ? {display: "block"} : {display: "none"}}>
                <img src="assets/back.svg" /> Back
            </div>

            <div className="mobCols" style={!showModal.show ? { display: "grid" } : { display: "none" }}>
                <Fade>
                {Departments.map((department, i) =>
                    <MobCard
                        title={department.title}
                        img={department.img}
                        color={department.color}
                        click={() => {
                            setShowModal({ show: true, index: i });
                        }}
                    />)}
                    </Fade>
            </div>

            <Zoom>
            <div style={ showModal.show ? {display: "block"} : {display: "none"}} className="mobModal">
                <h1>School</h1>
                <p>School is one our foremost initiative for providing quality education to children of Pilani and its neighbouring areas. NSS School aims to bring about not just academic improvement but an overall development in children. We inculcate these qualities with the wide amount of activities children undergo in the whole year.</p>
                <h2>WORKING:</h2>
                <p> NSS School facilitates the education of almost 100 students of classes 1-12. To bring about a deeper development of children, we push for a closer bond between the mentor and student by maintaining a 1:2 ratio of volunteers to students, by facilitating home visits of students by the volunteers and by Parent Volunteer meets.
                    To bring about an overall development of students, School also organises events Udaan and Sports Day to inculcate and promote cultural spirit and sportsmanship among the students. These events are wholly organised by the first year recruits of NSS giving them management expertise and chance to bond deeper with the students.
                    NSS School has also started programs for English improvement called English Learning Program and for competitive exams preparation called UNNATI. We also have a program for preparing students for the prestigious Jawahar Navodaya schools. These programs aim to give the children a better base for future development.
                    More importantly, School aims to generate a mentor-student relation between volunteers and students. Home visits, occasional workshops, festival celebration, birthday celebrations and different cultural and sports events are all key components of this endeavour. Over the years, many students and volunteers alike have left school with a deep place in their hearts for each other.</p>
            </div>
            </Zoom>
        </div>
    );
}

export default Departments;