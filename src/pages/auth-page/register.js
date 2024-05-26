import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import Images from "../../constants/images";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../storages/actions/auth";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    setAgree(!agree);
  };
  const btnHandler = () => {
    alert("Accept terms and condition");
  };

  const postData = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(name);
    console.log(password);
    let data = {
      email,
      name,
      password,
    };
    dispatch(registerUser(data, navigate));
  };

  return (
    <div className="w-screen h-screen scroll-smooth">
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register</title>
      </Helmet>
      <div className="flex flex-col item-center justify-center h-screen">
        <main className="flex flex-col items-center justify-center w-full flex-1 text-center bg-white">
          <div className="rounded-2xl shadow-2xl flex w-full h-full">
            {/* left */}
            <div
              className="w-3/5 justify-center hidden md:block bg-[#2395FF] bg-[image:var(--image-url)]"
              style={{ "--image-url": `url(${Images.BGAuth})` }}
            >
              <div className="flex flex-col items-center justify-center min-h-screen">
                <img src={Images.Logo} alt="" style={{ maxWidth: "50%" }} />
              </div>
            </div>
            {/* left end */}
            {/* right */}
            <div className="w-2/5 mx-auto md:bg-white bg-white">
              {/* notif */}
              <div className="flex flex-col items-center justify-center min-h-screen">
                {/* form input */}
                <form onSubmit={postData}>
                  <div className="flex flex-col justify-start text-2xl font-bold mb-2 text-left">
                    <div className="flex justify-start">
                      <img
                        className="w-24 bg-black rounded-full"
                        src={Images.Logo}
                        alt="Logo"
                      />
                      <a
                        href="#!"
                        className="text-black-600 dark:text-black-200 font-semibold mt-4 ms-4"
                      >
                        Register Ruang Pertemanan
                      </a>
                    </div>
                  </div>

                  <div className="flex justify-start text-3xl font-bold mb-2 text-left mt-10">
                    <h1 className="text-black">Register</h1>
                  </div>
                  <div className="flex flex-col mt-5">
                    <label className="block">
                      <input
                        type="text"
                        className="w-auto xl:w-96 h-10 p-5 mt-5 border-b-2 border-500 bg-white rounded-lg"
                        placeholder="Fullname"
                        style={{ borderColor: "#D2C2FF" }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </label>
                    <label className="block">
                      <input
                        type="email"
                        className="w-auto xl:w-96 h-10 p-5 mt-5 border-b-2 border-500 bg-white rounded-lg"
                        placeholder="Email"
                        style={{ borderColor: "#D2C2FF" }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </label>
                    <label className="block">
                      <input
                        type="password"
                        className="w-auto xl:w-96 h-10 p-5 mt-5 border-b-2 border-500 bg-white rounded-lg"
                        placeholder="Password"
                        style={{ borderColor: "#D2C2FF" }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col mt-10">
                    <button
                      className="rounded-lg w-auto xl:w-96 p-2 text-xl drop-shadow-xl"
                      style={{ backgroundColor: "#2395FF", color: "white" }}
                      disabled={!agree ||!name || !email || !password}
                      onClick={btnHandler}
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="flex justify-start mt-2 p-2">
                    <label style={{ color: "black" }}>
                      <input
                        type="checkbox"
                        className="me-3 bg-white"
                        id="agree"
                        onChange={checkboxHandler}
                      />
                      Accept terms and condition
                    </label>
                  </div>
                </form>
                <div className="flex flex-col mt-10 border-2 w-64" />
                <div className="flex flex-col mt-10" style={{ color: "black" }}>
                  <h5>Already have an account?</h5>
                </div>
                <div className="flex flex-col mt-5" style={{ color: "blue" }}>
                  <Link to={"/ruang/v1/auth/login"}>
                    <button
                      className="rounded-lg w-auto xl:w-96 p-2 text-xl drop-shadow-xl border-2"
                      style={{ borderColor: "#2395FF", color: "#2395FF" }}
                    >
                      Sign In
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* right end*/}
          </div>
        </main>
      </div>
    </Fragment>
    </div>
  );
};

export default Register;
