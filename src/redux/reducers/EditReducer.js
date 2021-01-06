const initialState = {
    editUserWindow: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'EDITION_MENU_IS_VISIBLE': return {...state, editUserWindow: action.payload};
        default: return state;
    }
}