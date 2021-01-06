export  default function EditUserWindow(props) {

const {detailUserInfo} = props;
const {name, username, email, phone, website} = detailUserInfo;

    return (
        <div>
            <h3>USER EDITION MENU:</h3>
            <div>
                <label>Name:</label>
                <input  type="text" defaultValue={name}/>
            </div>
            <div>
                <label>UserName:</label>
                <input type="text" defaultValue={username}/>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" defaultValue={email}/>
            </div>
            <div>
                <label>Phone:</label>
                <input type="text" defaultValue={phone}/>
            </div>
            <div>
                <label>Website:</label>
                <input type="text" defaultValue={website}/>
            </div>
            <div>
                <button >Save</button>
                <button >Cancel</button>
            </div>
        </div>
    )
}