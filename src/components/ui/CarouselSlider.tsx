import React from "react";
import Image from "next/image";

const CarouselSlider = () => {
  return (
    <div className="flex items-start justify-end relative w-[1170px] h-[330px] bg-gradientSlider mb-[172px] rounded-[20px] pt-[47px] pr-[123px]">
      <Image
        width={34}
        height={31}
        src="/hyphen_icon.png"
        alt="Hyphen"
        className="absolute inset-11 ml-[16px]"
      />

      <p className="font-poppins absolute leading-7 inset-0 ml-[54px] left-20 mt-[65px] fw-[20]px text-white opacity-[0.7] font-normal w-[656px] h-[220px]">
        Internal stakeholders were happy with the final product. The team was
        able to communicate their progress clearly and concisely. They took the
        initiative and executed the project without much supervision Internal
        stakeholders were happy with the final product. The team was able to
        communicate their progress clearly and concisely. They took the
        initiative and executed the project without much supervision
      </p>

      <div>
        <div className="absolute border border-grayd9 h-[237px] "></div>
        <div className="ml-[52px]">
          <div className="overflow-hidden w-[85px] h-[85px] rounded-[42.5px] relative bg-purpleCircle flex items-center justify-center mb-[24px]">
            <Image
              src="/man-smile.png"
              width={60}
              height={120}
              alt="Man"
              className="absolute bottom-0 mx-auto"
            />
          </div>
          <p className="font-sora text-[20px] font-semibold text-white text-center pb-[10px]">
            Mitchell Marsh
          </p>

          <span className="font-poppins text-white font-normal text-[16px] text-center">
            UI/UX Designer
          </span>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlider;
