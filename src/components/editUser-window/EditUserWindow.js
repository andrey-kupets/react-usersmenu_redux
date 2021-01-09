import { useDispatch, useSelector } from "react-redux";
import {
    INPUT_NAME,
    INPUT_USERNAME,
    INPUT_EMAIL,
    INPUT_PHONE,
    INPUT_WEBSITE
} from '../../redux/action-types';

export default function EditUserWindow(props) {

const {detailUserInfo, saveEditedUser} = props;
const {name, username, email, phone, website} = detailUserInfo;
    console.log(detailUserInfo);

const {singleUser} = useSelector(({singleUser_State: {singleUser}}) => ({singleUser}))
    // console.log(singleUser_State)
    console.log(singleUser);
const dispatch = useDispatch();

//todo зібрати юзіка тут і потім пхати у стор
const inputName = (e) => dispatch({type: INPUT_NAME, payload: e.target.value});
const inputUsername = (e) => dispatch({type: INPUT_USERNAME, payload: e.target.value});
const inputEmail = (e) => dispatch({type: INPUT_EMAIL, payload: e.target.value});
const inputPhone = (e) => dispatch({type: INPUT_PHONE, payload: e.target.value});
const inputWebsite = (e) => dispatch({type: INPUT_WEBSITE, payload: e.target.value});

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
                <button onClick={() => saveEditedUser('save', singleUser)}>Save</button>
                <button >Cancel</button>
            </div>
        </div>
    )
}
