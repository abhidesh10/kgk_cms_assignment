let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return res.status(200).json(users); // Get all users

        case 'POST':
            const newUser = { id: Date.now(), ...req.body };
            users.push(newUser);
            return res.status(201).json(newUser); // Create a new user

        case 'PUT':
            const updatedUser = req.body;
            users = users.map(user =>
                user.id === updatedUser.id ? updatedUser : user
            );
            return res.status(200).json(updatedUser); // Update an existing user

        case 'DELETE':
            const { id } = req.body;
            users = users.filter(user => user.id !== id);
            return res.status(200).json({ message: 'User deleted' }); // Delete user

        default:
            return res.status(405).end(); // Method Not Allowed
    }
}
