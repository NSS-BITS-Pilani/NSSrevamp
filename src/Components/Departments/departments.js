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
        { title: "CLP", img:"/assets/clp.svg", color:"#9E9E9E99", color_light:"#9E9E9E55" },
        { title: "D3", img:"/assets/d3.svg", color:"rgb(161, 14, 197,0.45)", color_light:"rgb(161, 14, 197,0.35)"},
        { title: "Desco", img:"/assets/desco.svg", color:"#FF980099", color_light:"#FF980077"},
        { title: "EPD", img: "/assets/epd.svg", color: "#1DE9B699", color_light:"#1DE9B666" },
        { title: "Events", img:"/assets/events.svg", color:"#00968888", color_light:"#00968866" },
        { title: "HPA", img:"/assets/hpa.svg", color:"#E91E6388", color_light:"#E91E6366" },
        { title: "Parishod", img:"/assets/parishod.svg", color:"#4CAF5099", color_light:"#4CAF5055" },
        { title: "School", img:"/assets/school.svg", color:"#3F51B599", color_light:"#3F51B566" },
        { title: "Umang", img: "/assets/umang.svg", color: "#FFC10799", color_light:"#FFC10777" }
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
                <div className={`${classes.mobTitle} mobTitle`} id="depTop">
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
