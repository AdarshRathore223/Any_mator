import React from "react";

export interface ATextprops {
  label: string;
  color:string;
}

const AText = (props: ATextprops) => {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  console.log(props.color);
  return (
    <svg viewBox="0 0 1350 600">
        <text x="50%" y="50%" fill="#0c0c0c" textAnchor="middle" >
            {props.label }
        </text>
    </svg>
  );
};
export default AText;

