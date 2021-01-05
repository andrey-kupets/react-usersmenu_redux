import './UserList.css';
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import actFetchApi from "../../service/fetch-api/ActFetchApi";
import {withRouter} from "react-router-dom";
import RenderUser from "../user/User";

function RenderUserList({match: {url}}) {

    // const {users} = useSelector((state) => {
    //     console.log('useSelector');
    //     console.log(state);
    //     return state.users
    // });
    const {users,asd} = useSelector(({users}) => {
        console.log('useSelector');
        console.log(users);
        return users
    });

    console.log('users',users);
    console.log('asd',asd);

    const dispatch = useDispatch();

    useEffect(() => {

        actFetchApi(url).then(users =>
            dispatch({type: 'SET_USERS', payload: users}));

    }, []);
    console.log('----------------------');
    console.log(!!users);
    console.log('----------------------');
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
