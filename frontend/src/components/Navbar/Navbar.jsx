import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
      </div>
      <div className="navbar-center text-5xl">
        <Link to='/'>
        Edu Care Chemnitz
        </Link>
        </div>
      <div className="navbar-end flex space-x-4">
        {user && (
          <div className="flex space-x-4">
            <button>
              <Link
                to="/profile"
                className="text-white text-lg border-2 bg-gray-500 px-4 py-1 rounded-lg hover:bg-sky-900"
              >
                Profile
              </Link>
            </button>
            <button
              onClick={handleClick}
              className="text-white text-lg border-2 bg-gray-500 px-4 py-1 rounded-lg hover:bg-sky-900"
            >
              Log out
            </button>
          </div>
        )}
        {!user && (
          <>
            <div>
              <Link
                to="/login"
                className="text-white text-lg border-2 bg-gray-500 px-4 py-1 rounded-lg hover:bg-sky-900"
              >
                Login
              </Link>
            </div>
            <div>
              <Link
                to="/signup"
                className="text-white text-lg border-2 bg-gray-500 px-4 py-1 rounded-lg hover:bg-sky-900"
              >
                Signup
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
