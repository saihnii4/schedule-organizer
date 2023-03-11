import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/layout";
import { Period } from "./components/period";
import { Slot } from "./components/slot";
import { ScheduleSlot } from "./components/schedule_slot";
import dayjs from "dayjs";

const App = () => {
  return (
    <Layout>
      <span className="text-left font-extrabold text-[40px]">Today</span>
      <div className="dark:bg-secondary-dark overflow-scroll flex flex-col h-1/4">
        <ScheduleSlot
          name="AS/A Level Mathematics"
          room={42}
          interval={["17:00", "18:00"]}
          teacher="Mrs. Doe"
        />
        <ScheduleSlot
          name="AS/A Level Mathematics"
          room={42}
          interval={["20:00", "19:80"]}
          teacher="Mrs. Doe"
        />
      </div>
    </Layout>
  );
}

export default App;
