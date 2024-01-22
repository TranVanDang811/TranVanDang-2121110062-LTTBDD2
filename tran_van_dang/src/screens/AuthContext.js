import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null); 
  const login = () => {
    // Thực hiện các bước đăng nhập và sau đó cập nhật trạng thái
    setLoggedIn(true);
  };

  const logout = () => {
    // Thực hiện các bước đăng xuất và sau đó cập nhật trạng thái
    setLoggedIn(false);
    setLoggedInUser(null);
  };
  const fetchUserProfile = (userProfile) => {
    setLoggedInUser(userProfile);
};
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, loggedInUser, fetchUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);