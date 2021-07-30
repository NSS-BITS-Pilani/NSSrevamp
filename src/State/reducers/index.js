import { combineReducers } from "redux";
import departmentsReducer from './departmentsReducer';
import eventsReducer from './eventsReducer';
import initiativesReducer from './initiativesReducer';
import resourcesReducer from './resourcesReducer';

const reducers = combineReducers({
    departments: departmentsReducer,
    events: eventsReducer,
    initiatives: initiativesReducer,
    resources: resourcesReducer
});

export default reducers;

