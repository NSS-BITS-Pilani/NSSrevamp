import React, { useState } from "react";
import classes from "./loader.scss";
import { animated, useSpring } from 'react-spring';
//import Particles from "react-particles-js";
//import ParticleConfig from "./particle-config";
import Logo from "./Logo";

const Loader = () => {

    const textProps = useSpring({
        to: {
            opacity: 1,
            'letter-spacing': '0.1rem',
            'word-spacing': '0.4rem' 
        },
        from: {
            opacity: 0,
            'letter-spacing': '0.2rem',
            'word-spacing': '0.8rem'
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
                
                <div className="logo">
                    <div className="logoComponent">
                        <Logo />
                    </div>
                    <div className="ringReveal">
                        <animated.svg
                            style={{ width: 256, height: 256 }}
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
                <div className="textAnim">
                    <animated.h2 style={textProps} className="loaderText">nss bits pilani</animated.h2>
                    <animated.h2 style={textProps} className="loaderText">nss bits pilani</animated.h2>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Loader;