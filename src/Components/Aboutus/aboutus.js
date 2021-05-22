import React from 'react';
import classes from "./aboutus.scss";

const aboutus = () => {
    return (
        <div className={`${classes.container} container`}>
            <div className={`${classes.head} head`}>About us</div>

            
            <div className={`${classes.aboutTop} aboutTop`}>
                <div className={`${classes.aboutSection} aboutSection`}>
                    <div className={`${classes.bullet} bullet`}>
                        o
                    </div>
                    <div className={`${classes.title} title`}>
                        Introduction
                    </div>
                    <div className={`${classes.aboutInfo} aboutInfo`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor dictum tincidunt lobortis nisi. Vitae turpis augue vitae tempor, tellus interdum aliquam imperdiet mi. Faucibus sit praesent phasellus tincidunt justo, quisque purus dignissim. Elementum imperdiet quis viverra malesuada mauris est. Malesuada dolor tristique nibh viverra penatibus suspendisse. Magna et elit sed amet, sit tortor tempus et. Velit vitae morbi proin at. Diam integer hac metus, at senectus ligula duis lectus. Blandit magna ut diam malesuada.
                    </div>
                </div>
            </div>
            
            
        </div>
    );
}

export default aboutus;