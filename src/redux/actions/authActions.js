import { createAction } from "@reduxjs/toolkit";

export const login = createAction("LOGIN", (user) => {
  {
    const clearUser = {
      name: user.firstName + " " + user.lastName,
      email: user.email,
    };
    return { payload: clearUser };
  }
});
export const logout = createAction("LOGOUT", (user) => {
  {
    const clearUser = {
      name: user.firstName + " " + user.lastName,
      email: user.email,
    };
    return { payload: clearUser };
  }
});
