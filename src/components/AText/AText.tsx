import React from "react";

export interface ATextprops {
  label: string;
  color:string;
  width:string;
  height:string;
}

const AText = (props: ATextprops) => {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  return (
    <div className="id">
      <svg viewBox="0 0 1350 600" width="100%" height="100%">
        <text x="50%" fill={props.color} textAnchor="middle" >
            {props.label }
        </text>
    </svg>
    </div>
  );
};
export default AText;

