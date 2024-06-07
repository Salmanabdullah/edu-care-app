import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {

  return (
    <>
      <div className="flex space-x-4 justify-center pt-20">
        <div className="card w-96 bg-gray-500 shadow-xl">
          <button className="p-4">
            <div className="card-body items-center text-center text-3xl font-black">
             Change Name
            </div>
          </button>
        </div>

        <div className="card w-96 bg-gray-500 shadow-xl">
          <button className="p-4">
            <div className="card-body items-center text-center text-3xl font-black">
             <Link to='/update-password'>
             Change Password
             </Link>
            </div>
          </button>
        </div>

        <div className="card w-96 bg-gray-500 shadow-xl">
          <button className="p-4">
            <div className="card-body items-center text-center text-3xl font-black">
             Change Address
            </div>
          </button>
        </div>

        <div className="card w-96 bg-gray-500 shadow-xl">
          <button className="p-4">
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
