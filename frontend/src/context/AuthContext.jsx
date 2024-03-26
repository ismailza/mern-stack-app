import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UseAPI } from '../hook/UseAPI';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const navigate = useNavigate();

  const { request } = UseAPI();

  useEffect(() => {
    if (!user) {
      checkUserLoggedIn();
    }
  }, [user]);

  const checkUserLoggedIn = async () => {
    try {
      const response = await request('get', '/api/user');
      if (response) {
        setUser(response.data.result);
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const login = async ({ ...credentials }) => {
    try {
      const response = await request('post', '/api/signin', credentials);
      setUser(response);
      localStorage.setItem('user', JSON.stringify(response.data.result));
    } catch (error) {
      console.log(error);
      throw error.response;
    }
  };

  const logout = async () => {
    try {
      await request('delete', '/api/signout');
      setUser(null);
      localStorage.removeItem('user');
      toast.success('Logout successful.');
      navigate('/signin');
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
