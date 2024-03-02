import { IconApple } from "@/components/icons";
import Heading from "@/components/ui/Heading";
import { iconRoundList, sponsorList } from "@/constant";
import Image from "next/image";
import React from "react";

function Section2() {
  return (
    <section className="bg-whiteF mt-[100px] rounded-[30px] max-w-[1170px] mx-auto pt-[70px] px-12 pb-[120px]">
      <div className="grid grid-cols-4 gap-8 mb-32">
        {iconRoundList.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl border border-grayf2"
          >
            <div>
              <div
                className="rounded-full w-[88px] h-[88px] mb-8 border border-grayf2 flex items-center justify-center"
                style={{ backgroundImage: item.bgRound }}
              >
                <Image width={30} height={30} src={item.icon} alt="icon" />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <Heading className=" max-w-[810px] mb-10">
        More than <span className="text-primary">80,000+</span> companies trust
        Micpro
      </Heading>

      <div className="flex items-center gap-5 justify-between">
        {sponsorList.map((item) => (
          <Image
            src={item.sponImg}
            key={item.id}
            alt="sponsor"
            width={110}
            height={30}
            className="aspect-video object-contain"
          ></Image>
        ))}
      </div>
    </section>
  );
}

export default Section2;
