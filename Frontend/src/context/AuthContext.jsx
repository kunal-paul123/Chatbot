import { createContext, useContext, useEffect, useState } from "react";
import { checkAuthStatus, loginUser } from "../helpers/api_communicator";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    //fetch if the user's cookies are valid then skip login
    async function checkStatus() {
      const data = await checkAuthStatus();

      if (data) {
        setUser({ email: data.user.email, name: data.user.name });
        setIsLoggedIn(true);
      }
    }
    checkStatus();
  }, []);

  const login = async (email, password) => {
    const data = await loginUser(email, password);
    if (data) {
      setUser({ email: data.email, name: data.name });
      setIsLoggedIn(true);
    }
  };
  const signup = async (name, email, password) => {};
  const logout = async () => {};

  const value = {
    user: user || {},
    isLoggedIn,
    login,
    logout,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth, AuthContext };
