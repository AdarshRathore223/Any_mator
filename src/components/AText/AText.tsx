import React from "react";

export interface ATextprops {
  label: string;
}

const AText = (props: ATextprops) => {
  return (
    <svg viewBox="0 0 1350 600">
        <text x="50%" y="50%" fill="Black" text-anchor="middle" >
            {props.label }
        </text>
    </svg>
  );
};

export default AText;
