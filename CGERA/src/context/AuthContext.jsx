import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const user = {
  username: 'admin',
  password: 'admin',
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  // clear errors after 5 seconds
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const signin = async (user) => {
    try {
      if (user.username === 'admin' && user.password === 'admin') {
        setIsAuthenticated(true);
        setUser(user);
      } else {
        setErrors(['Invalid credentials']);
      }
    } catch (error) {
      console.log(error);
      setErrors(['An error occurred during login']);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  useEffect(() => {
    // Simulate checking login status on initial load
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signin,
        logout,
        isAuthenticated,
        errors,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
