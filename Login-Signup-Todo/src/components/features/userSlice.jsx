import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],       
    currentUser: null,
  },
  reducers: {
    signup: (state, action) => {
      console.log(" Signup action called with:", action.payload);

      const { email } = action.payload;
      const userExists = state.users.find((u) => u.email === email);

      if (userExists) {
        console.log(" User already exists:", email);
      } else {
        state.users.push(action.payload); 
        state.currentUser = action.payload; 
        console.log(" Signup successful. Users list now:", state.users);
        console.log(" Current user after signup:", state.currentUser);
      }
    },

    login: (state, action) => {
      console.log(" Login action called with:", action.payload);

      const { email, password } = action.payload;
      const user = state.users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        state.currentUser = user;
        console.log(" Login successful. Current user:", state.currentUser);
      } else {
        console.log(" Invalid email or password for:", email);
      }
    },

    logout: (state) => {
      console.log("Logout action called");
      state.currentUser = null;
      console.log(" User logged out. Current user is now:", state.currentUser);
    },
  },
});

export const { signup, login, logout } = userSlice.actions;

// Selector
export const selectUser = (state) => {
  console.log("selectUser called. Current user:", state.user.currentUser);
  return state.user.currentUser;
};

export default userSlice.reducer;
