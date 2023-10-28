import React from "react";

const MeetupDetail = (props) => {
  console.log(props.id);
  console.log(props.a)
  return (
    <div>
      <h1>hello</h1>
      {props.a}
      <h1>{props.id}</h1>
    </div>
  );
};

export default MeetupDetail;
