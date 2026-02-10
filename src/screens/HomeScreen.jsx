import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import PrimaryButton from '../components/PrimaryButton';

function HomeScreen() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const username = user?.name || localStorage.getItem('username');

  return (
    <div className="home-screen-container">
      <h1>Welcome{username ? `, ${username}` : ''}!</h1>
      <PrimaryButton onClick={handleLogout}>Logout</PrimaryButton>
    </div>
  );
}

export default HomeScreen;