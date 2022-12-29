import React from "react";
import Navbar from "../../components/navbar/navbar";
import TaskList from "../../components/taskComponents/taskList";

const MyTask = () => {
  return (
    <div>
      <Navbar></Navbar>
      <TaskList></TaskList>
    </div>
  );
};

export default MyTask;
