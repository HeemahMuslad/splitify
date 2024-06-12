import React from "react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
const Partners = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div>
      <section
        className={`${
          isDarkMode ? "bg-gray-500" : " bg-cool-white-100"
        } w-full   py-20`}
      >
        <div className="flex flex-col items-center gap-5   w-[90%] m-auto ">
          <div className="flex py-10 items-center flex-col  text-center">
            <h2 className="text-xl font-bold">Our Partners</h2>
            <p className="text-lg">We are working with top organisations</p>
          </div>
          <img src="src/assets/images/Frame 6057.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Partners;
