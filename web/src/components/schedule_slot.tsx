import determineLocation from "../utils/time";
import dayjs from "dayjs";
import React from "react";

interface Schedule {
  name: string;
  room: Number;
  teacher: string;
  interval: Array<string>;
}

export const ScheduleSlot = ({ name, room, teacher, interval }: Schedule) => {
  const now = dayjs().unix();
  const schedule = interval
    .map((interval) => interval.split(":"))
    .map(([a, b]) =>
      dayjs()
        // .set("hour", Number.parseInt(a))
        // .set("minute", Number.parseInt(b))
        .set("hour", Number.parseInt(a))
        .set("minute", Number.parseInt(b))
        .set("seconds", 0)
        .unix()
    );

  // TODO: React context that updates
  const [state, classname, per] = determineLocation(now, schedule, [
    "Mathematics",
  ]);

  // @ts-ignore
  const percentage = Math.floor(per * 100);

  return (
    <>
      {state === "ONGOING" && per ? (
        <>
          <div className="flex flex-col px-3 py-3 relative">
            <div className="invisible">
              <div className="flex flex-row justify-between">
                <span className="">{name}</span>
                <span className="opacity-70 font-light">
                  Room {room.toString()}
                </span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-sm opacity-60">{`${interval[0]} - ${interval[1]}`}</span>
                <span className="opacity-50 font-light text-sm">{teacher}</span>
              </div>
            </div>
            {/* @ts-ignore */}
            <hr
              style={{ top: `${percentage}%` }}
              className="border-ongoing border-2 absolute w-full left-0"
            />
            {/* @ts-ignore */}
            {per >= 0.5 ? (
              <>
                {/* @ts-ignore */}
                <span
                  style={{ top: `${percentage - 40}%` }}
                  className="absolute text-[1.1rem]"
                >
                  {name}
                </span>
                <span
                  className="opacity-70 font-light"
                  style={{ top: `${percentage - 40}%` }}
                >
                  Room {room.toString()}
                </span>
              </>
            ) : (
              <>
                {/* @ts-ignore */}
                <span
                  style={{ top: `${percentage + 5}%` }}
                  className="absolute text-[1.1rem]"
                >
                  {name}
                </span>
              </>
            )}
          </div>
          <hr className="border-dashed" />
        </>
      ) : (
        <>
          <div className="flex flex-col px-3 py-3">
            <div className="flex flex-row justify-between">
              <span className="font-light text-gray-100">{name}</span>
              <span className="opacity-70 font-light">
                Room {room.toString()}
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="text-sm opacity-60">{`${interval[0]} - ${interval[1]}`}</span>
              <span className="opacity-50 font-light text-sm">{teacher}</span>
            </div>
          </div>
          <hr className="border-dashed" />
        </>
      )}
    </>
  );
};
