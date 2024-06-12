import React from "react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Split = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div>
      <section
        className={`${
          isDarkMode ? "bg-gray-500" : " bg-cool-white-100"
        } w-full   py-20`}
      >
        <div className="flex items-center gap-5   w-[90%] m-auto justify-between">
          <div className="flex items-center flex-col  text-center">
            <h2 className="text-lg font-bold tracking-tighter">
              Split Bills Easily{" "}
            </h2>
            <p className="text-sm">
              Add friends and split bills in just a few taps
            </p>
          </div>
          <img
            src="src/assets/images/image 2.png"
            alt=""
            className="object-contain  w-[60%]"
          />
        </div>
      </section>
    </div>
  );
};

export default Split;
