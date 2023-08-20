import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutHandler } from "../../Utils/logout";
const AuthContext = createContext();
const isTokenPresent = localStorage.getItem("token") ? true : false;
const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    isLogIn: isTokenPresent,
    tokenValue: localStorage.getItem("token"),
  });
  const logOutUser = async () => {
    logoutHandler();
    setLogin({ isLogIn: false });
    navigate("/");
  };
  return (
    <AuthContext.Provider value={{ login, setLogin, logOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
