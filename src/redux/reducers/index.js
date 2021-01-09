import { combineReducers } from "redux";
import users_State from './apiReducer';
import detailUserInfo_State from './detailInfoReducer';
import singleUser_State from './userReducer';
import editUserWindow_State from './editReducer';
import createUserWindow_State from './createReducer';

export const reducer = combineReducers({
    users_State,
    detailUserInfo_State,
    singleUser_State,
    editUserWindow_State,
    createUserWindow_State
});