
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-end flex space-x-4">
        <div>
          <Link
            to={`api/user/login`}
            className="border-2 bg-sky-300 px-4 py-1 rounded-lg hover:bg-sky-500"
          >
            Login
          </Link>
        </div>
        <div>
          <Link
            to={`api/user/signup`}
            className="border-2 bg-sky-300 px-4 py-1 rounded-lg hover:bg-sky-500"
          >
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
