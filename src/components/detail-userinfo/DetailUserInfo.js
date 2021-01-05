export default function ProvideDetails(props) {
    const {detailUserInfo} = props;
    const {id, name, username, email, phone, website} = detailUserInfo;
    return (
        <div>
            <h3>DETAIL USERINFO:</h3>
            <div><span><u>#Id - Name:</u></span> {id} - {name}</div>
            <div><span><u>Username:</u></span> {username}</div>
            <div><span><u>Email:</u></span> {email}</div>
            <div><span><u>Phone:</u></span> {phone}</div>
            <div><span><u>Website:</u></span> {website}</div>
            <div>
                <button>Edit User</button>
                <button>Delete User</button>
            </div>

        </div>
    )
}