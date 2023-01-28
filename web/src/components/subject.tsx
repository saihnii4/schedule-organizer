import React from "react";
import { ReactComponent as Plus } from "../plus.svg";
import { ReactComponent as Minus } from "../minus.svg";

interface Props {
  teacher: string;
  class_name: string;
  curriculum: "IGCSE" | "AS/A" | "National";
  availability: boolean[];
  chosen?: boolean;
}

const color_palette = {
  IGCSE: "bg-yellow-50",
  "AS/A": "bg-green-50",
  "National": "bg-slate-50",
}

export const Subject = (props: Props) => {
  return (
    <div className={`flex border-slate-700 border-[1px] flex-col items-start ${color_palette[props.curriculum]} py-3 px-2.5 rounded-sm gap-4 relative justify-between`}>
      <div className="absolute right-[10px] top-[10px] text-blue-500">
        {props.chosen ? <Minus /> : <Plus />}
      </div>
      <span className="text-start text-neutral-600 font-semibold leading-[15px]">
        {props.class_name}
        <br />
        <span className="text-sm text-gray-500 font-light">
          {props.teacher}
        </span>
      </span>
      <div className="flex flex-row gap-1 select-none">
        {["Mon", "Tue", "Wed", "Thu", "Fri"].map((val, i) => (
          <div
            className={`rounded-full ${
              props.availability[i] ? "bg-green-200" : "bg-red-200"
            } px-1 flex items-center justify-center py-[1.5px] text-[8px]`}
          >
            {val}
          </div>
        ))}
      </div>
    </div>
  );
};
