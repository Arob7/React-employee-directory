import React from "react";
import "./style.css";

function Wrapper(props) {
  return <main className="wrapper col-md-12">{props.children}</main>;
}

export default Wrapper;
