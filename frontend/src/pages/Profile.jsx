import React from "react";

const Profile = () => {
  return (
    <>
      <div className="flex space-x-4 justify-center pt-20">
        <div className="card w-96 bg-gray-500 shadow-xl">
          <button className="p-40">
            <div className="card-body items-center text-center text-3xl font-black">
             Change Name
            </div>
          </button>
        </div>

        <div className="card w-96 bg-gray-500 shadow-xl">
          <button className="p-40">
            <div className="card-body items-center text-center text-3xl font-black">
             Change Password
            </div>
          </button>
        </div>

        <div className="card w-96 bg-gray-500 shadow-xl">
          <button className="p-40">
            <div className="card-body items-center text-center text-3xl font-black">
             Delete Account
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
