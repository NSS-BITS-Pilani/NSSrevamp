import React, { useEffect, useState } from 'react';
import classes from "./loader.scss";

import Lottie from 'react-lottie';
import * as location from './1055-world-locations.json'
import * as sucess from './1127-success.json'
import App from '../../App';

const defaultOptions1 = {
      loop: true,
      autoplay: true, 
      animationData: location.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    const defaultOptions2 = {
      loop: true,
      autoplay: true, 
      animationData: sucess.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

const Loader = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(undefined);
    const [completed, setCompleted] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then((response) => response.json())
                .then((json) => {
                    setData(json);
                    setLoading(true);
                
                    setTimeout(() => {
                        setCompleted(true);
                    }, 1000);
            });
        }, 5000);
    }, []);
    return (
        <>
            {
                !completed ? (
                    <div className={`${classes.loaderWrapper} loaderWrapper`}>
                          {/* ADD LOADER PAGE CONTENTS INSIDE THIS PARENT BLOCK ELEMENT */}
                            <img src="./assets/nsslogo.svg" />
                    </div>
                    // {
                    //     !loading ? (
                    //         <>
                    //         {/* ADD LOADER PAGE CONTENTS INSIDE THIS PARENT BLOCK ELEMENT */}
                    //             <img src="./assets/nsslogo.svg" />
                    //         </>
                    //     )
                    //     :   <Lottie options={defaultOptions2} height={100}width={100}/>
                    // }
                ) : (
                    <App />
                )}
        </>
    );
}

export default Loader;