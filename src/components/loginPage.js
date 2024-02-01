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
      <div className="flex justify-center text-3xl">Login user</div>
      <div className="flex justify-center">
        <form
          className="justify-center items-center bg-red-100 p-[20px] mt-3"
          onSubmit={handleLogin}
        >
          <div className="flex justify-between">
            <div>Name:</div>
            <input
              type="text"
              placeholder="Enter Your Name..."
              className="rounded-[2px] px-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex justify-between mt-5">
            <div>Password:</div>
            <input
              type="password"
              placeholder="Enter Your Password..."
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div>
            <input
              type="submit"
              value="login"
              className="bg-blue-100 w-full mt-2"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
