export const todoWork = (data) => async (dispatch) => {
  dispatch({ type: "TODO_TASK", payload: data });
};
