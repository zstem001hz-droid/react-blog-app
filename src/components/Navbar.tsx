import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Renders site-wide navigation with auth-aware login and logout controls.
// Displays admin link and logout button only when user is authenticated.
function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/blog">Blog</Link>
      {" | "}
      {/* Admin link and logout only visible when authenticated */}
      {isAuthenticated ? (
        <>
          <Link to="/admin">Admin</Link>
          {" | "}
          <button onClick={logout}>Log Out</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

export default Navbar;
