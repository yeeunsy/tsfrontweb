import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users () {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {``
        const fetchUsers = async () => {
            try {
                setError(null);
                setUsers(null);

                setLoading(true);
                const response = await axios.get(
                    'https://'
                );
                setUsers(response.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchUsers();
    }, []);

    if (loading) return <div>Loading ...</div>;
    if (error) return <div>error !</div>;
    if (!users) return null;
    return (
        <ul>
            {users.map(user => {
                <li key={user.id}>
                    {user.name} ({user.id})
                </li>
            })}
        </ul>
    );
}

export default Users;