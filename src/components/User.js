export default function User(props) {
    const {id, name, username} = props;

    return (
        <div>
            {id} - {name} - {username}
        </div>
    );
};
