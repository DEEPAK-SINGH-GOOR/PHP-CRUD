const initialState = {
  todos: [],
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case "UPDATE_TODO":
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
