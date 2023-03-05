// TODO:
// type "Class"

const determineLocation = (
  now: number,
  intervals: number[],
  classes: string[]
) => {
  if (new Set([...intervals, now]) === new Set(intervals)) {
    if ((intervals.indexOf(now) & 1) === 0)
      return ["START", classes[Math.floor(intervals.indexOf(now) / 2)]];
    else return ["END", classes[Math.floor(intervals.indexOf(now) / 2)]];
  }

  const sec = [...intervals, now].sort();
  if ((sec.indexOf(now) & 1) === 0) return ["BREAK", null];

  const start = intervals[Math.floor((sec.indexOf(now) - 1) / 2)];
  const end = intervals[Math.floor((sec.indexOf(now) - 1) / 2) + 1];

  return [
    "ONGOING",
    classes[Math.floor((sec.indexOf(now) - 1) / 2)],
    (now - start) / (end - start),
  ];
};

export default determineLocation;
