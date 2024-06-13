import { createAction, createReducer } from "@reduxjs/toolkit";
import { login, logout } from "../actions/authActions";

const initialState = {
  loggedIn: false,
  token: "",
  expiresIn: "",
  user: {
    name: "",
    email: "",
  },
};

const authReducer = createReducer({ initialState }, (builder) => {
  builder
    .addCase(login, (state, action) => {
      return {
        ...state,
        user: {
          ...action.payload,
        },
      };
    })
    .addCase(logout, (state, action) => {
      return {
        ...state,
        user: {
          ...action.payload,
        },
      };
    });
});

export default authReducer