import { Navbar } from "../../Components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
import "../../Components/ProductCard/productcard.css";
import { useAuth } from "../../Context/Auth/auth-context";
const Login = () => {
  const { setLogin } = useAuth();
  const navigate = useNavigate();
  const guestLogin = {
    email: "adarshbalika@gmail.com",
    pass: "adarshbalika",
  };
  const loginHandler = ({ email, pass }, setLogin, navigate) => {
    (async () => {
      try {
        const { data, status } = await axios.post("/api/auth/login", {
          email: email,
          password: pass,
        });
        if (status === 200) {
          localStorage.setItem("token", JSON.stringify(data.encodedToken));
          setLogin({
            tokenValue: JSON.stringify(data.encodedToken),
            isLogIn: true,
          });
          navigate("/productlisting");
        }
      } catch (error) {
        console.log("Error occured", error);
      }
    })();
  };
  return (
    <div>
      <Navbar />
      <div class="login-wrapper">
        <div class="login">
          <h1>Login</h1>
          <div class="login-credentials">
            <div class="email">
              <p for="email-label">Email Address</p>
              <input
                type="email"
                class="email-validate"
                id="email-label"
                placeholder="Enter Valid Email ID"
              />
            </div>
            <div class="password">
              <p for="password-label">Password</p>
              <input
                type="password"
                class="pswrd-validate"
                id="password-label"
              />
            </div>
            <div class="reset-details">
              <div>
                <input type="checkbox" class="checkbox" />
                Remember Me
              </div>

              <a href="" class="forgot-pswrd-link">
                Forget your Password?
              </a>
            </div>
            <button class="login-btn">Login</button>
            <button
              class="login-btn login-guest-btn"
              onClick={(e) => {
                e.preventDefault();
                loginHandler(guestLogin, setLogin, navigate);
              }}
            >
              Login as Guest
            </button>
            <Link class="have-account-link" to="/Signup">
              Create new Account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Login };
