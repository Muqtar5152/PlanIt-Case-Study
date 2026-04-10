import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  isLoadingAuth: false,
  isLoadingPublicSettings: false,
  authError: null,
  appPublicSettings: null,
  logout: () => {},
  navigateToLogin: () => {},
  checkAppState: async () => {}
});

export const AuthProvider = ({ children }) => {
  const [user] = useState(null);
  const [isAuthenticated] = useState(false);
  const [isLoadingAuth] = useState(false);
  const [isLoadingPublicSettings] = useState(false);
  const [authError] = useState(null);
  const [appPublicSettings] = useState(null);

  const value = {
    user,
    isAuthenticated,
    isLoadingAuth,
    isLoadingPublicSettings,
    authError,
    appPublicSettings,
    logout: () => {},
    navigateToLogin: () => {},
    checkAppState: async () => {}
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
