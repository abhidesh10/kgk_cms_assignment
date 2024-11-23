import { useState } from 'react';

const UserForm = ({ onFormSubmit }) => {
    const [user, setUser] = useState({ name: '', email: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (res.ok) {
            setUser({ name: '', email: '' });
            onFormSubmit(); // Refresh the user list
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <button type="submit">Add User</button>
        </form>
    );
};

export default UserForm;
