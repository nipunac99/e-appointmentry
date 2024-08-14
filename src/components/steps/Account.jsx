import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { FaPhotoFilm } from "react-icons/fa6";

function CompanyProfile() {
  return (
    <div className="bg-white shadow-md pl-5 pr-5 rounded-3xl md:mt-20 md:mb-20 ml-3 mr-3">
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

          <div className="mt-5">
            <div className="mt-2 md:mb-5">
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  Industries
                </legend>

                <div className="list form-element grid grid-rows-2 grid-flow-col gap-4 items-center">
                  <div className="grid grid-cols-1 justify-items-center mt-5 mb-0 ">
                    <input
                      type="checkbox"
                      name="platform"
                      value="education "
                      id="education"
                    />
                    <label htmlFor="education">
                      <div className="icon flex justify-center items-center">
                      <svg id="fi_1940611"  height="50" viewBox="0 0 512 512" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m501.991 128.354-241-85.031c-3.229-1.14-6.752-1.14-9.981 0l-241 85.031c-5.992 2.114-10.002 7.774-10.01 14.128s3.989 12.023 9.976 14.151l241 85.677c1.625.578 3.325.867 5.024.867 1.7 0 3.399-.289 5.024-.867l241-85.677c5.987-2.128 9.983-7.797 9.976-14.151-.008-6.354-4.018-12.014-10.009-14.128z"></path><path d="m475.973 328.574v-130.84l-30 10.665v120.175c-9.036 5.201-15.125 14.946-15.125 26.121 0 11.174 6.089 20.92 15.125 26.121v73.716c0 8.284 6.716 15 15 15s15-6.716 15-15v-73.715c9.036-5.2 15.125-14.947 15.125-26.121 0-11.175-6.088-20.921-15.125-26.122z"></path><path d="m256 273.177c-5.149 0-10.22-.875-15.073-2.6l-135.483-48.165v66.008c0 16.149 16.847 29.806 50.073 40.59 28.961 9.4 64.647 14.577 100.483 14.577s71.521-5.177 100.483-14.577c33.226-10.784 50.073-24.441 50.073-40.59v-66.008l-135.482 48.165c-4.854 1.725-9.925 2.6-15.074 2.6z"></path></svg>
                      </div>
                      <div className="title">Education</div>
                    </label>
                  </div>
                  <div className="grid grid-cols-1 justify-items-center mt-5 mb-0 ">
                    <input
                      type="checkbox"
                      name="platform"
                      value="saloon"
                      id="saloon"
                    />
                    <label htmlFor="saloon">
                      <div className="icon flex justify-center items-center">
                        <svg id="fi_11444708" viewBox="0 0 512 512" width="50" height="50" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m329.713 150.838.005 5.547h-124.652c-12.661 0-22.955 10.294-22.955 22.955v53.121c-5.681-1.366-11.465-2.429-17.249-3.24l.064-78.384h.007 86.311c4.409 0 7.984-3.575 7.984-7.984 0-4.41-3.575-7.984-7.984-7.984h-80.092l28.268-36.291v-33.006h67.338c4.409 0 7.984-3.575 7.984-7.984s-3.575-7.984-7.984-7.984h-66.488c2.705-9.608 11.557-16.686 22.01-16.686h50.079c12.591 0 22.861 10.27 22.861 22.861v42.8l28.268 36.291h-35.277c-4.41 0-7.984 3.575-7.984 7.984s3.575 7.984 7.984 7.984zm-301.63 186.51h204.931c6.656 0 12.083 5.547 12.083 12.349v7.888h-160.671c-4.409 0-7.984 3.575-7.984 7.984s3.575 7.984 7.984 7.984h160.671v38.265c0 22.67-18.091 41.16-40.271 41.16h-148.555c-22.181 0-40.271-18.49-40.271-41.16v-62.122c0-6.8 5.428-12.348 12.083-12.348zm107.539-94.377c54.258 1.091 107.574 18.766 96.912 76.017-.151.811-.347 1.595-.524 2.391h-192.216c16.238-23.205 41.93-15.959 65.083-12.66 26.386 3.759 61.053-1.323 60.951-31.472-.065-19.701-30.12-34.061-30.206-34.276zm223.859 146.814c.255-3.255.741-6.445 1.439-9.555.701.201 1.441.309 2.207.309h72.946c4.41 0 7.984-3.575 7.984-7.984 0-4.41-3.575-7.984-7.984-7.984h-69.53c11.189-22.128 34.133-37.302 60.624-37.302 35.687 0 64.945 27.533 67.687 62.516.229 2.918-2.049 5.38-4.976 5.38h-125.421c-2.927 0-5.205-2.462-4.976-5.38zm69.682-337.463 15.414 258.249c.078 1.3-1.071 2.318-2.352 2.086-9.933-1.805-20.182-1.805-30.115 0-1.282.233-2.43-.785-2.353-2.086l15.415-258.249c.148-2.478 3.843-2.478 3.991 0zm-54.859 358.812v59.965c0 4.409-3.575 7.984-7.984 7.984-4.41 0-7.984-3.575-7.984-7.984v-60.865c1.956.593 4.013.901 6.122.901h9.846zm121.696-.901v60.865c0 4.409-3.575 7.984-7.984 7.984-4.41 0-7.984-3.575-7.984-7.984v-59.965h9.847c2.108.001 4.165-.307 6.121-.9zm-20.283.901v59.965c0 4.409-3.575 7.984-7.984 7.984-4.41 0-7.984-3.575-7.984-7.984v-59.965zm-20.282 0v59.965c0 4.409-3.575 7.984-7.984 7.984-4.41 0-7.984-3.575-7.984-7.984v-59.965zm-20.283 0v59.965c0 4.409-3.575 7.984-7.984 7.984s-7.984-3.575-7.984-7.984v-59.965zm-20.283 0v59.965c0 4.409-3.575 7.984-7.984 7.984s-7.984-3.575-7.984-7.984v-59.965zm-20.282 0v59.965c0 4.409-3.575 7.984-7.984 7.984s-7.984-3.575-7.984-7.984v-59.965zm-188.121 57.788v9.207h-151.834v-9.207c.545.016 1.091.025 1.64.025h148.555c.548.001 1.094-.009 1.639-.025zm123.264-296.568h-124.664c-3.848 0-6.986 3.139-6.986 6.986v57.937c6.636 2.461 12.965 5.458 18.793 9.093 27.324 17.042 37.224 44.051 31.359 75.542-.223 1.195-.469 2.374-.735 3.54 8.149 4.983 13.569 14.027 13.569 24.246v62.122c0 .483-.006.965-.018 1.446h68.683v-240.912zm-71.354 256.88h70.332c-3.081 8.435-11.627 14.527-21.635 14.527h-55.664c2.961-4.448 5.321-9.334 6.967-14.527z" fill-rule="evenodd"></path></svg>
                      </div>
                      <div className="title">Salon and Beauty</div>
                    </label>
                  </div>
                  <div className="grid grid-cols-1 justify-items-center mt-5 mb-0 ">
                    <input
                      type="checkbox"
                      name="platform"
                      value="fitness"
                      id="fitness"
                    />
                    <label htmlFor="fitness">
                      <div className="icon flex justify-center items-center">
                      <svg id="fi_10149725" enable-background="new 0 0 2000 2000" height="50" viewBox="0 0 2000 2000" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m0 1112.111v-224.337h116.44l-.018 224.337zm238.906 252.462c-17.5 0-33.952-6.814-46.326-19.193-12.374-12.376-19.186-28.828-19.185-46.327l.013-158.221c0-.076.011-.15.011-.226 0-.077-.011-.15-.011-.226l.035-439.491c.005-36.115 29.394-65.5 65.511-65.5h110.191l-.054 729.185h-110.185zm341.484 212.069c-12.374 12.372-28.821 19.183-46.317 19.183h-.009l-62.496-.011c-36.117-.004-65.5-29.392-65.5-65.51l.068-923.21c.001-.068.01-.132.01-.2s-.01-.132-.01-.2l.01-137.008c0-17.5 6.816-33.952 19.192-46.324 12.374-12.372 28.821-19.186 46.319-19.186h.009l62.479.011h.002c36.119.003 65.502 29.395 65.5 65.514l-.023 389.452c0 .053-.009.107-.009.163s.008.109.009.165l-.04 670.839c-.002 17.497-6.818 33.95-19.194 46.322zm76.207-464.489.013-224.337 686.79.07.016 224.337zm871.839 483.662-62.488.003c-36.122.004-65.512-29.384-65.514-65.507l-.075-1060.616c-.002-36.122 29.383-65.51 65.507-65.514l62.486-.007c17.5 0 33.95 6.81 46.324 19.183 12.374 12.376 19.188 28.824 19.19 46.328l.065 923.377c0 .005-.001.01-.001.016 0 .005.001.01.001.016l.01 137.207c.002 36.122-29.383 65.51-65.505 65.514zm232.671-231.245-110.189.009-.052-729.185 110.188-.009c17.499 0 33.95 6.81 46.324 19.183 12.374 12.372 19.19 28.824 19.192 46.324l.011 158.494c0 .016-.002.031-.002.047s.002.032.002.047l.031 439.576c.001 36.122-29.383 65.51-65.505 65.514zm238.893-252.306h-116.413l-.016-224.336h116.429z"></path></svg>
                      </div>
                      <div className="title">Fitness and Leisure</div>
                    </label>
                  </div>
                  <div className="grid grid-cols-1 justify-items-center mt-5 mb-0 ">
                    <input
                      type="checkbox"
                      name="platform"
                      value="health"
                      id="health"
                    />
                    <label htmlFor="health">
                      <div className="icon flex justify-center items-center">
                      <svg id="fi_15316546" viewBox="0 0 512 512" width="50" height="50" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m386.119 18.984a33.7 33.7 0 1 1 -33.7 33.7 33.7 33.7 0 0 1 33.7-33.7zm-1.791 297.359q-1.422 8.16-3.6 16.25a184.646 184.646 0 0 1 27.559-4.786c26.4-38.183 46.305-85.687 45.418-129.236-1.112-54.6-34.442-86.286-93.382-86.286a115.46 115.46 0 0 0 -77.175 29.691 83.954 83.954 0 0 1 49.522-1.862c41.043 11 66.685 39.467 71.725 80.08 3.918 31.566-5.312 65.751-20.07 96.149zm-100.976-41.077a174.137 174.137 0 0 1 -27.352 170.062 174 174 0 0 1 0-217.994 173.762 173.762 0 0 1 27.352 47.932zm-169 66.009a173.8 173.8 0 0 0 -55.187-.275 173.912 173.912 0 0 0 185.579 109.427 185.2 185.2 0 0 1 -28.779-52.887 174 174 0 0 0 -101.618-56.265zm310.653 47.375a174.056 174.056 0 0 1 -157.741 61.781 185.7 185.7 0 0 0 28.763-52.931 174.228 174.228 0 0 1 156.807-56.5 173.76 173.76 0 0 1 -27.829 47.653zm-52.252-75.668a172.887 172.887 0 0 1 -5.663 23.627 187.7 187.7 0 0 0 -64.6 37.514 187.044 187.044 0 0 0 1.486-67.513 173.168 173.168 0 0 1 69.054-48.81 173.854 173.854 0 0 1 -.277 55.182zm-233.783-55.182a173.369 173.369 0 0 0 5.94 78.809 187.732 187.732 0 0 1 64.6 37.515 187.05 187.05 0 0 1 -1.485-67.514 173.2 173.2 0 0 0 -69.055-48.81zm-113.663 196.835a174.012 174.012 0 0 0 205.562 9.131 186.041 186.041 0 0 1 -130.215-44.25 173.239 173.239 0 0 0 -75.347 35.119zm413.454 27.352a173.762 173.762 0 0 0 47.932-27.352 173.234 173.234 0 0 0 -75.339-35.117 186.021 186.021 0 0 1 -130.223 44.248 174.243 174.243 0 0 0 157.63 18.221zm-312.88-463a33.7 33.7 0 1 0 33.7 33.7 33.7 33.7 0 0 0 -33.7-33.7zm-50.7 257.377a290 290 0 0 0 28.525 51.446 184.592 184.592 0 0 1 27.563 4.786q-2.177-8.082-3.6-16.249a226.888 226.888 0 0 1 -15.23-40.194c-9.512-35.5-8.488-73.252 13.066-101.692 12.194-16.089 30.169-28.008 53.818-34.344a83.957 83.957 0 0 1 49.523 1.862 115.463 115.463 0 0 0 -77.176-29.691c-58.94 0-92.27 31.683-93.382 86.286-.48 23.795 5.351 50.558 16.894 77.787z" fill-rule="evenodd"></path></svg>
                      </div>
                      <div className="title">Health and Wellness</div>
                    </label>
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

          <div className="col-end-7 col-span-3 mt-2">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Cover photo
            </label>
            <div className="mt-5 mb-10 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-[60px]">
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
