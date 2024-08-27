"use client";
import useStore from "@/app/store";
import React from "react";

function SideBar() {
  const { login } = useStore();
  console.log(login);

  return (
    <>
      {login ? (
        <div className="border-r shadow h-screen w-32  fixed top-20 left-0 p-3"></div>
      ) : (
        ""
      )}
    </>
  );
}

export default SideBar;
 