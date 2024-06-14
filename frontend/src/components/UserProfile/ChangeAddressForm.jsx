import React, { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

//toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangeAddressForm = () => {
  const { user } = useAuthContext();
  const [newAddress, setNewAddress] = useState("");

  const notify = () => {
    toast.success("Address updated successfully", {
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/user/address", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ address: newAddress }),
      });

      if (!response.ok) {
        throw new Error("Failed to update address");
      }

      notify();
      setNewAddress("");
    } catch (error) {
      console.error(error);
      alert("Error updating address");
    }
  };

  return (
    <div className="p-4">
      <h2 className="block text-xl leading-6 text-gray-100 mb-4">Change Address</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <label className="block text-xl leading-6 text-gray-100">
          New Address:
          <input
            type="text"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            required
            className="rounded-lg border-0 ml-2 py-1.5 px-2 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </label>
        <button
          type="submit"
          className="text-white text-lg border-2 bg-gray-500 px-4 py-1 rounded-lg hover:bg-sky-900"
        >
          Update Address
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ChangeAddressForm;
