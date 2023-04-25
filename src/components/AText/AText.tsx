import React from "react";

export interface ATextprops {
  label: string;
}

const Button = (props: ATextprops) => {
  return (
    <>
    <span>{props.label}</span>
    </>
  );
};

export default Button;
