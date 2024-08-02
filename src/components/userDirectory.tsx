import React, { useEffect, useState } from 'react';
import api from '../utils/api';

const UserDirectory: React.FC = () => {
    const [users, setUsers] = useState<{id:string, name: string, email: string }[]>([]);
  const [error, setError] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/api/users');
        setUsers(response.data.data);
      } catch (err) {
        setError('Failed to fetch users');
      }
    };
    fetchUsers();
  }, [token]);

    return (
      
    <div className="user-directory max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">User Directory</h1>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id} className="p-2 border-b hover:bg-gray-300">
            <p className="text font-bold">{user.name}</p>
            <p className="text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDirectory;
