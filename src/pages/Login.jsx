import React, { useEffect, useState } from "react";
import "../styles/login.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { login, loginAsync } from "../redux/actions/authActions";
import { login } from "../redux/actions/authActions";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { loggedIn } = useSelector((store) => store.auth);

  const [activeTab, setActiveTab] = useState("login");
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const LOGIN_URL = "https://mindhub-homebanking.onrender.com/api/auth/login";
  const CURRENT_URL = "https://mindhub-homebanking.onrender.com/api/auth/current";
  const REGISTER_URL = "https://mindhub-homebanking.onrender.com/api/auth/register";

  const handleInputChange = ({ target }) => {
    const form = {
      ...fields,
      [target.name]: target.value,
    };
    setFields(form);
    console.log("🚀 ~ handleInputChange ~ form:", form);
    console.log("🚀 ~ handleInputChange ~ target.value :", target.value);
  };

  const handleFocus = (e) => {
    const label = e.target.previousElementSibling;
    label.classList.add("highlight");
  };

  const handleBlur = (e) => {
    const label = e.target.previousElementSibling;
    if (e.target.value === "") {
      label.classList.remove("active", "highlight");
    } else {
      label.classList.remove("highlight");
    }
  };

  const handleKeyUp = (e) => {
    const label = e.target.previousElementSibling;
    if (e.target.value === "") {
      label.classList.remove("active", "highlight");
    } else {
      label.classList.add("active", "highlight");
    }
  };

  const handleTabClick = (e, tab) => {
    e.preventDefault();
    console.log(tab);
    setActiveTab(tab);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Declarar el objeto JSON
    const loginData = {
      email: fields.email,
      password: fields.password,
    };

    try {
      const response = await axios.post(LOGIN_URL, loginData);
      let token = response.data;

      const responseCurrent = await axios.get(CURRENT_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // dispatch(loginAsync(loginData));

      let client = responseCurrent.data;

      client.token = token;

      dispatch(login(client));
      <Navigate to="/" replace={true} />;
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  if (loggedIn) {
    return <Navigate to="/" replace={true} />;
  }

  const handleRegister = async (e) => {
    e.preventDefault();

    const data = {
      firstName: fields.firstName,
      lastName: fields.lastName,
      email: fields.email,
      password: fields.password,
    };

    await axios
      .post(REGISTER_URL, data)
      .then((response) => {
        console.log("Registration successful:", response);
      })
      .catch((error) => {
        console.error("Error registering:", error);
      });
  };

  return (
    <div className="form--container">
      <div className="form">
        <ul className="tab-group">
          <li
            onClick={(e) => handleTabClick(e, "signup")}
            className={`tab ${activeTab === "signup" ? "active" : ""}`}
          >
            <a href="signup">Sign Up</a>
          </li>
          <li
            onClick={(e) => handleTabClick(e, "login")}
            className={`tab ${activeTab === "login" ? "active" : ""}`}
          >
            <a href="login">Log In</a>
          </li>
        </ul>

        <div className="tab-content">
          {activeTab === "signup" && (
            <div id="signup">
              <h1>Sign Up for Free</h1>
              <form className="register_form" onSubmit={handleRegister}>
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
          )}

          {activeTab === "login" && (
            <div id="login">
              <h1>Welcome Back!</h1>
              <form className="login_form" onSubmit={handleLogin}>
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
                    Password<span className="req">*</span>
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
                <p className="forgot">
                  <a href="#">Forgot Password?</a>
                </p>
                <button className="button button-block">Log In</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
