import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { images } from "../../constants";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../src/storages/actions/auth";
const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState("");

  const checkboxHandler = () => {
    setAgree(!agree);
  };
  const btnHandler = () => {
    alert("I agree to terms & conditions");
  };

  const postData = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    let data = {
      email,
      password,
    };
    dispatch(loginUser(data, navigate));
  };

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
      </Helmet>
    <div
      className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 bg-[image:var(--image-url)]"
      style={{ "--image-url": `url(${images.BGAuth})` }}
    >
      <div className="relative py-3 sm:max-w-xl sm:mx-auto ">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
          style={{
            backgroundImage: images.Logo,
          }}
        ></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-28 hover:shadow-blue-300">
          <form onSubmit={postData}>
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">
                  Login Ruang Pertemanan
                </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-500 text-gray-900 focus:outline-none focus:borer-rose-600 rounded-lg"
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      style={{ borderColor: "#D2C2FF" }}
                    />
                    <label
                      // for="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-500 text-gray-900 focus:outline-none focus:borer-rose-600 rounded-lg"
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      style={{ borderColor: "#D2C2FF" }}
                    />
                    <label
                      // for="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mb-4">
                    <input
                      className="mr-2 leading-tight"
                      type="checkbox"
                      id="agree"
                      onChange={checkboxHandler}
                    />
                    <label className="text-sm">
                      I agree to terms & conditions
                    </label>
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 animate-pulse"
                      disabled={!agree|| !email || !password}
                      onClick={btnHandler}
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    {/* onClick={(e)=> e.preventDefault()} */}
                    <Link
                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      to={"/ruang/v1/auth/register"}
                    >
                      Create an Account!
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link
                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      to={"/ruang/v1/auth/sendVerif"}
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </Fragment>
  );
};

export default LoginPage;
