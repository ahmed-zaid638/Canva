import React from "react";
import Button from "../common/Button";
import Slider from "../common/Slider/Slider";
import { ChevronDown, Crown } from "lucide-react";
import Image from "next/image";

function HomePage() {
  const pricingBoxes = [
    {
      id: 1,
      title: "Canva Free",
      type: "For one person",
      buttonText: "Get Canva Free",
      description: "For designing or working on anything.",
    },
    {
      id: 2,
      title: "Canva Pro",
      type: "For one person",
      buttonText: "Start Free Pro Trial",
      description:
        "For growing your brand or passion project with premium features.",
    },
    {
      id: 3,
      title: "Canva Teams",
      type: "For your team",
      buttonText: "Start Free Teams Trial",
      description:
        "For teams to create together with premium workplace tools and workflows.",
    },
  ];
  const clients = [
    "https://static.canva.com/anon_home/logos/salesforce-grayscale.png",
    "https://static.canva.com/anon_home/logos/hubspot-monochrome.png",
    "https://static.canva.com/anon_home/logos/reddit-monochrome.png",
    "https://static.canva.com/anon_home/logos/skyscanner-grayscale.png",
    "https://static.canva.com/anon_home/logos/skyscanner-grayscale.png",
    "https://static.canva.com/anon_home/logos/skyscanner-grayscale.png",
    "https://static.canva.com/anon_home/logos/skyscanner-grayscale.png",
    "https://static.canva.com/anon_home/logos/skyscanner-grayscale.png",
    "https://static.canva.com/anon_home/logos/skyscanner-grayscale.png",
    "https://static.canva.com/anon_home/logos/skyscanner-grayscale.png",
  ];
  return (
    <div className="w-full">
      <div className="w-full text-center">
        <div className="text-[48px] font-bold text-color-dark">
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
      </div>
      {/* slider  */}
      <div className="mt-4">
        <Slider />
      </div>
      {/* pricing */}
      <div className="mt-4  w-full xl:w-[70%] mx-auto">
        <h1 className="text-center font-bold text-[30px] mb-7">
          A perfect fit for everyone
        </h1>
        <div className="flex flex-wrap gap-4 justify-center ">
          {pricingBoxes.map((box) => (
            <div
              key={box.id}
              className="p-6 border rounded-xl shadow-md bg-slate-200 opacity-90 w-full md:w-[80%]  lg:w-[30%] "
            >
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500 mb-2 bg-white rounded-md px-3 w-fit text-[14px] h-5">
                  {box.type}
                </p>
                <div
                  className={`bg-white p-2 rounded-full ${
                    box.id == 1 ? "invisible" : "block"
                  }`}
                >
                  <Crown color="#e5e817" fill="#e5e817" size={25} />
                </div>
              </div>
              <h2 className="text-2xl font-bold  my-7">{box.title}</h2>

              <p className={`text-gray-700 mb-4 lg:min-h-20 `}>
                {box.description}
              </p>
              <Button text={box.buttonText} width="100%" />
              {box.id == 3 ? (
                <button className="w-full py-2 border border-gray-400  rounded-lg mt-4 hover:bg-gray-300">
                  Contact Sales
                </button>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
        <p className="py-10 text-center">
          Our pricing page has full details. Educational organizations and
          nonprofits can enjoy premium Canva features for free.
        </p>
      </div>
      {/* trusted  */}
      <div className="mx-auto  text-center">
        <h1>Trusted by well known companies</h1>
        <div className="flex items-center justify-center gap-4 mt-8">
          {clients.map((item, index) => {
            return (
              <Image
                key={index}
                src={item}
                className=" "
                alt={""}
                width={80}
                height={80}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
