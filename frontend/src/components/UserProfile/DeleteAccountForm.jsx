import React from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import {useNavigate} from "react-router-dom"

const DeleteAccountForm = () => {
  const { user,logout } = useAuthContext();
  const navigate = useNavigate()

  const handleDeleteAccount = async () => {
    const confirmation = window.confirm('Are you sure you want to delete your account? This action cannot be undone.');
    if (!confirmation) {
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/user/:id', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete account');
      }

      alert('Account deleted successfully');
      
      logout()
      navigate('/')
    } catch (error) {
      console.error(error);
      alert('Error deleting account');
    }
  };

  return (
    <div className="p-4">
      <button onClick={handleDeleteAccount} className="text-white text-lg border-2 bg-gray-500 px-4 py-1 rounded-lg hover:bg-sky-900">Delete Account</button>
    </div>
  );
};

export default DeleteAccountForm;