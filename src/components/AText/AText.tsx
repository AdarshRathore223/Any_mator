import React from "react";

export interface ATextprops {
  label: string;
  color:string;
}

const AText = (props: ATextprops) => {
  console.log(props.color);
  return (
    <svg viewBox="0 0 1350 600">
        <text x="50%" y="50%" fill={props.color} text-anchor="middle" >
            {props.label }
        </text>
    </svg>
  );
};
export default AText;

