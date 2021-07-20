 
const reducer = (state = [], action) => {
    switch (action.type) {
        case "getEvents":
            return action.payload;
        default:
            return state;
     }
}

export default reducer;