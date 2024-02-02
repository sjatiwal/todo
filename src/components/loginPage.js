import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../action/userAction";
const LoginPage = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      name,
      password,
    };
    dispatch(userLogin(data));
  };
  return (
    <div className="h-full">
      <div className="flex justify-center text-3xl mt-4">Login user</div>
      <div className="flex justify-center">
        <form
          className="justify-center items-center bg-red-100 p-[20px] mt-3 w-[300px] rounded-[5px]"
          onSubmit={handleLogin}
        >
          <div className="flex justify-between">
            <div>Name:</div>
            <input
              type="text"
              placeholder="Enter Your Name... "
              className="rounded-[5px] px-2 w-[150px]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex justify-between mt-5">
            <div>Password:</div>
            <input
              type="password"
              placeholder="Enter Your Password..."
              className="rounded-[5px] px-2 w-[150px]"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div>
            <input
              type="submit"
              value="login"
              className="bg-blue-100 w-full mt-4"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
