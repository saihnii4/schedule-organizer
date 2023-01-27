import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App flex justify-center">
      <div className="flex flex-col gap-4 w-max">
        <span className="font-bold text-3xl">
          <div className="flex items-center justify-center">
            <span className="text-4xl">⏰</span>
            &nbsp; Untitled Accountant
          </div>
        </span>

        {/* today */}
        <div className="flex flex-col items-start">
          <span className="items-start font-extrabold text-3xl">Today</span>
          <hr className="border-gray-200 border-[0.5] w-full my-2" />
          <div className="grid grid-cols-2">

          </div>
          {/* <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <div className="flex items-start flex-col">
                <span className="text-neutral-700 font-light">
                  First Period
                </span>
                <span className="text-neutral-600 font-light">8:00 - 8:40</span>
              </div>
              <div className="flex items-start flex-col">
                <span>Art Design - 9709</span>
                <span>G.Galmandakh</span>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <div className="flex items-start flex-col">
                <span className="text-neutral-700 font-light">
                  Second Period
                </span>
                <span className="text-neutral-600 font-light">8:00 - 8:40</span>
              </div>
              <div className="flex items-start flex-col">
                <span>Art Design - 9709</span>
                <span>G.Galmandakh</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
