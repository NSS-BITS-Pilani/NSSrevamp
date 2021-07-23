import React, {useState} from 'react';
import classes from "./departments.scss";
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import MobCard from './mobCard/mobCard';

import { useSelector} from 'react-redux';

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
        { title: "CLP", img:"/assets/clp.svg", color:"#9E9E9E", color_light:"#9E9E9E88" },
        { title: "D3", img:"/assets/d3.svg", color:"rgb(161, 14, 197,0.7)", color_light:"rgb(161, 14, 197,0.65)"},
        { title: "Desco", img:"/assets/desco.svg", color:"#FF9800", color_light:"#FF9800ee"},
        { title: "EPD", img: "/assets/epd.svg", color: "#1DE9B6", color_light:"#1DE9B6" },
        { title: "Events", img:"/assets/events.svg", color:"#009688", color_light:"#009688bb" },
        { title: "HPA", img:"/assets/hpa.svg", color:"#E91E63", color_light:"#E91E63cc" },
        { title: "Parishod", img:"/assets/parishod.svg", color:"#4CAF50", color_light:"#4CAF50dd" },
        { title: "School", img:"/assets/school.svg", color:"#3F51B5", color_light:"#3F51B5bb" },
        { title: "Umang", img: "/assets/umang.svg", color: "#FFC107", color_light:"#FFC107" }
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
        <div className={`${classes.contentBody} contentBody`}>
            <aside className={`${classes.depAside} depAside`}>
                <Slide left>
                {Departments.map((department, index) =>
                    <button onClick={() => onClickChange(index)} style={departmentIndex === index ? { background: department.color_light } : null}>{department.title}</button>
                    )}
                    </Slide>
            </aside>
            <Zoom>
            <div className={`${classes.mainContent} mainContent`} style={{background:`${Departments[departmentIndex].color_light}`}}>
                <h1>{ Departments[departmentIndex].title }</h1>
                    {currentDep}
                </div>
                </Zoom>
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

            <Slide bottom>
            <div style={ showModal.show ? {display: "block", background:`${Departments[departmentIndex].color_light}`} : {display: "none"}} className="mobModal">
                {currentDep}
            </div>
            </Slide>
        </div>
            </React.Fragment>
    );
}

export default Departments;
