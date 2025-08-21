import { createSlice } from "@reduxjs/toolkit";

// Action creators
export const signupAction = (user) => ({
  type: "user/signup",
  payload: user,
});

export const loginAction = (credentials) => ({
  type: "user/login",
  payload: credentials,
});

export const logoutAction = () => ({
  type: "user/logout",
});

// Reducer slice
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

      const user = state.users.find(
        (e) => e.email === email && e.password === password
      );

      if (user) {
        state.currentUser = user;
        console.log("login successful");
      } else {
        alert("Invalid Email & Password");
      }
    },

    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { signup, login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.currentUser;

export default userSlice.reducer;
