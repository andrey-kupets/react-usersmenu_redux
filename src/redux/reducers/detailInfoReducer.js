import {SET_DETAILS} from '../action-types';


const initialState = {
    detailUserInfo: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DETAILS: return {...state, detailUserInfo: action.payload}
        default: return state;
    }
}