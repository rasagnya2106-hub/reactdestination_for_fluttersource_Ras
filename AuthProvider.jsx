import React, { useState, useMemo } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);
  const value = useMemo(() => ({ isAuthenticated, login, logout }), [isAuthenticated]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;