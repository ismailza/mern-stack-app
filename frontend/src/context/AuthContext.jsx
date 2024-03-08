import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '../api/axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      checkUserLoggedIn();
    }
  }, [user]);

  const checkUserLoggedIn = async () => {
    try {
      const response = await axios.get('/api/user');
      if (response.data.result) {
        toast.success('User already logged in.');
        setUser(response.data.result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const login = async ({ ...credentials }) => {
    try {
      const response = await axios.post('/api/signin', credentials);
      setUser(response.data.result);
      localStorage.setItem('user', JSON.stringify(response.data.result));
      toast.success('Login successful.');
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const logout = async () => {
    try {
      await axios.delete('/api/signout');
      setUser(null);
      localStorage.removeItem('user');
      toast.success('Logout successful.');
      navigate('/login');
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while logging out.');
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, checkUserLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
