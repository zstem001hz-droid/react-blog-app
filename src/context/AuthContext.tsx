import { createContext, useContext, useState } from "react";

// Shape of the authentication context value
interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

// Creates AuthContext with unauthenticated default state
const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

// Custom hook for consuming AuthContext
export function useAuth() {
  return useContext(AuthContext);
}

// Manages authentication state for the entire application
// Provides login and logout functions to the component tree.
export function AuthProvider({ children }: { children: React.ReactNode }) {
  // Tracks whether the user is currently authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulates a successful login by setting authenticated to true
  function login() {
    setIsAuthenticated(true);
  }

  // Simulated logout by setting authenticated to false
  function logout() {
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
