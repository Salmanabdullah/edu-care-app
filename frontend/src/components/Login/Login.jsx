import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner"

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // To save Sign Up
  const handleLogin = () => {
    const data = {
      email,
      password,
    };
    setLoading(true);
    axios
      .post("http://localhost:5000/api/user", data)
      .then(() => {
        setLoading(false);
        navigate("/");
        // TODO: show success message and redirect to login page
        // TODO: Log out
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <div className="flex justify-center items-center pt-8">
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">login</h1>
        </div>
        <form
          noValidate=""
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                onClick={handleLogin}
                className="w-full px-8 py-3 font-semibold rounded-md hover:bg-gray-700 hover:text-white text-gray-100 bg-red-300"
              >
                Login
              </button>
            </div>
          </div>
        </form>
        {/* <p className="px-6 text-sm text-center text-gray-400">
          Already have an account yet?{" "}
           <Link to="/login" className="hover:underline text-gray-600">
            Sign In
          </Link> 
          .
        </p> */}
      </div>
    </div>
  );

  
};


export default SignUp;
