import React from "react";
import Navbar from "../../components/navbar/navbar";
import CompleteTaskList from "../../components/taskComponents/completeTaskList";

const CompletedTask = () => {
  return (
    <div>
      <Navbar></Navbar>
      <CompleteTaskList></CompleteTaskList>
    </div>
  );
};

export default CompletedTask;
