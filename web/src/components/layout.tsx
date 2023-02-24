import React from "react";

export default function Layout(props: React.PropsWithChildren) {
  return (
    <div className="App flex justify-center dark:bg-primary-dark dark:text-white h-full w-full">
      <div className="flex flex-col gap-4 w-96 px-[25px] py-[25px]">
        {/* <span className="font-bold text-3xl">
          <div className="flex items-center justify-center">
            <span className="text-4xl">⏰</span>
            &nbsp; Untitled Accountant
          </div>
        </span> */}
        {props.children}
      </div>
    </div>
  );
}
