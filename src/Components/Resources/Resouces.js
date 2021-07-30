import React from 'react';
import styles from "./Resources.scss";
import ResCard from './ResCard/ResCard';
import Fade from 'react-reveal/Fade';
import Footer from '../Footer/footer_alt'
import { useSelector} from 'react-redux';


const Resources = () => {
    const dataArray = useSelector((state) => state.resources);
    const filteredData = dataArray.map((resource) => {
        const linkArray = resource.linksString.map((link) => { return {title:link.children[0].text.split("=>")[0], href:link.children[0].text.split("=>")[1]} });
        return { title: resource.title, infoText:resource.infoText, links:linkArray}
    });
    return (
        <React.Fragment>
        <img className={`${styles.hiddenimage} hiddenimage`} style={{ position: "absolute", right: "85%", top: "6.5rem", zIndex: "-1" }} src="/assets/ellipse_blue.svg"></img>
        <img className={`${styles.hiddenimage} hiddenimage`} style={{ position: "absolute", right: "0%", top: "22rem", zIndex: "-1" }} src="/assets/ellipse_yellow.svg"></img>
        <img className={`${styles.hiddenimage} hiddenimage`} style={{ position: "absolute", right: "80%", top: "39rem", zIndex: "-1" }} src="/assets/magenta_blob.svg"></img>
            <div className="resCon">
              <Fade>  
                    <div className="heading">Resources<span style={{color:"red", fontSize:"10px", display:"block"}}>Under development</span></div>
                </Fade>
            <div className="resGrid">
                {filteredData.map((resource) => <ResCard links={resource.links} title={resource.title} infoText={resource.infoText}></ResCard>)}    
            </div>
                
            </div>
            <Fade>
                <Footer />
            </Fade>
        </React.Fragment>
    );
}

export default Resources;