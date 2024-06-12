import React from "react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
const Settle = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div>
      {" "}
      <section
        className={`${
          isDarkMode ? "bg-gray-500" : " bg-cool-white-100"
        } w-full   py-20`}
      >
        <div className="flex items-center gap-5   w-[90%] m-auto justify-between">
          <div className="flex items-center flex-col  text-center">
            <h2 className="text-lg font-bold tracking-tighter">Settle Debts</h2>
            <p className="text-sm">Pay your friends directly through the app</p>
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

export default Settle;
