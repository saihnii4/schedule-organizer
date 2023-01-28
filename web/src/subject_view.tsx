import Layout from "./components/layout";
import { db } from "./utils/fire";
import * as React from "react";
import { ReactComponent as Plus } from "./plus.svg";
import { ReactComponent as Minus } from "./minus.svg";
import { Subject as SubjectComponent } from "./components/subject";
import { collection, getDocs } from "firebase/firestore";

interface Subject {
  classname: string[];
  className: string[]; // TODO: fix differing cases
  code: null | string;
  curriculum: "IGCSE" | "AS/A" | "National";
  teacher: string[];
}

export const SubjectView = () => {
  //  AS/A -> IGCSE -> National
  //0b  1      1          1
  const [filter, setFilter] = React.useState(0b111);
  const [subjects, setSubjects] = React.useState<Subject[]>([]);

  const IGCSE = (filter >> 1) & 0b001;
  const AS = (filter >> 2) & 0b001;
  const National = filter & 0b001;

  const filter_func = (subject: Subject) =>
    subject.code !== null
      ? Number(subject.code) > 1000
        ? (filter >> 2) & 0b001 && subject
        : (filter >> 1) & 0b001 && subject
      : filter & 0b001 && subject;

  React.useEffect(() => {
    const _async_cb = async () => {
      const subjects = await getDocs(collection(db, "subjects"));
      setSubjects(subjects.docs.map((_) => _.data()) as Subject[]);
    };

    _async_cb();
  }, [filter]);

  React.useEffect(() => {
    console.log(subjects);
  }, [subjects]);

  return (
    <Layout>
      <span className="font-semibold text-start text-3xl">Subjects</span>
      <hr />
      <div className="flex flex-row gap-2">
        <div
          className={`rounded-md transition-colors text-slate-500 bg-green-100 text-xs py-1 px-1 cursor-pointer select-none ${
            !AS && "text-slate-300 !bg-slate-100"
          }`}
          onClick={() => setFilter(filter ^ 0b100)}
        >
          AS/A
        </div>
        <div
          className={`rounded-md transition-colors text-slate-500 bg-yellow-100 text-xs py-1 px-1 cursor-pointer select-none ${
            !IGCSE && "text-slate-300 !bg-slate-100"
          }`}
          onClick={() => setFilter(filter ^ 0b010)}
        >
          IGCSE
        </div>
        <div
          className={`rounded-md transition-colors text-slate-500 bg-slate-100 text-xs py-1 px-1 cursor-pointer select-none ${
            !National && "text-slate-300"
          }`}
          onClick={() => setFilter(filter ^ 0b001)}
        >
          National
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-2 gap-2">
        {subjects ? (
          subjects
            .filter(filter_func)
            .map((subject) => (
              <SubjectComponent
                teacher={subject.teacher[0]}
                curriculum={
                  subject.code !== null
                    ? Number(subject.code) > 1000
                      ? "AS/A"
                      : "IGCSE"
                    : "National"
                }
                class_name={
                  (subject.className ?? subject.classname)[0] +
                  (subject.code !== null ? " - " + subject.code : "")
                }
                availability={Array(5).map(() => true)}
              />
            ))
        ) : (
          <span className="text-3xl font-bold">Loading...</span>
        )}
      </div>
    </Layout>
  );
};
