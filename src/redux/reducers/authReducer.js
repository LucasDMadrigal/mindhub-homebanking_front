import { createAction, createReducer } from "@reduxjs/toolkit";
import { login } from "../actions/authActions";

const initialState = {
  loggedIn: false,
  token: "",
  expiresIn: "",
  user: {
    id: "",
    firstName:"",
    lastName: "",
    isAdmin: false,
    loans: [],
    accounts: [],
    cards: []
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
    // .addCase(logout, (state, action) => {
    //   return {
    //     ...state,
    //     user: {
    //       ...action.payload,
    //     },
    //   };
    // });
});

export default authReducer