import React from "react";

export default function Final() {
  return (
    
      <div className="flex-col flex items-center max-sm:mt-20 max-md:mt-20 max-2xl:mt-20 md:mt-20 md:mb-20 bg-white mr-3 ml-3 pt-5 pb-5 shadow-md rounded-2xl">
        <div className="text-green-400">
          <svg
            clipRule="evenodd"
            fillRule="evenodd"
            height="128"
            imageRendering="optimizeQuality"
            shapeRendering="geometricPrecision"
            textDecoration="geometricPrecision"
            viewBox="0 0 2.54 2.54"
           
            xmlns="http://www.w3.org/2000/svg"
            id="fi_5610944"
          >
            <g id="图层_x0020_1">
              <circle cx="1.27" cy="1.27" fill="#00ba00" r="1.27"></circle>
              <path
                d="m.87344 1.88938-.46448-.49713c-.06359-.06806-.05994-.17574.00812-.23933.06806-.06359.17574-.05993.23933.00812l.35828.38346.56711-.52987c.0051-.00477.01043-.00914.01594-.01316l.26669-.24917c.06806-.06359.17575-.05993.23933.00813.06359.06805.05993.17574-.00812.23933l-.81454.76105-.00087-.00093-.28176.26326-.12503-.13382z"
                fill="#fff"
              ></path>
            </g>
          </svg>
        </div>
        <div className="mt-3 text-xl font-bold uppercase text-green-500">
          Congratulations 🎉
        </div>
        <div className="text-lg font-semibold text-gray-500">
          Your Account has been created
        </div>
        <a className="mt-10" href="/">
          <button className="h-10 px-5 text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-purple-800 hover:text-white">
            Back to home
          </button>
        </a>
      </div>
   
  );
}
 