import React from "react";
import Button from "../../common/Button";

function Start() {
  return (
    <div className="bg-black py-20">
      <div className="container mx-auto px-8">
        <div className="text-center text-[30px] lg:text-[50px] font-bold text-white">
          <span className="text-main-light ">Start designing</span> with Canva
        </div>
        <div className="text-center mt-8">
        <Button text="Get started for free" />
        </div>
      </div>
    </div>
  );
}

export default Start;
