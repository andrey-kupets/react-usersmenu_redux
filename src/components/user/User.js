export default function RenderUser(user, showDetails) {
    // const {user: {id, name}, user, showDetails} = props;
    const {id, name} = user;
    return (
        <div>
            {id} - {name}
            <button onClick={() => {showDetails(user)}}> Details...</button>
        </div>
    )
}