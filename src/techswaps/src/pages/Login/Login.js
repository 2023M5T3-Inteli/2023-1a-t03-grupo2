import React, { useState } from "react";
import "./Login.css";
import Logo from "./../Login/techswaps.png";
import HomeNavbar from "../../components/Navbar";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = (event) => {
    event.preventDefault();
    // code to handle login
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    setForgotPassword(true);
    setShowLogin(false);
  };

  const handleCancelForgotPassword = (event) => {
    event.preventDefault();
    setForgotPassword(false);
    setShowLogin(true);
  };

  const handleResetPassword = (event) => {
    event.preventDefault();
    // code to handle reset password
  };

  return (


    <div className="login-page">
      <HomeNavbar />
      <div className="login-container">
        {showLogin && (
          <>

            <form className="login-form" onSubmit={handleLogin}>
              <img className="imgLogo" src={Logo} alt="login-image" width="250" height="250" />
              <h1 className="title">Login</h1>
              <label className="form-label" htmlFor="username">
                Username:
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <label className="form-label" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <div className="button-container">
                <button type="submit" className="login-button">
                  Login
                </button>
                <button
                  type="button"
                  className="forgot-password-link"
                  onClick={handleForgotPassword}
                >
                  Forgot Password?
                </button>
              </div>
            </form>
          </>
        )}
        {forgotPassword && (
          <form className="forgot-password-form" onSubmit={handleResetPassword}>
            <h1 className="title">Forgot Password</h1>
            <p className="subtitle">
              Enter your email address below and we'll send you instructions on
              how to reset your password.
            </p>
            <label className="form-label" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <div className="button-container">
              <button type="submit" className="forgot-password-button">
                Reset Password
              </button>
              <button
                type="button"
                className="cancel-button"
                onClick={handleCancelForgotPassword}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
