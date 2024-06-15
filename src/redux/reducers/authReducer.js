import { createReducer } from "@reduxjs/toolkit";
import { login, logout } from "../actions/authActions";

const initialState = {
  loggedIn: false,
  token: "",
  expiresIn: "",
  user: {
    id: "",
    firstName: "",
    lastName: "",
    isAdmin: false,
    loans: [],
    accounts: [],
    cards: [],
  },
};

const authReducer = createReducer( initialState , (builder) => {
  builder
    .addCase(login, (state, action) => {
      return {
        ...state,
        token: action.payload.token,
        loggedIn: true,
        user: {
          id: action.payload.id,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          isAdmin: action.payload.isAdmin,
          loans: action.payload.loans,
          accounts: action.payload.accounts,
          cards: action.payload.cards,
        },
      };
    })
    .addCase(logout, (state, action) => {
      return initialState;
    });
});

export default authReducer;
