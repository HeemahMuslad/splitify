import React from "react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
const Track = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div>
      {" "}
      <section
        className={`${
          isDarkMode ? "bg-gray-900" : " bg-primary-10"
        } w-full   py-20`}
      >
        <div className="flex items-center gap-5   w-[90%] m-auto justify-between">
          <img
            src="src/assets/images/image 3.png"
            alt=""
            className="object-contain  w-[60%]"
          />
          <div className="flex items-center flex-col  text-center">
            <h2 className="text-lg font-bold tracking-tighter">
              Track Expenses
            </h2>
            <p className="text-sm">
              Keep track of who owes what, and settle up with a simple payment
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Track;
