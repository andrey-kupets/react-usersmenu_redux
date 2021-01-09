import './UserList.css';
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import actFetchApi from "../../service/fetch-api/ActFetchApi";
import { withRouter } from "react-router-dom";
import RenderUser from "../user/User";
import Loading from "../../service/loading/Loading";
import ProvideDetails from "../detail-userinfo/DetailUserInfo";
import EditUserWindow from "../editUser-window/EditUserWindow";
import {SET_USERS, SET_DETAILS, EDITION_MENU_IS_VISIBLE, CREATION_MENU_IS_VISIBLE} from '../../redux/action-types';
import CreateUserWindow from "../createUser-window/CreateUserWindow";

function RenderUserList({match: {url}}) {
    const {users} = useSelector(({users_State: {users}}) => ({users}));
// console.log(users)
// const {users} = useSelector((state) => {
//         console.log('useSelector');
//         console.log(state.users);
//         return state.users
//     });
//     const {users,asd} = useSelector(({users}) => {
//         console.log('useSelector');
//         console.log(users);
//         return users
//     });
    const {detailUserInfo} = useSelector(({detailUserInfo_State: {detailUserInfo}}) =>
    ({detailUserInfo}));
    const {editUserWindow} = useSelector(({editUserWindow_State: {editUserWindow}}) =>
    ({editUserWindow}));
    const {createUserWindow} = useSelector(({createUserWindow_State: {createUserWindow}}) =>
        ({createUserWindow}));

    const dispatch = useDispatch();

    const showDetails = (info) => {
        dispatch({type: SET_DETAILS, payload: info})
    }

    const showEditUserWindow = () => {
        dispatch({type: EDITION_MENU_IS_VISIBLE, payload: 'visible'});
    };

    const deleteUser = (id) => {
        const newUserList = users.filter(user => user.id !== id);
        dispatch({type: SET_USERS, payload: newUserList});
        dispatch({type: SET_DETAILS, payload: null});
        dispatch({type: EDITION_MENU_IS_VISIBLE, payload: ''});
    };

    const saveEditedUser = (btnName, editedUser) => {
        if (btnName === 'save') {
            const newUserList = users.filter(user => user.id !== editedUser.id);
            newUserList.push(editedUser);
            newUserList.sort((a, b) => a.id - b.id)
            dispatch({type: SET_USERS, payload: newUserList});
            dispatch({type: SET_DETAILS, payload: editedUser})
        } dispatch({type: 'EDITION_MENU_IS_VISIBLE', payload: ''});
    };

    const showCreateUserWindow = () => {
        dispatch({type: CREATION_MENU_IS_VISIBLE, payload: 'visible'});
    };

    const createUser = (btnName, createdUser) => {
        if (btnName === 'create') {
            createdUser.id = users[users.length - 1].id + 1;
            users.push(createdUser);
            dispatch({type: SET_USERS, payload: users});
        } dispatch({type: 'CREATION_MENU_IS_VISIBLE', payload: ''});
    }

    useEffect(() => {
    // const {match: {url}} = props;
    actFetchApi(url).then(json => dispatch({type: SET_USERS, payload: json}));
    }, []);

    if (!!users) {
        return (
            <div className={'parent'}>
                <div>
                    <h3>USERS LIST:</h3>
                    {!!users && users.map(user => <RenderUser user={user} key={user.id} showDetails={showDetails}/>)}
                    <button onClick={showCreateUserWindow}>Create User</button>
                </div>
                {!!detailUserInfo && <ProvideDetails detailUserInfo={detailUserInfo} showEditUserWindow={showEditUserWindow} deleteUser={deleteUser}/>}
                {!!editUserWindow && <EditUserWindow detailUserInfo={detailUserInfo} saveEditedUser={saveEditedUser}/>}
                {!!createUserWindow && <CreateUserWindow createUser={createUser}/>}
            </div>
        );
    } return (
        <div>
            <h3>Pending USERS LIST:</h3>
            <Loading/>
        </div>
    );
}

export default withRouter(RenderUserList);
