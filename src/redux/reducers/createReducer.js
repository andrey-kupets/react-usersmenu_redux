import {CREATION_MENU_IS_VISIBLE} from '../action-types';

const initialState = {
    createUserWindow: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATION_MENU_IS_VISIBLE: return {...state, createUserWindow: action.payload};
        default: return state;
    }
};