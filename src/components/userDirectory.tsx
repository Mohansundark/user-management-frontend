import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import { Link, Navigate } from 'react-router-dom';

const UserDirectory: React.FC = () => {
  const [users, setUsers] = useState<{ id: string, name: string, email: string }[]>([]);
  const [error, setError] = useState('');
    const [id, setId] = useState('');
    const [loading, setLoading] = useState(true);
    const [getUserById, setGetUserById] = useState(false);
    const [getUsers, setGetUsers] = useState(false);

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUsers = async () => {
        try {
          
        const response = await api.get('/api/users');
            setUsers(response.data.data);
            setLoading(false)
      } catch (err) {
        setError('Failed to fetch users');
      }
    };
    fetchUsers();
  }, [getUsers]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (id === '') {
      setError('Please enter an ID');
      return;
    }
    try {
      const response = await api.get(`/api/users/${id}`);
        setUsers([response.data.data]); // Assuming response returns a single user object
        setError('');
      setGetUserById(!getUserById); // Hide the search form after fetching
    } catch (err) {
      setError('Failed to fetch user');
    }
    };
    if (loading) {
        return <div className="profile max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">Loading...</div>;
      }

  return (
      <>
          
          <div className="user-directory ml-100 max-w-lg mx-auto mt-20 p-6 bg-white rounded-lg ">
              <Link to = "/home" className="w-half bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600">Home</Link>
          <button className="w-half ml-5  p-2 mt-5 mb-6 bg-blue-500 text-white rounded hover:bg-red-600"
              onClick={() => { setGetUsers(!getUsers); setGetUserById(false) }}> Get All Users </button>
      <button
        className="w-half ml-10  p-2 mb-6 bg-red-500 text-white rounded hover:bg-blue-600"
        onClick={() => setGetUserById(true)}
      >
        Get User By Id
              </button>
              </div>
      {getUserById ? (
        <form className="user-directory  max-w-md mx-auto p-6 bg-white rounded-lg shadow-md" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter ID..."
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button type="submit" className="mt-2 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Search
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      ) : (
        <div className="user-directory ml-45 max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
                      <h1 className="text-xl font-bold mb-4">User Directory</h1>
                      
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <ul>
            {users.map((user) => (
              <li key={user.id} className="p-2 border-b hover:bg-gray-300">
                <p className="font-bold">{user.name}</p>
                <p className="text-gray-600">{user.email}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default UserDirectory;
