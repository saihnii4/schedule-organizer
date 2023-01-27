import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App flex justify-center">
      <div className="flex flex-col gap-4 w-96">
        <span className="font-bold text-3xl">
          <div className="flex items-center justify-center">
            <span className="text-4xl">⏰</span>
            &nbsp; Untitled Accountant
          </div>
        </span>

        {/* today */}
        <span className="items-start font-extrabold text-3xl">Today</span>
        <div className="flex flex-col items-start">
          <span className="items-start font-semibold text-2xl">Schedule</span>
          <hr className="border-gray-200 border-[0.5] w-full my-2" />
          <div className="grid grid-cols-2 gap-2 test">
            <div className="flex items-start flex-col">
              <span className="text-neutral-700 font-light">First Period</span>
              <span className="text-neutral-600 font-light">8:00 - 8:40</span>
            </div>
            <div className="flex items-start flex-col">
              <span>Art Design - 9709</span>
              <span>G.Galmandakh</span>
            </div>
            <div className="flex items-start flex-col">
              <span className="text-neutral-700 font-light">Second Period</span>
              <span className="text-neutral-600 font-light">8:00 - 8:40</span>
            </div>
            <div className="flex items-start flex-col">
              <span>Art Design - 9709</span>
              <span>G.Galmandakh</span>
            </div>
            <div className="flex items-start flex-col">
              <span className="text-neutral-700 font-light">Third Period</span>
              <span className="text-neutral-600 font-light">8:00 - 8:40</span>
            </div>
            <div className="flex items-start flex-col">
              <span>Art Design - 9709</span>
              <span>G.Galmandakh</span>
            </div>
          </div>
        </div>

        {/* */}
        <div className="flex flex-col items-start">
          <span className="items-start font-semibold text-2xl">
            Free Periods
          </span>
          <hr className="border-gray-200 border-[0.5] w-full my-2" />
          <div className="grid grid-cols-2 grid-flow-row test gap-2">
            {/* replace test with tailwind */}
            <div className="flex items-start flex-col w-28">
              <span className="text-neutral-700 font-light">Fourth Period</span>
              <span className="text-neutral-600 font-light">8:00 - 8:40</span>
            </div>
            <div className="flex items-start flex-col ">
              <span>Art Design - 9709</span>
            </div>
            <div className="flex items-start flex-col w-28">
              <span className="text-neutral-700 font-light">Fifth Period</span>
              <span className="text-neutral-600 font-light">8:00 - 8:40</span>
            </div>
            <span className="text-neutral-500 font-extralight text-left">
              You have nothing planned, perhaps consider alotting a&nbsp;
              <span
                className="text-red-400 cursor-pointer"
                onClick={() => console.log("future redirect")}
              >
                <em>study session?</em>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
