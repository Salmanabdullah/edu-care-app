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
      <div className="bg-gray-800 flex space-x-4 justify-center">
        <button onClick={() => setActiveForm("changePassword")}>
          Change Password
        </button>
        <button onClick={() => setActiveForm("changeAddress")}>
          Change Address
        </button>
        <button onClick={() => setActiveForm("deleteAccount")}>
          Delete Account
        </button>
      </div>
      <div className="text-center">
        {currentUser && (
          <div>
            <p>
              <strong>Name:</strong> {currentUser.name}
            </p>
            <p>
              <strong>Email:</strong> {currentUser.email}
            </p>
            <p>
              <strong>Address:</strong> {currentUser.address}
            </p>
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
