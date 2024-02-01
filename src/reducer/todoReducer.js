export const todoTaskReducer = (state = { task: [] }, action) => {
  switch (action.type) {
    case "TODO_TASK":
      return {
        ...state,
        task: action.payload,
      };
    default:
      return state;
  }
};
