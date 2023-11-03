import React from "react";

const FormInputProfile = () => {
  return (
    <div className="rounded-xl border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">
      {/* list  */}
      <div className="flex flex-col bg-white">
        <form>
          <div className="flex flex-col mt-5 p-10">
            <div className="flex mx-auto w-40 justify-center rounded-full border-4">
              <img
                className="mx-auto rounded-full h-40 w-40"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="flex justify-center mx-auto mt-5">
              <button className="bg-transparent hover:bg-cyan-400 text-cyan-400 font-semibold hover:text-white py-2 px-4 border border-cyan-400 hover:border-transparent rounded">
                Select Photo
              </button>
            </div>
          </div>
        </form>
        <form>
          <div className="p-2">
            {/* layout merek */}
            <div className="flex flex-col">
              <div
                /*  key={index} */
                className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4"
              >
                <div className="mt-5">
                  <h1 className="font-bold">Contact</h1>
                  <div className="flex flex-col p-5">
                    <h1 className="">Email</h1>
                    <input
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-500 text-gray-900 focus:outline-none focus:borer-rose-600 rounded-lg"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email address"
                      style={{ borderColor: "#D2C2FF" }}
                    />
                    <h1 className="mt-5">Phone Number</h1>
                    <input
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-500 text-gray-900 focus:outline-none focus:borer-rose-600 rounded-lg"
                      style={{ borderColor: "#D2C2FF" }}
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <h1 className="font-bold">Biodata</h1>
                  <div className="flex flex-col p-5">
                    <h1 className="">Fullname</h1>
                    <input
                      type="text"
                      className="w-auto h-10 p-5 border-b-2 border-500 bg-white"
                      style={{ borderColor: "#D2C2FF" }}
                    />
                    <h1 className="mt-5 ">City</h1>
                    <input
                      type="text"
                      className="w-auto h-10 p-5 border-b-2 border-500 bg-white"
                      style={{ borderColor: "#D2C2FF" }}
                    />
                    <h1 className="mt-5 ">Address</h1>
                    <input
                      type="text"
                      className="w-auto h-10 p-5 border-b-2 border-500 bg-white"
                      style={{ borderColor: "#D2C2FF" }}
                    />
                    <h1 className="mt-5 ">Post Code</h1>
                    <input
                      type="text"
                      className="w-auto h-10 p-5 border-b-2 border-500 bg-white"
                      style={{ borderColor: "#D2C2FF" }}
                    />
                  </div>
                  <div className="flex justify-end mx-auto me-5">
                    <button
                      className="w-32 font-semibold hover:text-white py-2 px-4 border rounded"
                      style={{
                        backgroundColor: "#2395FF",
                        color: "white",
                      }}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormInputProfile;
