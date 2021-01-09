import {useDispatch, useSelector} from "react-redux";
import {setNewName, setNewUsername, setNewEmail, setNewPhone, setNewWebsite} from "../../redux/action-creators";

export default function CreateUserWindow({createUser}) {
    const singleUser = useSelector(({singleUser_State: {singleUser}}) => singleUser);
    const dispatch = useDispatch();

    const inputName = (e) => dispatch(setNewName(e.target.value));
    const inputUsername = (e) => dispatch(setNewUsername(e.target.value));
    const inputEmail = (e) => dispatch(setNewEmail(e.target.value));
    const inputPhone = (e) => dispatch(setNewPhone(e.target.value));
    const inputWebsite = (e) => dispatch(setNewWebsite(e.target.value));

    return (
        <div>
            <h3>USER CREATION MENU:</h3>
            <div>
                <label>Name:</label>
                <input onInput={inputName} type="text"/>
            </div>
            <div>
                <label>UserName:</label>
                <input onInput={inputUsername} type="text"/>
            </div>
            <div>
                <label>Email:</label>
                <input onInput={inputEmail} type="text"/>
            </div>
            <div>
                <label>Phone:</label>
                <input onInput={inputPhone} type="text"/>
            </div>
            <div>
                <label>Website:</label>
                <input onInput={inputWebsite} type="text"/>
            </div>
            <div>
                <button onClick={() => createUser('create', singleUser)}>Create</button>
                <button onClick={createUser}>Cancel</button>
            </div>
        </div>
    )
}