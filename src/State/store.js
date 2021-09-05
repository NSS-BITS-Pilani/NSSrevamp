import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

export const ConfigureStore = () => {
    const store = createStore(
        reducers,
        {},
        applyMiddleware(thunk)
    );
    return store;
};

