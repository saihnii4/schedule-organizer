import React from "react";
import { ReactComponent as Plus } from "../plus.svg";
import { ReactComponent as Minus } from "../minus.svg";
import { isPropertyAssignment } from "typescript";

interface Props {
  teacher: string;
  className: string;
  availability: boolean[];
  chosen?: boolean;
}

export const Subject = (props: Props) => {
  return (
    <div className="flex flex-col items-start bg-slate-100 py-3 px-2.5 rounded-md gap-4 relative justify-between">
      <div className="absolute right-[10px] top-[10px] text-blue-500">
        {props.chosen ? <Minus /> : <Plus />}
      </div>
      <span className="text-start text-neutral-600 font-semibold leading-[15px]">
        {props.className}
        <br />
        <span className="text-sm text-gray-500 font-light">
          {props.teacher}
        </span>
      </span>
      <div className="flex flex-row gap-1">
        {["Mon", "Tue", "Wed", "Thu", "Fri"].map((val, i) => (
          <div
            className={`rounded-full ${
              props.availability[i] ? "bg-green-300" : "bg-red-300"
            } px-1 flex items-center justify-center py-[1.5px] text-xs`}
          >
            {val}
          </div>
        ))}
      </div>
    </div>
  );
};
