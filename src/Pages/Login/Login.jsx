import { Navbar } from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./login.css";
const Login = () => {
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
