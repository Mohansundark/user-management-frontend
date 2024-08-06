import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import Logout from './Logout'; // Import the Logout component

const Profile: React.FC = () => {
  const [profile, setProfile] = useState({ name: '', email: '', bio: '' });
  const [error, setError] = useState('');
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
        try {
        
        const response = await api.get('/api/user/profile');
        setProfile(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch profile');
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        await api.put('/api/user/profile/edit', profile);
        alert('Profile updated successfully');
      setEditing(false);
      setError(''); // Clear any previous errors
    } catch (err) {
      setError('Failed to update profile');
    }
  };

  if (loading) {
    return <div className="profile max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">Loading...</div>;
  }

  return (
    <div className="profile max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
     
      {editing ? (
        <form onSubmit={handleEdit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Bio"
            value={profile.bio}
            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Save</button>
          <button
            type="button"
            onClick={() => setEditing(false)}
            className="w-full p-2 mt-2 bg-gray-500 text-white rounded"
          >
            Cancel
          </button>
        </form>
      ) : (
        <>
          <h1 className="text-xl font-bold">{profile.name}</h1>
          <p className="text-gray-600">{profile.email}</p>
          <p className="text-gray-600">{profile.bio}</p>
          <div className="flex space-x-10 mt-4">
            <button
              onClick={() => setEditing(true)}
              className="w-half p-2 mb-6 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Edit Profile
            </button>
            <Logout />
          </div>
        </>
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Profile;
// export default fetchProfile
