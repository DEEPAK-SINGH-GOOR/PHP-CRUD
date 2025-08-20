import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    currentUser: null,
  },
  reducers: {
    signup: (state, action) => {
      state.users.push(action.payload);
      state.currentUser = action.payload;
      console.log("signup action", action.payload);
    },
    login: (state, action) => {
      console.log("login action:", action.payload);

      const { email, password } = action.payload;
      // console.log(email, "EMAIL");
      // console.log(password, "PASSWORD");

      const user = state.users.find(
        (e) => e.email === email && e.password === password
      );
      if (user) {
        state.currentUser = user;
        console.log("login successful", state.currentUser);
      } else {
        alert("IInvalid Email & Password");
      }
    },

    logout: (state) => {
      // console.log("Logout action called");
      state.currentUser = null;
      // console.log(" User logged out. Current user is now:", state.currentUser);
    },
  },
});

export const { signup, login, logout } = userSlice.actions;

export default userSlice.reducer;
