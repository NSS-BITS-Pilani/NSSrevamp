import React, { useState } from "react";
import classes from "./loader.scss";
import { animated, useSpring } from 'react-spring'

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

    return (
        <React.Fragment>
            <div className={`${classes.loaderWrapper} loaderWrapper container-fluid`}>
                {/* <animated.div style={springProps} className="logo row">
                    <img src="./assets/nss.svg" alt="NSS Logo" />
                </animated.div> */}
                <div className="logo row">
                    <img src="./assets/nss.svg" alt="NSS Logo" />
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