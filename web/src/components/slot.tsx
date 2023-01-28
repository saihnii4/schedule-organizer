import React from "react";
import { Period } from "./period";

export type Props = {
  foo: string;
  bar: string;
  teacher: string;
  classname: string;
};

export const Slot = ({ foo, bar, teacher, classname }: Props) => {
  return (
    <>
      <Period foo={foo} bar={bar} />
      <div className="flex items-start flex-col">
        <span>{classname}</span>
        <span>{teacher}</span>
      </div>
    </>
  );
};
