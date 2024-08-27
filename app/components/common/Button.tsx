import React from "react";

interface ButtonProps {
  width?: string;
  bg?: string;
  text?: string;
}

function Button({ width, bg = "#8b3dff", text = "button" }: ButtonProps) {
  return (
    <button
      style={{
        width: width,
        backgroundColor: bg,
      }}
      className="py-2 px-4 font-semibold text-white rounded-md hover:bg-main-dark "
    >
      {text}
    </button>
  );
}

export default Button;
