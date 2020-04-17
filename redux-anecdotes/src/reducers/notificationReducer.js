const notificationReducer = (state = '', action) => {
    if (action.type === 'NOTIFY') {
        return action.data
    } else {
        return state
    }
}


// export const notify = (notification) => {
//     return {
//         type: 'NOTIFY',
//         data: notification,
//     }
// }

let timeoutId;

export const notify = (notification, timeout) => {
    return async dispatch => {
        dispatch({
            type: 'NOTIFY',
            data: notification,
        })

    clearTimeout(timeoutId)
        
    timeoutId = setTimeout(() => {
            dispatch({
                type: 'NOTIFY',
                data: "",
            })
        }, timeout * 1000)

    }
}

export default notificationReducer