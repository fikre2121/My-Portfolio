import React from "react";
import classes from "./button.module.css";
const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) => {
  return (
    <div className={classes.button_container}>
      <a href="fikre_Resume.pdf" download>
        <button
          type={type}
          onClick={onClick}
          className={`${classes.customButton} ${classes[className]} ${variant}`}
        >
          {children}
        </button>
      </a>
    </div>
  );
};

export default Button;
