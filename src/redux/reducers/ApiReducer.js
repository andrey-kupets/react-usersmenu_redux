const initialState = {
    users: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS': return action.payload;
        default: return state;
    }
}