import React from "react";
import clases from "./animatedline.module.css";
function Animatedline({subtitle,title}) {
  return (
    <>
      <div className={clases.top_me}>
        <p>{subtitle} </p>
        <h2>{title}</h2>
      </div>
      <div className={clases.animated_line}>
        <span className={clases.dot}></span>
      </div>
    </>
  );
}
export default Animatedline;
