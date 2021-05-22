import React from 'react';
import classes from "./aboutus.scss";

const aboutus = () => {
    return (
        <div className={`${classes.mainDivision} mainDivision`}>
            <div className={`${classes.section_heading} section_heading`}>About us</div>
            <div className={`${classes.aboutTop} aboutTop`}>
                <div className={`${classes.aboutSection} aboutSectionH`}>
                    <div className={`${classes.bullet} bullet`}>
                        <img src="/assets/LineBlue.svg"></img>
                    </div>
                    <div className={`${classes.title} title`} style={{ color: "rgba(47, 128, 237, 1)" }}>
                        Introduction
                    </div>
                </div>
                <div className={`${classes.aboutSectionI} aboutSectionI`}>
                    <div className={`${classes.aboutInfoGap} aboutInfoGap`}></div>
                    <div className={`${classes.aboutInfo} aboutInfo`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor dictum tincidunt lobortis nisi. Vitae turpis augue vitae tempor, tellus interdum aliquam imperdiet mi. Faucibus sit praesent phasellus tincidunt justo, quisque purus dignissim. Elementum imperdiet quis viverra malesuada mauris est. Malesuada dolor tristique nibh viverra penatibus suspendisse. Magna et elit sed amet, sit tortor tempus et. Velit vitae morbi proin at. Diam integer hac metus, at senectus ligula duis lectus. Blandit magna ut diam malesuada.
                    </div>
                </div>
            </div>

            <div className={`${classes.aboutTop} aboutTop`}>
                <div className={`${classes.aboutSection} aboutSectionH`}>
                    <div className={`${classes.bullet} bullet`}>
                        <img src="/assets/LineGreen.svg"></img>
                    </div>
                    <div className={`${classes.title} title`} style={{ color: "rgba(39, 174, 96, 1)"}}>
                        Organisation
                    </div>
                </div>
                <div className={`${classes.aboutSectionI} aboutSectionI`}>
                    <div className={`${classes.aboutInfoGap} aboutInfoGap`}></div>
                    <div className={`${classes.aboutInfo} aboutInfo`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor dictum tincidunt lobortis nisi. Vitae turpis augue vitae tempor, tellus interdum aliquam imperdiet mi. Faucibus sit praesent phasellus tincidunt justo, quisque purus dignissim. Elementum imperdiet quis viverra malesuada mauris est. Malesuada dolor tristique nibh viverra penatibus suspendisse. Magna et elit sed amet, sit tortor tempus et. Velit vitae morbi proin at. Diam integer hac metus, at senectus ligula duis lectus. Blandit magna ut diam malesuada.
                    </div>
                </div>
            </div>

            <div className={`${classes.aboutTop} aboutTop`}>
                <div className={`${classes.aboutSection} aboutSectionH`}>
                    <div className={`${classes.bullet} bullet`}>
                        <img src="/assets/LinePink.svg"></img>
                    </div>
                    <div className={`${classes.title} title`} style={{ color: "rgba(248, 87, 166, 1)"}}>
                        Nature of work
                    </div>
                </div>
                <div className={`${classes.aboutSectionI} aboutSectionI`}>
                    <div className={`${classes.aboutInfoGap} aboutInfoGap`}></div>
                    <div className={`${classes.aboutInfo} aboutInfo`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor dictum tincidunt lobortis nisi. Vitae turpis augue vitae tempor, tellus interdum aliquam imperdiet mi. Faucibus sit praesent phasellus tincidunt justo, quisque purus dignissim. Elementum imperdiet quis viverra malesuada mauris est. Malesuada dolor tristique nibh viverra penatibus suspendisse. Magna et elit sed amet, sit tortor tempus et. Velit vitae morbi proin at. Diam integer hac metus, at senectus ligula duis lectus. Blandit magna ut diam malesuada.
                    </div>
                </div>
            </div>

            <div className={`${classes.section_heading} section_heading`}>Our Team</div>

            
            
            
        </div>
    );
}

export default aboutus;