import './UserList.css';
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import actFetchApi from "../../service/fetch-api/ActFetchApi";
import { withRouter } from "react-router-dom";
import RenderUser from "../user/User";
import Loading from "../../service/loading/Loading";
import ProvideDetails from "../detail-userinfo/DetailUserInfo";

function RenderUserList({match: {url}}) {
const {users} = useSelector(({users_State: {users}}) => ({users}));
// console.log(users)
// const {users} = useSelector((state) => {
//         console.log('useSelector');
//         console.log(state.users);
//         return state.users
//     });
    // const {users,asd} = useSelector(({users}) => {
    //     console.log('useSelector');
    //     console.log(users);
    //     return users
    // });
const {detailUserInfo} = useSelector(({detailUserInfo_State: {detailUserInfo}}) =>
({detailUserInfo}));

const dispatch = useDispatch();

const showDetails = (info) => {
    dispatch({type: 'SET_DETAILS', payload: info})
}

useEffect(() => {
    // const {match: {url}} = props;
    actFetchApi(url).then(json => dispatch({type: 'SET_USERS', payload: json}));
    }, []);

    if (!!users) {
        return (
            <div className={'parent'}>
                <div>
                    <h3>USERS LIST:</h3>
                    {!!users && users.map(user => <RenderUser user={user} key={user.id} showDetails={showDetails}/>)}
                    <button>Create User</button>
                </div>
                {!!detailUserInfo && <ProvideDetails detailUserInfo={detailUserInfo}/>}
                <div>1</div>
                <div>1</div>
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