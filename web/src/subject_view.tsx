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
  teacher: string[];
}

export const SubjectView = () => {
  const [subjects, setSubjects] = React.useState<Subject[]>([]);
  React.useEffect(() => {
    const _async_cb = async () => {
      const subjects = await getDocs(collection(db, "subjects"));
      setSubjects(subjects.docs.map((_) => _.data()) as Subject[]);
    };

    _async_cb();
  }, []);

  React.useEffect(() => {
    console.log(subjects);
  }, [subjects]);

  return (
    <Layout>
      <span className="font-semibold text-start text-3xl">Subjects</span>
      <hr />
      <div className="grid grid-cols-2 gap-2">
        {subjects ? (
          subjects.map((subject) => (
            <SubjectComponent
              teacher={subject.teacher[0]}
              className={(subject.className ?? subject.classname)[0]}
              availability={Array(5).map(() => true)}
            />
          ))
        ) : (
          <span className="text-3xl font-bold">Loading...</span>
        )}
        <SubjectComponent
          teacher="J. Batkhishig"
          className="0620 Chemistry"
          availability={[true, ...Array(3).map(() => false), true]}
        />
      </div>
    </Layout>
  );
};
