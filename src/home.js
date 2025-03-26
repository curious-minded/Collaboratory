// home.js
import React from 'react';
import { auth } from './firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import './styles.css'

const Home = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome, {user && (user.displayName || user.email)}!</h1>
      <h2>Welcome To Collaboratory!</h2>
      <button onClick={handleLogout} style={{ padding: '10px 20px' }}>
        Log Out
      </button>
    </div>
  );
};

export default Home;
