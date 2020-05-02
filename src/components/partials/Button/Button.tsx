import React, { useState } from "react";
import "./Button.scss";

const Button = (props: {text: string, theme: string, onclick: Function}) => {
  const [buttonClass, setButtonClass] =useState('');
  const mouseDown = () => {
    setButtonClass('pressed');
  }
  const mouseUp = () => {
    setButtonClass('');
  }
  return (
    <div className={`button_general ${props.theme} ${buttonClass}`}  onClick={() => props.onclick()} onMouseDown={mouseDown} onMouseUp={mouseUp}>
      {props.text}
    </div>
  );
};

Button.defaultProps = {
  theme: "basic",
  text: "button",
  onclick: () => { }
};

export default Button;