export default function RenderUser(props) {
    const {user: {id, name}} = props;
    return (
        <div>
            {id} - {name}
        </div>
    )
}