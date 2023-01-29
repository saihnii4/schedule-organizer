// TODO: types

import data from "./tmp/processed.json";
import fs from "fs";

const dict = data.subjects
  .map(([a, b, c]: any) => [
    [a, (c ^ 1) << 1],
    [b, (c << 1) + 1],
  ])
  .reduce((acc, arr) => [...acc, ...arr])
  .reduce((a, [b, c]) => ({ ...a, [b]: c }));

console.log(dict);

const obfuscate = ({ subject, teacher, schedule }: any) => ({
  subject: dict[subject.trim()],
  teacher: dict[teacher.trim()],
  schedule,
});

const minimized = Object.entries(data).map(([key, val], i) => {
  if (key === "subjects") return;
  return { [0b111010 << i]: val.map(obfuscate) };
});

console.log(minimized);

fs.writeFile("./tmp/dict.json", JSON.stringify(dict), (err) => console.error);
fs.writeFile("./tmp/minimized.json", JSON.stringify(minimized), (err) => console.error);
