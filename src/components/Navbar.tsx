// export default function Navbar() {
//   return <nav>Navbar</nav>;
// }
import { Link } from "react-router-dom";

// Renders site-wide navigation links
// Displays on every page above route content
function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/blog">Blog</Link>
      {" | "}
      <Link to="/admin">Admin</Link>
      {" | "}
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;
