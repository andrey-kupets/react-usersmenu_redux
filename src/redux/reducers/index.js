import { combineReducers } from "redux";
import users_State from './ApiReducer';
import detailUserInfo_State from './DetailInfoReducer';
import singleUser_State from './UserReducer';
import editUserWindow_State from './EditReducer';
import createUserWindow_State from './CreateReducer';

export const reducer = combineReducers({
    users_State,
    detailUserInfo_State,
    singleUser_State,
    editUserWindow_State,
    createUserWindow_State
});