import { createAction } from "@reduxjs/toolkit";

export const login = createAction("LOGIN", (user) => {
  {
    // const clearUser = {
    //   name: user.firstName + " " + user.lastName,
    //   email: user.email,
    // };

    const clearUser = {
      
        id: user.id,
        firstName:user.firstName,
        lastName: user.lastName,
        isAdmin: user.isAdmin,
        loans: user.loans,
        accounts: user.accounts,
        cards: user.cards
      }
    // }
    return { payload: clearUser };
  }
});
// export const logout = createAction("LOGOUT", (user) => {
//   {
//     const clearUser = {
//       name: user.firstName + " " + user.lastName,
//       email: user.email,
//     };
//     return { payload: clearUser };
//   }
// });
