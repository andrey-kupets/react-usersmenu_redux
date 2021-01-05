const initialState = {
    users: null,
    // asd: 'ho-ho'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS': {
            // console.log('SET_USERS');
            // console.log(action.payload);
            return {...state, users: action.payload};

        }
        default: return state;
    }
}
