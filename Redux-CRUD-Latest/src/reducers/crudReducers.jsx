const initialState = {
  todos: [],
};

export default function todoReducer(state = initialState, action) {
  console.log("Reducer received action:", action.type, "with payload:", action.payload);

  switch (action.type) {
    case "ADD_TODO":
      console.log("Before ADD:", state.todos);
      console.log("After ADD:", [...state.todos, action.payload]);
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "REMOVE_TODO":
      console.log("Before REMOVE:", state.todos);
      console.log("After REMOVE:", state.todos.filter((todo) => todo.id !== action.payload));
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case "UPDATE_TODO":
      console.log("Before UPDATE:", state.todos);
      console.log(
        "After UPDATE:",
        state.todos.map((t) => (t.id === action.payload.id ? action.payload : t))
      );
      return {
        ...state,
        todos: state.todos.map((t) =>
          t.id === action.payload.id ? action.payload : t
        ),
      };

    default:
      return state;
  }
}
