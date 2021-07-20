 
const reducer = (state = [], action) => {
    switch (action.type) {
        case "getDepartments":
            return action.payload;
        default:
            return state;
     }
}

export default reducer;