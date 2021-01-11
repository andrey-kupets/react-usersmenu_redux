import {SET_USERS,UPDATE_USER} from '../action-types';

const initialState = {
    users: null,
    // asd: 'ho-ho'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            console.log('SET_USERS');
            console.log(action.payload);
            return {...state, users: action.payload};

        }
        case UPDATE_USER: {
            console.log('UPDATE_USER', action,state);
            const {users} = state
            const {payload} = action
            const newUserList = users.filter(user => user.id !== payload.id);
            console.log('newUserList',newUserList);
            newUserList.push(payload);
            newUserList.sort((a, b) => a.id - b.id)
            return {...state, users: newUserList};
        }
        default: return state;
    }
}
