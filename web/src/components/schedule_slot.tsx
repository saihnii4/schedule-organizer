import dayjs from "dayjs";
import React from "react";

interface Schedule {
  name: string;
  room: Number;
  teacher: string;
  interval: Array<string>;
}

export const ScheduleSlot = ({ name, room, teacher, interval }: Schedule) => {
  const now = dayjs();
  const [a, b] = interval
    .map((interval) => interval.split(":"))
    .map(([a, b]) =>
      dayjs()
        .set("hour", Number.parseInt(a))
        .set("minute", Number.parseInt(b))
        .set("seconds", 0)
    );

  return (
    <>
      <div className="flex flex-col px-3 py-3">
        <div className="flex flex-row justify-between">
          <span className="">{name}</span>
          <span className="opacity-70 font-light">Room {room.toString()}</span>
        </div>
        <div className="flex flex-row justify-between">
          <span className="text-sm opacity-60">{`${interval[0]} - ${interval[1]}`}</span>
          <span className="opacity-50 font-light text-sm">{teacher}</span>
        </div>
      </div>
      <hr className="border-dashed" />
    </>
  );
};
