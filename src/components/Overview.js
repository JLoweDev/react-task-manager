
import { render } from "@testing-library/react";
import React from "react";
import uniqid from "uniqid";

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task, index) => {
        return <li key={uniqid()}>{index+1}. {task}<button onClick={() => { tasks.splice(index, 1); }}>Del</button></li>;
      })}
    </ul>
  );
};

export default Overview;