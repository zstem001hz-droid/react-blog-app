import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Simulates login page - calls login() from AuthContext on button click.
// Redirects to admin page after successful login.
function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  // Logs the user in and redirects to the admin dashboard
  function handleLogin() {
    login();
    navigate("/Admin");
  }

  return (
    <div>
      <h1>Login</h1>
      <p>Clicking the button below simulates a login event.</p>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default LoginPage;
