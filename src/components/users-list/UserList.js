import './UserList.css';
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import actFetchApi from "../../service/fetch-api/ActFetchApi";
import { withRouter } from "react-router-dom";
import RenderUser from "../user/User";

function RenderUserList(props) {
const {users} = useSelector(({users: {users}}) => ({users}));
console.log(users)

const dispatch = useDispatch();

useEffect(() => {
    const {match: {url}} = props;
    actFetchApi(url).then(json => dispatch({type: 'SET_USERS', payload: json}));
    }, []);

    return (
        <div className={'parent'}>
            <div>
                <h3>USERS LIST:</h3>
                {!!users && users.map(user => <RenderUser user={user} key={user.id}/>)}
                <button>Create User</button>
            </div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
        </div>
    )
}

export default withRouter(RenderUserList);