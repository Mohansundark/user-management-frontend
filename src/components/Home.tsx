import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import Profile from './Profile';
import UserDirectory from './userDirectory';

const HomePage: React.FC = () => {
    const token = localStorage.getItem('token');
    const {name } = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <div className="container mx-auto mt-20 p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to User Management</h1>
      {!token ? (
        <div>
          <p>Please login or register to continue.</p>
          <div className="mt-4">
            <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Login</Link>
                      <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded mr-4">Register</Link>
                      <Link to="/users" className="bg-red-500 text-white px-4 py-2 rounded">User Directory</Link>
          </div>
        </div>
      ) : (
        <div>
          <p>You are logged in.</p>
          <div className="mt-4">
                          <Link to="/profile" className="bg-blue-500 text-white px-4 py-2 rounded mr-4">Go to Profile</Link>
                          <Link to="/users" className="bg-green-500 text-white px-4 py-2 rounded mr-6">User Directory</Link>
            <Logout />
          </div>
        </div>
          )}
          
    </div>
  );
};

export default HomePage;