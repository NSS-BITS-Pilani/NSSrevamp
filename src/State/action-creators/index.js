import SanityClient from '../../client';

export const getDepartments = () => {

    return async (dispatch) => {

        const dataArray = await SanityClient.fetch('*[_type == "department"]');

        dispatch({
            type: "getDepartments",
            payload: dataArray
        })
    }
}


export const getEvents = () => {

    return async (dispatch) => {

        const dataArray = await SanityClient.fetch('*[_type == "event"]');

        dispatch({
            type: "getEvents",
            payload: dataArray
        })
    }
}

export const getInitiatives = () => {

    return async (dispatch) => {

        const dataArray = await SanityClient.fetch('*[_type == "initiative"]');

        dispatch({
            type: "getInitiatives",
            payload: dataArray
        })
    }
}

export const getResources = () => {

    return async (dispatch) => {

        const dataArray = await SanityClient.fetch('*[_type == "resource"]');

        dispatch({
            type: "getResources",
            payload: dataArray
        })
    }
}

export const getCoords = () => {

    return async (dispatch) => {

        const dataArray = await SanityClient.fetch('*[_type == "coordinator"]');

        dispatch({
            type: "getCoords",
            payload: dataArray
        })
    }
}

export const getLeaders = () => {

    return async (dispatch) => {

        const dataArray = await SanityClient.fetch('*[_type == "leader"]');

        dispatch({
            type: "getLeaders",
            payload: dataArray
        })
    }
}
