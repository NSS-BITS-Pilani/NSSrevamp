 
const reducer = (state = [], action) => {
    switch (action.type) {
        case "getInitiatives":
            return action.payload;
        default:
            return state;
     }
}

export default reducer;