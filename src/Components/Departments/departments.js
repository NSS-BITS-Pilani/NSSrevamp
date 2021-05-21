import React from 'react';
import classes from "./departments.scss";

const departments = () => {
    return (
        <div className={`${classes.contentBody} contentBody`}>
            <aside>
                <button onClick="">
                    CLP
                </button>
                <button onClick="">
                    D3
                </button>
                <button onClick="">
                    Desco
                </button> 
                <button onClick="">
                    EPD
                </button> 
                <button onClick="">
                    HPA
                </button>
                <button onClick="">
                    Parishod
                </button>
                <button onClick="">
                    School
                </button>
                <button onClick="">
                    Umang
                </button>
            </aside>
            <div className={`${classes.mainContent} mainContent`}>
                <h1>School</h1>
                <div className={`${classes.caption} caption`}>
                    Educating today's Learners for Tomorrow's World
                </div>
                <p>
                    School is one our foremost initiative for providing quality education to children of Pilani and its neighbouring areas. NSS School aims to bring about not just academic improvement but an overall development in children. We inculcate these qualities with the wide amount of activities children undergo in the whole year.
                </p>
                <h2>WORKING:</h2>
                <p>
                    NSS School facilitates the education of almost 100 students of classes 1-12. To bring about a deeper development of children, we push for a closer bond between the mentor and student by maintaining a 1:2 ratio of volunteers to students, by facilitating home visits of students by the volunteers and by Parent Volunteer meets.
                    To bring about an overall development of students, School also organises events Udaan and Sports Day to inculcate and promote cultural spirit and sportsmanship among the students. These events are wholly organised by the first year recruits of NSS giving them management expertise and chance to bond deeper with the students.
                    NSS School has also started programs for English improvement called English Learning Program and for competitive exams preparation called UNNATI. We also have a program for preparing students for the prestigious Jawahar Navodaya schools. These programs aim to give the children a better base for future development.
                    More importantly, School aims to generate a mentor-student relation between volunteers and students. Home visits, occasional workshops, festival celebration, birthday celebrations and different cultural and sports events are all key components of this endeavour. Over the years, many students and volunteers alike have left school with a deep place in their hearts for each other.
                </p>
            </div>
        </div>
    );
}

export default departments;