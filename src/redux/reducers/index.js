import { combineReducers } from "redux";
import users from './ApiReducer';
import detailUserInfo from './DetailInfoReducer';
import newUser from './UserReducer';
import editUserWindow from './EditReducer';
import createUserWindow from './CreateReducer';

export const reducer = combineReducers({
    users,
    detailUserInfo,
    newUser,
    editUserWindow,
    createUserWindow
});