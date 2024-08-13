import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { FaPhotoFilm } from "react-icons/fa6";

function CompanyProfile() {
  return (
    <div className="bg-white shadow-md pl-5 pr-5 rounded-3xl">
      <h2 className="pt-5 font-bold  text-gray-900">Company Profile</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        This information will be displayed publicly so be careful what you
        share.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
        <div>
          <div className="col-start-1 col-end-3 ">
            <label
              htmlFor="username"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Company name
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-700 sm:max-w-md">
                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                  company name/
                </span>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="example company"
                  autoComplete="username"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 w-5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="col-end-7 col-span-3 mt-5">
            <div className="mt-2">
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  Industries
                </legend>

                <div className="mt-6 grid grid-cols-2 gap-2">
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-purple-700 focus:ring-purple-700"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-normal text-gray-900"
                      >
                        Education
                      </label>
                      {/* <p className="text-gray-500">
                      Get notified when someones posts a comment on a posting.
                    </p> */}
                    </div>
                  </div>

                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-purple-700 focus:ring-purple-700"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="candidates"
                        className="font-normal text-gray-900"
                      >
                        Salon and Beauty
                      </label>
                      {/* <p className="text-gray-500">
                      Get notified when a candidate applies for a job.
                    </p> */}
                    </div>
                  </div>

                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-purple-700 focus:ring-purple-700"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="offers"
                        className="font-normal text-gray-900"
                      >
                        Fitness and Leisure
                      </label>
                      {/* <p className="text-gray-500">
                      Get notified when a candidate accepts or rejects an offer.
                    </p> */}
                    </div>
                  </div>

                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="offers1"
                        name="offers1"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-purple-700 focus:ring-purple-700"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="offers1"
                        className="font-normal text-gray-900"
                      >
                        Health and Wellness
                      </label>
                      {/* <p className="text-gray-500">
                      Get notified when a candidate accepts or rejects an offer.
                    </p> */}
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div>
          <div className="col-start-1 col-end-3">
            <label
              htmlFor="photo"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Photo
            </label>
            <div className="mt-2 flex items-center gap-x-3">
              <BiUserCircle
                aria-hidden="true"
                className="h-12 w-12 text-gray-300"
              />
              <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Change
              </button>
            </div>
          </div>

          <div className="col-end-7 col-span-3 mt-5">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Cover photo
            </label>
            <div className="mt-2 mb-10 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <FaPhotoFilm
                  aria-hidden="true"
                  className="mx-auto h-12 w-12 text-gray-300"
                />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyProfile;
