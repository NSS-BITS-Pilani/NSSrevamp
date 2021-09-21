 
const reducer = (state = [], action) => {
    switch (action.type) {
        case "getProfs":
            return action.payload;
        default:
            return state;
     }
}

export default reducer;