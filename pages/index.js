import { useState, useEffect } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

export default function Home() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const res = await fetch('/api/users');
        const data = await res.json();
        setUsers(data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Next.js CRUD App</h1>
            <UserForm onFormSubmit={fetchUsers} />
            <UserList users={users} onUserDelete={fetchUsers} />
        </div>
    );
}
