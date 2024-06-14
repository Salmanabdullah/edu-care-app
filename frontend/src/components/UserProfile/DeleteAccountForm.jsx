import React from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';

const DeleteAccountForm = () => {
  const { user } = useAuthContext();

  const handleDeleteAccount = async () => {
    const confirmation = window.confirm('Are you sure you want to delete your account? This action cannot be undone.');
    if (!confirmation) {
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/user', {
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
      // Optionally, you can log the user out after account deletion
    } catch (error) {
      console.error(error);
      alert('Error deleting account');
    }
  };

  return (
    <div>
      <button onClick={handleDeleteAccount}>Delete Account</button>
    </div>
  );
};

export default DeleteAccountForm;