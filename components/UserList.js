const UserList = ({ users, onUserDelete }) => {
    const handleDelete = async (id) => {
        const res = await fetch('/api/users', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });

        if (res.ok) {
            onUserDelete(); // Refresh the user list
        }
    };

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} ({user.email})
                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default UserList;
