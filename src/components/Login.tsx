import React, { useState } from 'react';
import api from '../utils/api';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/login', { email, password });
        localStorage.setItem('token', response.data.data.token);
        alert('Login successful');
      navigate('/home');
    } catch (err: any) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
          alert('Login failed');
        setError('Login failed');
      }
    }
  };

    return (
      
    <div className="login max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Login
        </button>
        {error && <p className="text-red-500">{error}</p>}
            </form>
            <button className="w-full p-2 bg-red-500 text-white rounded mt-4" onClick={() => navigate('/register')}>Register</button>
    </div>
  );
};

export default Login;
