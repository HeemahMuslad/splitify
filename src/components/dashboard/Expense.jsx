import React from "react";
import { sectionLayout } from "../../utils/sections";
import { FaPlus } from "react-icons/fa6";

import { Link } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";
import { useContext } from "react";
const Expense = () => {
  const eventArray = [
    {
      eventTitle: "Self Care",
      description: "For monthly self care activities with Amah and Leana",
      category: "Others",
    },
    {
      eventTitle: "Maldives Trip",
      description:
        "A girls trip to maldives with 5 friends; Leana, Fatima, Rahma, Ruth and Amah",
      category: "Travelled",
    },
  ];
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={sectionLayout}>
      <div className="flex flex-row-reverse gap-10 items-start ">
        <Link to="addexpense">
          <button
            type="button"
            className="text-cool-white-100 bg-primary-100 border py-3 px-5 sm:p-1  flex items-center gap-1 rounded-md"
          >
            <FaPlus /> Add Expense
          </button>
        </Link>
        <div className="flex flex-col mt-20 items-center gap-5   w-full">
          {eventArray.map((event, index) => (
            <div
              key={index}
              className={`${
                isDarkMode ? "bg-gray-500" : "bg-cool-white-100"
              } p-4 w-full flex flex-col gap-5  rounded-xl relative shadow-md`}
            >
              <div>
                <p className="text-xl font-semibold">{event.eventTitle}</p>
                <div className="flex gap-5 text-sm">
                  <p>{event.description}</p>
                  <p> Category: {event.category}</p>
                </div>
              </div>

              <div className="flex  gap-5">
                <span className=" bg-primary-100 p-2 rounded-md text-primary-50">
                  Paid: ₦20,000
                </span>
                <span className="bg-primary-100 text-primary-50 p-2 rounded-md ">
                  You are owed: ₦0
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expense;
