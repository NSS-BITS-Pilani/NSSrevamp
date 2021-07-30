import React from 'react';
import styles from "./Resources.scss";
import ResCard from './ResCard/ResCard';
import Fade from 'react-reveal/Fade';
import Footer from '../Footer/footer_alt'

const Resources = () => {
    
    const linksthree = [{ title: "Education link", href: "#" }, { title: "Education link", href: "#" }, { title: "Education link", href: "#" }];
    const linksfive = [{ title: "Education link", href: "#" },{ title: "Education link", href: "#" },{ title: "Education link", href: "#" },{ title: "Education link", href: "#" },{ title: "Education link", href: "#" }]
    const linksfour = [{ title: "Education link", href: "#" }, { title: "Education link", href: "#" }, { title: "Education link", href: "#" }, { title: "Education link", href: "#" }]
    const linkseight = [...linksfour, ...linksthree];

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
                <ResCard links={linksfive}></ResCard>
                <ResCard links={linkseight}></ResCard>
                <ResCard links={linksfour}></ResCard>
                <ResCard links={linksthree}></ResCard>
                <ResCard links={linksthree}></ResCard>
                <ResCard links={linksfour}></ResCard>
                
                    </div>
                
            </div>
            <Fade>
                <Footer />
            </Fade>
        </React.Fragment>
    );
}

export default Resources;