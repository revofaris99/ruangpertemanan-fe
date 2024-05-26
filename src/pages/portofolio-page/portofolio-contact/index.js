import React from "react";

const PortofolioContact = () => {
  var urlFormEmail = `${process.env.REACT_APP_POSTFORM_URL}`
  return (
    <div
      name="contact-portofolio"
      className="w-full h-screen bg-[#212121] flex justify-center items-center p-4"
    >
      <form method="POST" action={urlFormEmail} className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red-500 text-gray-300">
            Contect
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email -
            revofaris99@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-red-500 hover:border-red-500 px-4 py-3 my-8 mx-auto flex items-center rounded-lg">Let's Collaborate</button>
      </form>
    </div>
  );
};

export default PortofolioContact;
