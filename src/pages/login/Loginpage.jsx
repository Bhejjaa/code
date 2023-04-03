import React, { useState } from "react";
import { testnewApi } from "../../apis/api";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(""); // Clear email error when user starts typing
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(""); // Clear password error when user starts typing
  };

  const validate = () => {
    let isValid = true;
    if (email.trim() === "") {
      setEmailError("Please enter email");
      isValid = false;
    }
    if (password.trim() === "") {
      setPasswordError("Please enter password");
      isValid = false;
    }
    return isValid;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      return;
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p className="text-danger">{emailError}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <p className="text-danger">{passwordError}</p>}
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Loginpage;
