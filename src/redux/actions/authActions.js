import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAction("LOGIN", (data) => {
  {
    const clearData = {
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      isAdmin: data.isAdmin,
      token: data.token,
      loans: data.loans,
      accounts: data.accounts,
      cards: data.cards,
    };
    // }
    return { payload: clearData };
  }
});

// export const loginAsync = createAsyncThunk("LOGIN", async (data) => {
//   const LOGIN_URL = "https://mindhub-homebanking.onrender.com/api/auth/login";
//   const CURRENT_URL = "https://mindhub-homebanking.onrender.com/api/auth/current";
//   const REGISTER_URL = "https://mindhub-homebanking.onrender.com/api/auth/register";

//   const response = await axios.post(LOGIN_URL, data);
//   let token = response.data;
//   const responseCurrent = await axios.get(CURRENT_URL, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   const clearData = {
//     id: responseCurrent.data.id,
//     firstName: responseCurrent.data.firstName,
//     lastName: responseCurrent.data.lastName,
//     isAdmin: responseCurrent.data.isAdmin,
//     token: token,
//     loans: responseCurrent.data.loans,
//     accounts: responseCurrent.data.accounts,
//     cards: responseCurrent.data.cards,
//   };
//   // }
//   return clearData;
// });

export const logout = createAction("LOGOUT");
