import Heading from "@/components/ui/Heading";
import Image from "next/image";
import React from "react";

function Section6() {
  return (
    <section className="pb-120">
      <div className="l-container">
        <div className="flex items-start justify-end relative w-[1170px] h-[330px] bg-gradientSlider mb-[172px] rounded-[20px] pt-[47px] pr-[123px]">
          <Image
            width={34}
            height={31}
            src="/hyphen_icon.png"
            alt="Hyphen"
            className="absolute inset-11 ml-[16px]"
          />

          <p className="font-poppins absolute leading-7 inset-0 ml-[54px] left-20 mt-[65px] fw-[20]px text-white opacity-[0.7] font-normal w-[656px] h-[220px]">
            Internal stakeholders were happy with the final product. The team
            was able to communicate their progress clearly and concisely. They
            took the initiative and executed the project without much
            supervision Internal stakeholders were happy with the final product.
            The team was able to communicate their progress clearly and
            concisely. They took the initiative and executed the project without
            much supervision
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
      </div>

      <span className="flex items-center justify-center text-center relative bottom-[132px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="12"
          viewBox="0 0 120 12"
          fill="none"
        >
          <circle cx="6" cy="6" r="6" fill="#DFE4FB" />
          <circle cx="33" cy="6" r="6" fill="#DFE4FB" />
          <circle cx="60" cy="6" r="6" fill="#1663F9" />
          <circle cx="87" cy="6" r="6" fill="#DFE4FB" />
          <circle cx="114" cy="6" r="6" fill="#DFE4FB" />
        </svg>
      </span>

      <div className="relative bottom-7">
        <Heading className="mb-30">
          Our Creative <span className="text-primary">Team</span>
        </Heading>

        <p className="text-center text-dark1 max-w-[481px] mx-auto mb-70">
          Flowgiri is a creative and modern theme for startups, freelancers and
          creatives.
        </p>

        <div className="grid grid-cols-3 gap-12 max-w-[1075px] mx-auto">
          {Array(6)
            .fill(0)
            .map((index) => (
              <div
                className="w-full h-[385px] relative rounded-full group"
                key={index}
              >
                <div
                  className="overlay absolute inset-0 z-10 bg-primary flex
                items-center justify-center p-2 bg-opacity-80 rounded-full
                text-white opacity-0 invisible transition-all group-hover:opacity-100
                group-hover:visible"
                >
                  <h4 className="text-xl font-semibold font-poppins">
                    Khang Nguyen
                  </h4>
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  fill
                  className="w-full h-full object-cover rounded-full"
                ></Image>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Section6;
