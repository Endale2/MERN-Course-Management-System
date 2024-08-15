import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to load user from the stored token
  const loadUser = async () => {
    const token = Cookies.get('token');
    if (token) {
      try {
        const response = await axios.get('http://localhost:3000/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data.user);
      } catch (error) {
        console.error('Failed to load user:', error.message);
        logout(); // If the token is invalid or expired, log out
      }
    }
    setLoading(false);
  };

  // Login function
  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
      Cookies.set('token', response.data.token, { expires: 1, secure: false });
      setUser(response.data.user);
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      throw new Error('Login failed');
    }
  };

  // Register function
  const register = async (name, email, password) => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', { name, email, password });
      Cookies.set('token', response.data.token, { expires: 1, secure: false });
      setUser(response.data.user);
    } catch (error) {
      console.error('Registration error:', error.response ? error.response.data : error.message);
      throw new Error('Registration failed');
    }
  };

  // Logout function
  const logout = () => {
    Cookies.remove('token');
    setUser(null);
  };

  useEffect(() => {
    loadUser(); // Load user on initial render
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
