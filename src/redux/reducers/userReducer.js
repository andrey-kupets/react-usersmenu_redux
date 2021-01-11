import {
    INPUT_NAME,
    INPUT_USERNAME,
    INPUT_EMAIL,
    INPUT_PHONE,
    INPUT_WEBSITE,
    INPUT_ID
} from '../action-types';

const initialState = {
    singleUser: {
        id: '...missed data',
        name: '...missed data',
        username: '...missed data',
        email: '...missed data',
        phone: '...missed data',
        website: '...missed data'
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INPUT_NAME: return { ...state, singleUser:
            { ...state.singleUser, name: action.payload}};
        case INPUT_USERNAME: return { ...state, singleUser:
            { ...state.singleUser, username: action.payload}};
        case INPUT_EMAIL: return { ...state, singleUser:
            { ...state.singleUser, email: action.payload}};
        case INPUT_PHONE: return { ...state, singleUser:
            { ...state.singleUser, phone: action.payload}};
        case INPUT_WEBSITE: return { ...state, singleUser:
            { ...state.singleUser, website: action.payload}};
        case INPUT_ID: return { ...state, singleUser:
            { ...state.singleUser, id: action.payload}};
        default: return state;
    }
}
