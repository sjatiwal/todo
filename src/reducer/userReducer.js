export const userLoginReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
