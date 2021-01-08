import {
    INPUT_NAME,
    INPUT_USERNAME,
    INPUT_EMAIL,
    INPUT_PHONE,
    INPUT_WEBSITE
} from '../action-types';

const initialState = {
    singleUser: null
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
        default: return state;
    }
}