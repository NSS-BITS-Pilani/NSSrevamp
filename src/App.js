import React, { useEffect, useState } from 'react';
import "./App.scss";
import Main from './Components/Main';
import Loader from './Components/Loader/loader';

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './State/index';
import { getProfs } from './State/action-creators';

const App = () => {
    const [data, setData] = useState([]);
    const [completed, setCompleted] = useState(undefined);

    const dispatch = useDispatch();

    const { getProfs, getDepartments, getEvents, getInitiatives, getResources, getCoords} = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        getDepartments();
        getEvents();
        getInitiatives();
        getResources();
        getCoords();
        getProfs();

        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then((response) => response.json())
                .then((json) => {
                    setData(json);
                
                    setTimeout(() => {
                        setCompleted(true);
                    }, 2000);
                });
        }, 2000);
    }, []);
    return (
        <>
            {
                !completed ? (
                    <Loader />
                ) : (
                    <Main />
                )}
        </>
    );
}

export default App;