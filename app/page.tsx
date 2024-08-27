import React from "react";
import Button from "./components/common/Button";
import HomePage from "./components/pages/HomePage";
import { Sliders } from "lucide-react";
import CustomSlider from "./components/common/Slider/Slider";

function page() {
  return (
    <div className=" w-full  h-[400vh] ">
      <HomePage />
    </div>
  );
}

export default page;
