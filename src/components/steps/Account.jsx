import { CheckBox } from "@mui/icons-material";
import { Checkbox, Label } from "flowbite-react";
import React from "react";

export default function Account() {
  return (
    <div className="antialiased">
      <div>
        <div className="max-w-lg mx-auto my-10 mt-20  bg-slate-200 p-8 rounded-xl shadow-2xl shadow-slate-300">
          <h1 className="text-4xl font-bold">Login</h1>
          <p className="text-slate-500">Hi, Welcome back 👋</p>

          <div className="my-5">
            <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center bg-black border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                className="w-6 h-6"
                alt=""
              />{" "}
              <span className="text-white font-semibold">
                Login with Google
              </span>
            </button>
          </div>
          <form action="" className="my-10">
            <div className="flex flex-col space-y-5">
              <label htmlFor="email">
                <p className="font-medium text-slate-700 pb-2">Email address</p>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Enter email address"
                />
              </label>
              <label htmlFor="password">
                <p className="font-medium text-slate-700 pb-2">Password</p>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Enter your password"
                />
              </label>
              <div className="flex flex-row justify-between">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="comments"
                      className="font-normal text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div>
                  <a href="#" className="font-medium text-indigo-600">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                <span>Login</span>
                <svg
                  height="20"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  id="fi_3580148"
                >
                  <g id="Flat">
                    <path
                      d="m260.52 329.539a24 24 0 0 0 33.941 33.941l90.51-90.51a24 24 0 0 0 0-33.941l-90.51-90.509a24 24 0 0 0 -33.941 0 24 24 0 0 0 0 33.941l49.539 49.539h-262.059a24 24 0 0 0 -24 24 24 24 0 0 0 24 24h262.059z"
                      fill="#fff"
                    ></path>
                    <path
                      d="m448 24h-224a40 40 0 0 0 -40 40v32a24 24 0 0 0 48 0v-24h208v368h-208v-24a24 24 0 0 0 -48 0v32a40 40 0 0 0 40 40h224a40 40 0 0 0 40-40v-384a40 40 0 0 0 -40-40z"
                      fill="#fff"
                    ></path>
                  </g>
                </svg>
              </button>
              <p className="text-center">
                Not registered yet?{" "}
                <a
                  href="#"
                  className="text-indigo-600 font-medium inline-flex space-x-1 items-center"
                >
                  <span>Register now </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </span>
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
