const initialState = {
  users: [],
  currentUser: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGNUP":
      console.log("signup action", action.payload);
      return {
        ...state,
        users: [...state.users, action.payload],
        currentUser: action.payload,
      };

    case "LOGIN": {
      console.log("login action:", action.payload);
      const { email, password } = action.payload;

      const user = state.users.find(
        (e) => e.email === email && e.password === password
      );

      if (user) {
        console.log("login successful");
        return {
          ...state,
          currentUser: user,
        };
      } else {
        alert("Invalid Email & Password");
        return state;
      }
    }

    case "LOGOUT":
      console.log("logout action triggered");
      return {
        ...state,
        currentUser: null,
      };

    default:
      return state;
  }
}
