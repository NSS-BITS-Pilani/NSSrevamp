 
const reducer = (state = [], action) => {
    switch (action.type) {
        case "getLeaders":
            return action.payload;
        default:
            return state;
     }
}

export default reducer;