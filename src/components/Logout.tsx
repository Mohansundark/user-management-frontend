import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert('Logout successful');
      localStorage.removeItem('token');
      
    navigate('/home');
  };

  return (
    <button
      onClick={handleLogout}
      className="w-half p-2 mb-6 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
};

export default Logout;
