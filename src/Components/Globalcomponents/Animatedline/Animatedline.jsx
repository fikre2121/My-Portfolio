import React from "react";
import clases from "./animatedline.module.css"
function Animatedline() {
  return (
    <>
      <div className={clases.animated_line}>
        <span className={clases.dot}></span>
      </div>
    </>
  );
}
export default Animatedline;
