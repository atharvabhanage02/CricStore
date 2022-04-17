import { createContext, useContext, useState } from "react";
const AuthContext = createContext();
const isTokenPresent = localStorage.getItem("token") ? true : false;
const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState({
    isLogIn: isTokenPresent,
    tokenValue: localStorage.getItem("token"),
  });
  return (
    <AuthContext.Provider value={{ login, setLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
