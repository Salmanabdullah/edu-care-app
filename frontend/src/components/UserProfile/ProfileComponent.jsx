import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import ChangeAddressForm from "./ChangeAddressForm";
import ChangePasswordForm from "./ChangePasswordForm";
import DeleteAccountForm from "./DeleteAccountForm";

const ProfileComponent = () => {
  const { user } = useAuthContext();
  const [currentUser, setCurrentUser] = useState(null);
  const [activeForm, setActiveForm] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/user/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });

        const data = await response.json();
        setCurrentUser(data);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    if (user) {
      fetchUserData();
    }
  }, [user]);

  return (
    <div className="bg-gray-500">
      <div className="bg-gray-800 p-4 text-xl flex space-x-8 justify-center">
        <button onClick={() => setActiveForm("changePassword")} className="text-white text-lg bg-gray-500 px-4 py-1 rounded-lg hover:bg-sky-900">
          Change Password
        </button>
        <button onClick={() => setActiveForm("changeAddress")} className="text-white text-lg bg-gray-500 px-4 py-1 rounded-lg hover:bg-sky-900">
          Change Address
        </button>
        <button onClick={() => setActiveForm("deleteAccount")} className="text-white text-lg bg-gray-500 px-4 py-1 rounded-lg hover:bg-sky-900">
          Delete Account
        </button>
      </div>
      <div className="text-white">
        {currentUser && (
          <div className="text-2xl mt-4">
            <table>
              <tbody>
                <tr>
                  <td className="px-4"><strong>Name </strong></td>
                  <td>: {currentUser.name}</td>
                </tr>
                <tr>
                  <td className="px-4"><strong>Email </strong></td>
                  <td>: {currentUser.email}</td>
                </tr>
                <tr>
                  <td className="px-4"><strong>Address</strong></td>
                  <td>: {currentUser.address}</td>
                </tr>
                
              </tbody>
            </table>
        
          </div>
        )}
      </div>
      <div className="mt-6 flex">
        <div className="flex-auto">
          {activeForm === "changePassword" && <ChangePasswordForm />}
          {activeForm === "changeAddress" && <ChangeAddressForm />}
          {activeForm === "deleteAccount" && <DeleteAccountForm />}
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
