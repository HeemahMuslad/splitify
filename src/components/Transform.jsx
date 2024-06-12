import React from 'react'
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
const Transform = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div> <section className={`${
      isDarkMode ? "bg-gray-900" : " bg-primary-10"
    } w-full   py-20`}>
    <div className="flex items-center gap-5   w-[90%] m-auto justify-between">
      <img
        src="src/assets/images/image 3.png"
        alt=""
        className="object-contain  w-[60%]"
      />
      <div className="flex items-center flex-col  text-center">
        <p className="text-sm">
          Transform the way you share expenses with friends. Splitify
          takes the hassle out of managing group expenses, ensuring fair
          and transparent split every time. Try it now and experience
          effortless expense management!
        </p>
      </div>
    </div>
  </section></div>
  )
}

export default Transform