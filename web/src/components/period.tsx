import React from "react";

export const Period = ({ foo, bar }: { foo: string; bar: string }) => {
  return (
    <div className="flex items-start flex-col w-28">
      <span className="text-neutral-700 font-light">{foo}</span>
      <span className="text-neutral-600 font-light">{bar}</span>
    </div>
  );
};
