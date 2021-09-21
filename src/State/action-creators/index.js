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

        const dataArray = await SanityClient.fetch('*[_type == "event"]{title, body, color, "logo_url":logo.asset->url}');

        dispatch({
            type: "getEvents",
            payload: dataArray
        })
    }
}

export const getInitiatives = () => {

    return async (dispatch) => {

        const dataArray = await SanityClient.fetch('*[_type == "initiative"]{title, information, eventType, srno, "imageurl":image.asset->url}');

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

        const dataArray = await SanityClient.fetch('*[_type == "coordinator"]{name,srno, linkedin, designation, "imgurl":profilepic.asset->url}');

        dispatch({
            type: "getCoords",
            payload: dataArray
        })
    }
}

export const getProfs = () => {

    return async (dispatch) => {

        const dataArray = await SanityClient.fetch('*[_type == "prof"]{name,srno, bitsprofile, designation, "imgurl":profilepic.asset->url}');

        dispatch({
            type: "getProfs",
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
