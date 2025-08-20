import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const addUserSlice = createSlice({
  name: "addUser",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log("Before ADD:", state.users);
      state.users.push(action.payload);
      console.log("After ADD:", state.users);
    },
    removeUser: (state, action) => {
      console.log("Before REMOVE:", state.users);
      state.users = state.users.filter((user) => user.id !== action.payload);
      console.log("After REMOVE:", state.users);
    },
    updateUser: (state, action) => {
      console.log("Before UPDATE:", state.users);
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      console.log("After UPDATE:", state.users);
    },
  },
});

export const { addUser, removeUser, updateUser } = addUserSlice.actions;
export default addUserSlice.reducer;
