import {useEffect, useState} from 'react';
import User from './components/User';

export default function App() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                setUsers(users);
            })
    }, []);

    return (
        <div>
            {users.map(value => <User key={value.id} id={value.id} name={value.name} username={value.username}/>)}
        </div>
    );
}
