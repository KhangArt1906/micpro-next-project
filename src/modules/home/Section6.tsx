import CarouselSlider from "@/components/ui/CarouselSlider";
import Heading from "@/components/ui/Heading";
import { teamList } from "@/constant/services";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

function Section6() {
  return (
    <section className="pb-120">
      <div className="l-container">
        {/* Slider Carousel  */}
        <CarouselSlider />
      </div>

      <span className="flex items-center justify-center text-center relative bottom-[132px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="12"
          viewBox="0 0 120 12"
          fill="none"
          className="cursor-pointer"
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
          {teamList.map((item, index) => (
            <div
              key={index}
              className="w-full h-[385px] relative rounded-full group"
            >
              <div
                className={`overlay absolute inset-0 z-10 ${item.bgTeam} flex flex-col
                items-center justify-center p-2 bg-opacity-80 rounded-full
                text-white opacity-0 invisible transition-all group-hover:opacity-100
                group-hover:visible`}
              >
                <h4 className="text-xl font-semibold font-poppins">
                  {item.nameMember}
                </h4>
                <h6 className="text-sm text-white tracking-[-0.14px] font-medium font-poppins text-center mt-[2px]">
                  {item.jobMember}
                </h6>

                <ul className="flex flex-row gap-2 items-center mt-5">
                  {item.socialMemberImage.map((val, index) => (
                    <li
                      key={index}
                      className={`w-[26px] h-[26px] rounded-[25px] cursor-pointer flex items-center justify-center ${
                        index === 2 ? "bg-whiteIcon" : "bg-blueIcon"
                      }`}
                    >
                      <Image width={14} height={14} src={val} alt={val} />
                    </li>
                  ))}
                </ul>
              </div>
              <Image
                src={item.imageMember}
                alt={item.imageMember}
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
