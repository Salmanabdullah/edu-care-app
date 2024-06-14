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
    <div className="p-4">
      <h1 className="block text-xl mb-4 leading-6 text-gray-100">Update Password</h1>
      <form onSubmit={handleSubmit} className='space-y-2'>
        <div>
          <label htmlFor="oldPassword" className="text-xl leading-6 text-gray-100">Old Password:</label>
          <input
            type="password"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
            autoComplete="current-password"
            className='rounded-lg border-0 ml-2 py-1.5 px-2 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
        <div>
          <label htmlFor="newPassword" className="text-xl leading-6 text-gray-100">New Password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            autoComplete="new-password"
            className='rounded-lg border-0 ml-2 py-1.5 px-2 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>

        <div>
          <label htmlFor="confirmNewPassword" className="text-xl leading-6 text-gray-100">Confirm New Password:</label>
          <input
            type="password"
            id="confirmNewPassword"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            required
            autoComplete="confirm-new-password"
            className='rounded-lg border-0 ml-2 py-1.5 px-2 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>

        <button type="submit" className="text-white text-lg border-2 bg-gray-500 px-4 py-1 rounded-lg hover:bg-sky-900">Update Password</button>
      </form>
      {message && <p className="text-white text-2xl py-4">{message}</p>}
    </div>
  );
};

export default ChangePasswordForm;
