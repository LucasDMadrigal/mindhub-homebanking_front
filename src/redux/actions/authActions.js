import { createAction } from "@reduxjs/toolkit";

export const login = createAction("LOGIN", (data) => {
  {

    const clearData = {
        id: data.id,
        firstName:data.firstName,
        lastName: data.lastName,
        isAdmin: data.isAdmin,
        token:data.token,
        loans: data.loans,
        accounts: data.accounts,
        cards: data.cards
      }
    // }
    return { payload: clearData };
  }
});

export const logout = createAction("LOGOUT")
