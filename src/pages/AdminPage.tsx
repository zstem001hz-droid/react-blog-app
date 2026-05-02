import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Protected admin page - redirects unauthenticated users to login.
// Only renders admin content if the user is authenticated.
function AdminPage() {
  const { isAuthenticated } = useAuth();

  // Redirects to login if user is not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the Admin Dashboard.</p>
    </div>
  );
}

export default AdminPage;
