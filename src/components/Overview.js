
import React from "react";
import uniqid from "uniqid";

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task, index) => {
        return <li key={uniqid()}>{index+1}. {task}</li>;
      })}
    </ul>
  );
};

export default Overview;