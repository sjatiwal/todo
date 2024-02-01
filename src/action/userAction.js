export const userLogin = (data) => async (dispatch) => {
  console.log(data);
  dispatch({ type: "LOGIN_USER", payload: data });
};
