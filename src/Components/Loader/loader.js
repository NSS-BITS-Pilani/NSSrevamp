import React, { useEffect, useState } from 'react';
import classes from "./loader.scss";

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../State/index';

import App from '../../App';



const Loader = () => {

    const [data, setData] = useState([]);
    const [completed, setCompleted] = useState(undefined);

    const dispatch = useDispatch();

    const { getDepartments, getEvents, getInitiatives, getResources, getCoords} = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        getDepartments();
        getEvents();
        getInitiatives();
        getResources();
        getCoords();

        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then((response) => response.json())
                .then((json) => {
                    setData(json);
                
                    setTimeout(() => {
                        setCompleted(true);
                    }, 1000);
            });
        }, 2000);
    }, []);
    return (
        <>
            {
                !completed ? (
                    <>
                        <div className={`${classes.loaderWrapper} loaderWrapper`}>
                            {/* ADD LOADER PAGE CONTENTS INSIDE THIS PARENT BLOCK ELEMENT */}
                            <div className="logo">
                                <img src="./assets/nss.svg" alt="NSS Logo" />
                            </div>
                            <h2 className="loaderText">nss bits pilani</h2>
                        </div>
                    </>
                ) : (
                    <App />
                )}
        </>
    );
}

export default Loader;