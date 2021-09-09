import React, { useState } from "react";
import classes from "./loader.scss";
import { animated, useSpring } from 'react-spring'
import Logo from "./Logo";

const Loader = () => {

    const textProps = useSpring({
        to: {
            opacity: 1,
            'letter-spacing': '0.25rem',
            'word-spacing': '0.4rem' 
        },
        from: {
            opacity: 0,
            'letter-spacing': '0.5rem',
            'word-spacing': '1rem'
        },
        reset: false,
        delay: 2000,
    });

    const { x } = useSpring({
        reset: false,
        from: { x: 0 },
        x: 1,
        delay: 1000,
    });
    
    const [flip, set] = useState(false);
    const { y } = useSpring({
        reset: false,
        reverse: flip,
        from: { y: 0 },
        y: 1,
        delay: 1000,
        onRest: () => set(!flip)
    });

    return (
        <React.Fragment>
            <div className={`${classes.loaderWrapper} loaderWrapper container-fluid`}>
                {/* <animated.div style={springProps} className="logo row">
                    <img src="./assets/nss.svg" alt="NSS Logo" />
                </animated.div> */}
                <div className="logo row">
                    {/* <img src="./assets/nss.svg" alt="NSS Logo" /> */}
                    <div className="logoComponent">
                        <Logo />
                    </div>
                    <div className="ringReveal">
                        <animated.svg
                            style={{ width: 300, height: 300 }}
                            viewBox="0 0 404 404"
                            strokeWidth="7"
                            fill="floralwhite"
                            stroke="navy"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeDasharray={1256}
                            strokeDashoffset={x.to(x => (1 - x) * 1256)}>
                                <circle cx="202" cy="202" r="190" />
                        </animated.svg>
                    </div>
                </div>
                <div className="row">
                    <animated.h2 style={textProps} className="loaderText">nss bits pilani</animated.h2>
                </div>
                <div className="fixedTL">
                    <animated.svg
                        style={{ width: 60, height: 60 }}
                        viewBox="0 0 404 404"
                        strokeWidth="10"
                        fill="tomato"
                        stroke="purple"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray={1256}
                        strokeDashoffset={y.to(y => (1 - y) * 1256)}>
                            <circle cx="202" cy="202" r="190" />
                    </animated.svg>
                </div>
                <div className="fixedTR">
                    <animated.svg
                        style={{ width: 60, height: 60 }}
                        viewBox="0 0 404 404"
                        strokeWidth="10"
                        fill="lightgreen"
                        stroke="purple"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray={1256}
                        strokeDashoffset={y.to(y => (1 - y) * 1256)}>
                            <circle cx="202" cy="202" r="190" />
                    </animated.svg>
                </div>
                <div className="fixedBL">
                    <animated.svg
                        style={{ width: 60, height: 60 }}
                        viewBox="0 0 404 404"
                        strokeWidth="10"
                        fill="yellow"
                        stroke="purple"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray={1256}
                        strokeDashoffset={y.to(y => (1 - y) * 1256)}>
                            <circle cx="202" cy="202" r="190" />
                    </animated.svg>
                </div>
                <div className="fixedBR">
                    <animated.svg
                        style={{ width: 60, height: 60 }}
                        viewBox="0 0 404 404"
                        strokeWidth="10"
                        fill="lightblue"
                        stroke="purple"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray={1256}
                        strokeDashoffset={y.to(y => (1 - y) * 1256)}>
                            <circle cx="202" cy="202" r="190" />
                    </animated.svg>
                </div>
                
                {/* <div className="loaderSection sectionLeft"></div>
                <div className="loaderSection sectionRight"></div> */}
            </div>
        </React.Fragment>
    );
}

export default Loader;