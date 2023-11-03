import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import Images from "../../constants/images";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendResetPassword } from "../../storages/actions/auth";

const SendResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    let data = {
      email,
      password,
    };
    dispatch(sendResetPassword(data, navigate));
  };
  return (
    <div className="w-screen h-screen scroll-smooth">
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Reset Password</title>
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
                  <form onSubmit={handleReset}>
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
                         Forgot Password
                        </a>
                      </div>
                    </div>

                    <div className="flex justify-start text-3xl font-bold mb-2 text-left mt-10">
                      <h1 className="text-black">Forgot</h1>
                    </div>
                    <div className="mt-5">
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
                        disabled={!email || !password}
                      >
                        Reset
                      </button>
                    </div>
                  </form>
                  <div className="flex flex-col mt-10 border-2 w-64" />
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

export default SendResetPassword;
