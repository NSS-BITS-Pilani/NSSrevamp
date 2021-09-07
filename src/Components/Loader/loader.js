import React, { useState } from "react";
import classes from "./loader.scss";
import { animated, useSpring } from 'react-spring'
import Logo from "./Logo";

const Loader = () => {
    // const [flip, set] = useState(false);
    // const springProps = useSpring({
    //     to: { opacity: 0 },
    //     from: { opacity: 1 },
    //     reset: true,
    //     reverse: flip,
    //     delay: 200,
    //     onRest: () => set(!flip)
    // });

    const textProps = useSpring({
        to: {
            opacity: 1,
            'letter-spacing': '0.5rem',
            'word-spacing': '0.8rem' },
        from: {
            opacity: 0,
            'letter-spacing': '0.9rem',
            'word-spacing': '1.75rem'
        },
        reset: false,
        delay: 2000,
    });

    const [flip, set] = useState(false);
    const { x } = useSpring({
        reset: true,
        reverse: flip,
        from: { x: 0 },
        x: 1,
        delay: 1000,
        onRest: () => set(!flip),
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
                            style={{ margin: 20, width: 310, height: 310 }}
                            viewBox="0 0 410 410"
                            strokeWidth="7"
                            fill="floralwhite"
                            stroke="rgb(45, 55, 71)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeDasharray={1256}
                            strokeDashoffset={x.to(x => (1 - x) * 1256)}>
                                <circle cx="205" cy="205" r="200" />
                        </animated.svg>
                    </div>
                </div>
                <div className="row">
                    <animated.h2 style={textProps} className="loaderText">nss bits pilani</animated.h2>
                </div>
                
                {/* <div className="loaderSection sectionLeft"></div>
                <div className="loaderSection sectionRight"></div> */}
            </div>
        </React.Fragment>
    );
}

export default Loader;