import { useDispatch, useSelector } from "react-redux";
import { useReducer } from 'react';

import { INPUT_NAME, INPUT_USERNAME, INPUT_EMAIL, INPUT_PHONE, INPUT_WEBSITE} from '../../redux/action-types';
import {setNewName, setNewUsername, setNewEmail, setNewPhone, setNewWebsite} from '../../redux/action-creators';
export default function EditUserWindow(props) {

    const {detailUserInfo, saveEditedUser} = props;
    const {name, username, email, phone, website} = detailUserInfo;

// const {singleUser} = useSelector(({singleUser_State: {singleUser}}) => ({singleUser}))
//     console.log(singleUser);
// const dispatch = useDispatch();

//todo зібрати юзіка тут і потім пхати у стор
// todo неможна зробити це за допомогою 'redux', тільки {useReducer} from 'react'

    const editedUserReducer = (state, action) => {
        switch (action.type) {
            case INPUT_NAME: return {...state, name: action.payload};
            case INPUT_USERNAME: return {...state, username: action.payload};
            case INPUT_EMAIL:return {...state, email: action.payload};
            case INPUT_PHONE: return {...state, phone: action.payload};
            case INPUT_WEBSITE: return {...state, website: action.payload};
            default: return state;
        }
    };
    const [editedUser, dispatchEditedUser] = useReducer(editedUserReducer, detailUserInfo);

    const inputName = (e) => dispatchEditedUser(setNewName(e.target.value));
    const inputUsername = (e) => dispatchEditedUser(setNewUsername(e.target.value));
    const inputEmail = (e) => dispatchEditedUser(setNewEmail(e.target.value));
    const inputPhone = (e) => dispatchEditedUser(setNewPhone(e.target.value));
    const inputWebsite = (e) => dispatchEditedUser(setNewWebsite(e.target.value));

    return (
        <div>
            <h3>USER EDITION MENU:</h3>
            <div>
                <label>Name:</label>
                <input onInput={inputName} type="text" defaultValue={name}/>
            </div>
            <div>
                <label>UserName:</label>
                <input onInput={inputUsername} type="text" defaultValue={username}/>
            </div>
            <div>
                <label>Email:</label>
                <input onInput={inputEmail} type="text" defaultValue={email}/>
            </div>
            <div>
                <label>Phone:</label>
                <input onInput={inputPhone} type="text" defaultValue={phone}/>
            </div>
            <div>
                <label>Website:</label>
                <input onInput={inputWebsite} type="text" defaultValue={website}/>
            </div>
            <div>
                <button onClick={() => saveEditedUser('save', editedUser)}>Save</button>
                <button onClick={saveEditedUser}>Cancel</button>
            </div>
        </div>
    )
}
