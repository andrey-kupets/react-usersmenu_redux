export default function RenderUser(props) {
    const {user: {id, name}, user, showDetails} = props;
    return (
        <div>
            {id} - {name}
            <button onClick={() => {showDetails(user)}}> Details...</button>
        </div>
    )
}