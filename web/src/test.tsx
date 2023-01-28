import * as React from "react";
import { db } from "./utils/fire";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";

const Test = () => {
  const [data, setData] = React.useState<any>();

  React.useEffect(() => {
    const _test = async () => {
      console.log("done");
    };
    _test();
  }, []);

  return <>{data ? <div>{JSON.stringify(data)}</div> : "Loading"}</>;
};

export default Test;
