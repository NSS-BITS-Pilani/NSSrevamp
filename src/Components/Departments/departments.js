import React, {useState} from 'react';
import classes from "./departments.scss";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import MobCard from './mobCard/mobCard';
import { useSelector} from 'react-redux';
import * as colors from './colors';

const BlockContent = require('@sanity/block-content-to-react');

const Departments = (props) => {

    const [depData, setDepData] = useState(null);
    
    const [currentDep, setCurrentDep] = useState("Loading...");

    const [showModal, setShowModal] = useState({ show: false, index: 0 });
    
    const initialDep = props.match.params.id;

    const serializers = {
            types: {
                code: (props) => (
                <pre data-language={props.node.language}>
                    <code>{props.node.code}</code>
                </pre>
                ),
            },
        }

    const Departments = [
        { title: "CLP", img:"/assets/clp.svg", color:colors.clpText, color_light:colors.clpTextLight, bglite:colors.clpBgLight},
        { title: "D3", img:"/assets/d3.svg", color:colors.d3Text, color_light:colors.d3TextLight, bglite:colors.d3BgLight},
        { title: "Desco", img:"/assets/desco.svg", color:colors.descoText, color_light:colors.descoTextLight, bglite:colors.descoBgLight},
        { title: "EPD", img: "/assets/epd.svg", color:colors.epdText, color_light:colors.epdTextLight, bglite:colors.epdBgLight},
        { title: "Events", img:"/assets/events.svg", color:colors.eventsText, color_light:colors.eventsTextLight, bglite:colors.eventsBgLight},
        { title: "HPA", img:"/assets/hpa.svg", color:colors.hpaText, color_light:colors.hpaTextLight, bglite:colors.hpaBgLight },
        { title: "Parishodh", img:"/assets/parishod.svg", color:colors.parishodText, color_light:colors.parishodTextLight, bglite:colors.parishodBgLight},
        { title: "School", img:"/assets/school.svg", color:colors.schoolText, color_light:colors.schoolTextLight, bglite:colors.schoolBgLight},
        { title: "Umang", img: "/assets/umang.svg", color:colors.umangText, color_light:colors.umangTextLight, bglite:colors.umangBgLight}
    ];

    let index=0;
    Departments.forEach((val, i) => {
        if (val.title === initialDep) {
            index = i;
        }
    });
    const [departmentIndex, setDepartmentIndex] = useState(index);
    
    function onClickChange(index) {
        setDepartmentIndex(index);
        depData.forEach((element) => {
            if (element.title === Departments[index].title) {
                setCurrentDep(<BlockContent blocks={element.body} serializers={serializers} dataset="production" projectId="9gzz7muj" />);
            }
        });
    }

    const dataArray = useSelector((state) => state.departments);

    React.useEffect(() => {
        setDepData(dataArray);

        let i = 2;

        dataArray.forEach(
            (data, index) => {
                if (data.title === "CLP") i = index;
            }
        )

        dataArray.forEach((val, ind) => {
        if (val.title === initialDep) {
            i = ind;
        }
    });


        setCurrentDep(<BlockContent blocks={dataArray[i].body} serializers={serializers} dataset="production" projectId="9gzz7muj" />);
    }, []);

    return (
        <React.Fragment>
        <div  id="depTop"></div>
        <div className={`${classes.contentBody} contentBody`}>
            <aside className={`${classes.depAside} depAside`}>
                <Slide left>
                {Departments.map((department, index) =>
                    <button onClick={() => onClickChange(index)} style={departmentIndex === index ? { background: department.color_light } : null}>{department.title}</button>
                    )}
                    </Slide>
            </aside>
            <Slide bottom>
            <div className={`${classes.mainContent} mainContent`} style={{background:`${Departments[departmentIndex].bglite}`}}>
                <h1>{ Departments[departmentIndex].title }</h1>
                {currentDep}
                </div>
            </Slide>
           </div>

            <div className={`${classes.mobileContent} mobileContent`}>
                <div className={`${classes.mobTitle} mobTitle`}>
                Departments
            </div>

            <div className="backMob" onClick={() => setShowModal({show: false})} style={ showModal.show ? {display: "block"} : {display: "none"}}>
                <img src="assets/back.svg" /> Back
            </div>

            <div className="mobColsD" style={!showModal.show ? { display: "grid" } : { display: "none" }}>
                <Fade>
                {Departments.map((department, i) =>
                    <MobCard
                        title={department.title}
                        img={department.img}
                        color={department.color}
                        click={() => {
                            setShowModal({ show: true, index: i });
                            onClickChange(i);
                        }}
                    />)}
                    </Fade>
            </div>

           
            <div style={ showModal.show ? {display: "block", background:`${Departments[departmentIndex].bglite}`} : {display: "none"}} className="mobModal">
                {currentDep}
            </div>
            
        
        </div>
            </React.Fragment>
    );
}

export default Departments;
