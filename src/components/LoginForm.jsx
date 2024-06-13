import React from "react";

const LoginForm = () => {
  return (
    <div id="login">
      <h1>Welcome Back!</h1>
      <form action="/" method="post">
        <div className="field-wrap">
          <label>
            Email Address<span className="req">*</span>
          </label>
          <input
            type="email"
            name="loginEmail"
            value={fields.loginEmail}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyUp={handleKeyUp}
            required
          />
        </div>
        <div className="field-wrap">
          <label>
            Password<span className="req">*</span>
          </label>
          <input
            type="password"
            name="loginPassword"
            value={fields.loginPassword}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyUp={handleKeyUp}
            required
          />
        </div>
        <p className="forgot">
          <a href="#">Forgot Password?</a>
        </p>
        <button className="button button-block">Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
