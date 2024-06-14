import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const ChangePasswordForm = () => {
  const { user } = useAuthContext();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/user/update-password", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({
            oldPassword,
            newPassword,
            confirmNewPassword,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("Password updated successfully!");
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      setMessage("An error occurred while updating the password");
    }
  };

  return (
    <div className="profile">
      <h2>Update Password</h2>
      <form onSubmit={handleSubmit} className='space-y-2'>
        <div>
          <label htmlFor="oldPassword">Old Password:</label>
          <input
            type="password"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>
        <div>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
        </div>

        <div>
          <label htmlFor="confirmNewPassword">Confirm New Password:</label>
          <input
            type="password"
            id="confirmNewPassword"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            required
            autoComplete="confirm-new-password"
          />
        </div>

        <button type="submit" className="text-white text-lg border-2 bg-gray-500 px-4 py-1 rounded-lg hover:bg-sky-900">Update Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ChangePasswordForm;
