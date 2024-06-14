import React, { useEffect, useState } from "react";
import "../styles/login.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authActions";


const Form = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    loginEmail: "",
    loginPassword: "",
  });

  const dispatch = useDispatch()

  const LOGIN_URL = "http://localhost:8080/api/auth/login";
  const CURRENT_URL = "http://localhost:8080/api/auth/current";
  const REGISTER_URL = "http://localhost:8080/api/auth/register";

  const handleInputChange = ({ target }) => {
    const form = {
      ...fields, 
      [target.name]: target.value
      }
      setFields(form);
      console.log("🚀 ~ handleInputChange ~ form:", form)
       console.log("🚀 ~ handleInputChange ~ target.value :", target.value )
      
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
      email: fields.loginEmail,
      password: fields.loginPassword,
    };

    try {
      const response = await axios.post(LOGIN_URL, loginData);
      let token = response.data;

      const responseCurrent = await axios.get(CURRENT_URL,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      let client = responseCurrent.data
      client.token = token
      
      dispatch(login(client))
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };
  
  useEffect(() => {}, [])

  const handleRegister = () => {};
  return (
    <div className="form">
      <ul className="tab-group">
        <li className={`tab ${activeTab === "signup" ? "active" : ""}`}>
          <a href="signup" onClick={(e) => handleTabClick(e, "signup")}>
            Sign Up
          </a>
        </li>
        <li className={`tab ${activeTab === "login" ? "active" : ""}`}>
          <a href="login" onClick={(e) => handleTabClick(e, "login")}>
            Log In
          </a>
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
            <form  onSubmit={handleLogin}>
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
        )}
      </div>
    </div>
  );
};

export default Form;
