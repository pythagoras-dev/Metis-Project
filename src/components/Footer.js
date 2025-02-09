import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your state values: \n 
            email: ${email} \n
            name:${name}\n
            Thank you`);
  };
  return (
    <>
      <footer className=" body-font bg-gray-100">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/2 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CONTACT
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="https://github.com/pythagoras-dev/metis-project"
                    target="_blank"
                    rel="noreferrer"
                    className=" text-gray-600 hover:text-gray-800"
                  >
                    Github Repo
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    href="mailto:abdulhadih48@gmail.com"
                    className=" text-gray-600 hover:text-gray-800"
                  >
                    Email: abdulhadih48@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel: 08159730537"
                    className=" text-gray-600 hover:text-gray-800"
                  >
                    Telephone: 08159730537
                  </a>
                </li>
              </nav>
            </div>
            <div></div>

            <div className="lg:w-1/2 md:w-1/2 w-full px-1">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 flex justify-center items-end md:justify-start">
                SUBSCRIBE
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap justify-center items-end md:justify-start">
                  <div className="relative w-2/3 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                    <input
                      value={name}
                      onChange={handleNameChange}
                      placeholder="Name"
                      type="text"
                      id="footer-field"
                      name="footer-field"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-blue-200 focus:border-purple-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative w-2/3 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                    <input
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Email"
                      type="email"
                      id="footer-field"
                      name="footer-field"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-blue-200 focus:border-purple-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <button
                    type="submit"
                    className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-purple-400 rounded"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 border-t-2 border-gray-700">
          <div className="container px-5 py-10 mx-auto flex items-center sm:flex-row flex-col">
            <Link
              to="#"
              className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            >
              <span className="ml-3 text-xl flex items-baseline">
                TitanWing{" "}
                <p className="pl-2 text-blue-500 text-xs not-italic font-medium tracking-wider">
                  BETA
                </p>
              </span>
            </Link>

            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2022 Titan Wing
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <Link to="#" className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </Link>

              <Link to="#" className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </Link>

              <Link to="#" className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </Link>

              <Link to="#" className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
