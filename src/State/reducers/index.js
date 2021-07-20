import { combineReducers } from "redux";
import departmentsReducer from './departmentsReducer';
import eventsReducer from './eventsReducer';
import initiativesReducer from './initiativesReducer';

const reducers = combineReducers({
    departments: departmentsReducer,
    events: eventsReducer,
    initiatives: initiativesReducer
});

export default reducers;

