import { Card } from "flowbite-react";
import React from "react";

export default function Detail() {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
      {/*  */}
        <div className="container px-5 py-5 md:py-24 mx-auto">
        
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-5xl text-2xl font-bold title-font mb-2 text-primary-color-500">
              Choose your right plan!
            </h1>
            <text className="lg:w-2/3 mx-auto mt-3 leading-relaxed text-base text-gray-500">
              Select from best plans, ensuring a perfect match. Need more or
              less? <br />
              Customize your subscription for a seamless fit!
            </text>
            <div className="flex mx-auto border-2 border-primary-color-500 rounded-full overflow-hidden mt-6">
              <button className="py-1 px-4 bg-primary-color-500 text-white focus:outline-none rounded-full">
                Monthly
              </button>
              <button className="py-1 px-4 focus:outline-none">Annually</button>
            </div>
          </div>
          <div className="flex flex-wrap -m-4 justify-center gap-5 pl-3 pr-3">
            {/* free */}
            <Card className="max-w-sm border-gray-300 gap-0 rounded-3xl">
              <h5 className="px-4 py-2 lg:px-4 lg:py-2 w-16 mb-4 text-md font-bold text-white bg-purple-600 rounded-2xl">
                Free
              </h5>
              <text className="text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                odio voluptas earum sit quia aperiam.
              </text>
              <div className="text-left lg:text-left items-baseline text-slate-900 dark:text-white">
                <span className="text-1xl font-bold">USD</span>
                &nbsp;&nbsp;
                <span className="text-5xl font-bold tracking-tight">0.00</span>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </div>
              <ul className="my-7 space-y-5">
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-purple-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    2 team members
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-purple-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    20GB Cloud storage
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-purple-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Integration help
                  </span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                  <svg
                    className="h-5 w-5 shrink-0 text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Sketch Files
                  </span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                  <svg
                    className="h-5 w-5 shrink-0 text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    API Access
                  </span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                  <svg
                    className="h-5 w-5 shrink-0 text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    Complete documentation
                  </span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                  <svg
                    className="h-5 w-5 shrink-0 text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500">
                    24×7 phone & email support
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-lg bg-purple-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-200"
              >
                Sign In
              </button>
            </Card>
            {/* free */}

            {/* pro */}
            <Card className="max-w-sm bg-purple-400 border-2 border-purple-500 rounded-3xl">
              <h5 className="px-5 py-2 lg:px-4 lg:py-2 w-24 mb-4 text-md font-bold text-slate-900 bg-white rounded-2xl">
                Custom
              </h5>
              <text className="text-left text-slate-900">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
                optio magni soluta sed, similique itaque?
              </text>
              <div className="items-baseline text-slate-900">
                {/* <span className="text-1xl font-semibold">USD</span>&nbsp;&nbsp;
                <span className="text-5xl font-normal tracking-tight">
                  49.99
                </span>
                
                <span className="ml-1 text-xl font-normal text-white dark:text-gray-400">
                  /month
                </span> */}
                <span className="text-5xl font-semibold">Let's talk</span>
              </div>
              <ul className="my-7 space-y-5">
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-purple-700 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-white dark:text-gray-400">
                    2 team members
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-purple-700 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-white dark:text-gray-400">
                    20GB Cloud storage
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-purple-700 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-white dark:text-gray-400">
                    Integration help
                  </span>
                </li>
                <li className="flex space-x-3  decoration-white">
                  <svg
                    className="h-5 w-5 shrink-0 text-purple-700 dark:text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-white">
                    Sketch Files
                  </span>
                </li>
                <li className="flex space-x-3  decoration-white">
                  <svg
                    className="h-5 w-5 shrink-0 text-purple-700 dark:text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-white">
                    API Access
                  </span>
                </li>
                <li className="flex space-x-3  decoration-gray-500">
                  <svg
                    className="h-5 w-5 shrink-0 text-purple-700 dark:text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-white">
                    Complete documentation
                  </span>
                </li>
                <li className="flex space-x-3  decoration-gray-500">
                  <svg
                    className="h-5 w-5 shrink-0 text-purple-700 dark:text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-white">
                    24×7 phone & email support
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-lg bg-purple-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-200"
              >
                Book a call
              </button>
            </Card>
            {/* pro */}
          </div>
        </div>
      </section>
    </div>
  );
}
