export const addUser = (user) => ({
  type: "ADD_USER",
  payload: user,
});

export const deleteUser = (id) => ({
  type: "DELETE_USER",
  payload: id,
});
export const editUser = (id) => ({
  type: "EDIT_USER",
  payload: id,
});
