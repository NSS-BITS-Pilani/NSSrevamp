import React, {useState} from 'react';
import classes from "./departments.scss";
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import MobCard from './mobCard/mobCard';
import sanityClient from '../../client';

const BlockContent = require('@sanity/block-content-to-react');

const Departments = (props) => {

    const [depData, setDepData] = useState(null);
    
    const [currentDep, setCurrentDep] = useState("Loading...");

    const [showModal, setShowModal] = useState({ show: false, index: 0 });
    
    const [imgUrl, setImgUrl] = useState(null);

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
        { title: "CLP", img:"/assets/CLP_icon.svg", color:"#E6FFB1" },
        { title: "D3", img:"/assets/D3.svg", color:"#A5F4FF70" },
        { title: "Desco", img:"/assets/Desco_icon.svg", color:"#F2C94C" },
        { title: "EPD", img:"/assets/EPD.svg", color:"#27AE60"  },
        { title: "HPA", img:"/assets/HPA.svg", color:"#F857A6"  },
        { title: "Parishod", img:"/assets/CLP_icon.svg", color:"#E6FFB1"  },
        { title: "School", img:"/assets/school.svg", color:"#9B51E0"  },
        { title: "Umang", img:"/assets/CLP_icon.svg", color:"#E6FFB1"  },
    ];

    let index=0;
    Departments.forEach((val, i) => {
        if (val.title === initialDep) {
            index = i;
        }
    });
    const [departmentIndex, setDepartmentIndex] = useState(index);

    async function fetchData() {
        const dataArray = await sanityClient.fetch('*[_type == "department"]');
        setDepData(dataArray);
        setCurrentDep(<BlockContent blocks={dataArray[7].body} serializers={serializers} dataset="production" projectId="9gzz7muj" />);
        setImgUrl(dataArray[7].imgurl);
    }

    function onClickChange(index) {
        setDepartmentIndex(index);
        depData.forEach((element) => {
            if (element.title === Departments[index].title) {
                setCurrentDep(<BlockContent blocks={element.body} serializers={serializers} dataset="production" projectId="9gzz7muj" />);
                setImgUrl(element.imgurl)
            }
        });
    }

    React.useEffect(() => {
        fetchData();
    }, []);

    return (
        <React.Fragment>
        <div className={`${classes.contentBody} contentBody`}>
            <aside className={`${classes.depAside} depAside`}>
                <Slide left>
                {Departments.map((department, index) =>
                    <button onClick={() => onClickChange(index)} style={departmentIndex === index ? { background: department.color } : null}>{department.title}</button>
                    )}
                    </Slide>
            </aside>
            <Zoom>
            <div className={`${classes.mainContent} mainContent`} style={{background:`${Departments[departmentIndex].color}`}}>
                <h1>{ Departments[departmentIndex].title }</h1>
                    {currentDep}
                    <div style={{display:"flex"}}>{ imgUrl ? <div className="depImage"><img src={imgUrl}/></div> : null }</div>
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
            <div style={ showModal.show ? {display: "block", background:`${Departments[departmentIndex].color}`} : {display: "none"}} className="mobModal">
                {currentDep}
                <div style={{ display: "flex" }}>{imgUrl ? <div className="eventImage"><img src={imgUrl} /></div> : null}</div>
    
            </div>
            </Slide>
        </div>
            </React.Fragment>
    );
}

export default Departments;
