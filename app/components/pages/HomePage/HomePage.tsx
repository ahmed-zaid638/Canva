"use client";
import React, { useEffect } from "react";
import Button from "../../common/Button";
import Slider from "../../common/Slider/Slider2";
import { ChevronDown, Crown } from "lucide-react";
import Image from "next/image";
import Footer from "../../layout/Footer";
import Pricing from "./Pricing";
import Start from "./Start";
import axios from "axios";

function HomePage() {
 return (
    <div className="w-full">
      <div className="w-full text-center">
        <div className="text-[48px] font-bold text-color-dark mt-10">
          What will you{" "}
          <span className="bg-gradient-to-r from-main-dark via-main-light to-main-dark bg-clip-text text-transparent">
            design
          </span>{" "}
          today?
        </div>
        <div className="text-color-light text-[21px] my-5">
          Canva makes it easy to create and share professional designs.
        </div>
        <Button text="Start desgning " />
        <Pricing />
      </div>
      <Start />
      <Footer />
    </div>
  );
}

export default HomePage;
