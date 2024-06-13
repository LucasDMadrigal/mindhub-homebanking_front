import React from "react";

const RegisterForm = () => {
  return (
    <div id="signup">
      <h1>Sign Up for Free</h1>
      <form action="/" method="post">
        <div className="top-row">
          <div className="field-wrap">
            <label>
              First Name<span className="req">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={fields.firstName}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyUp={handleKeyUp}
              required
            />
          </div>
          <div className="field-wrap">
            <label>
              Last Name<span className="req">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={fields.lastName}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyUp={handleKeyUp}
              required
            />
          </div>
        </div>
        <div className="field-wrap">
          <label>
            Email Address<span className="req">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyUp={handleKeyUp}
            required
          />
        </div>
        <div className="field-wrap">
          <label>
            Set A Password<span className="req">*</span>
          </label>
          <input
            type="password"
            name="password"
            value={fields.password}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyUp={handleKeyUp}
            required
          />
        </div>
        <button type="submit" className="button button-block">
          Get Started
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
