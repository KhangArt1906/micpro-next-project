/* eslint-disable react/no-unescaped-entities */
import Heading from "@/components/ui/Heading";
import { workList } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Section3() {
  return (
    <section className="main-container pb-[120px]">
      <Heading className="mb-[100px]">
        Our Team's <span className="text-primary">Work</span>
      </Heading>

      <div className="flex flex-col gap-[100px]">
        {workList.map((item, index) => (
          <div
            key={index}
            className={`flex items-center ${
              item.isEven == true
                ? "group even:gap-[70px] even:flex-row-reverse even:text-right ml-auto"
                : "odd:gap-[104px] odd:text-left mr-auto"
            }`}
          >
            <div>
              <div
                className={` text-dark1 mb-4 group ${
                  item.isEven == true ? "group-even:justify-end" : ""
                } flex items-start gap-2`}
              >
                <span>{item.text}</span>
              </div>
              <h3 className="font-bold text-[34px] mb-8">{item.title}</h3>
              <p className="text-gray17 text-lg leading-normal mb-10 font-poppins">
                {item.desc}
              </p>
              {item.isEven ? (
                <Link
                  href="#"
                  className="text-lg uppercase tracking-[10px] flex-row justify-end"
                >
                  <span className="block mb-4">{item.textSpacing}</span>
                  <div className={`w-2/4 h-1 bg-${item.borderPink} ml-auto`} />
                </Link>
              ) : (
                <Link
                  href="#"
                  className="text-lg uppercase tracking-[10px] flex-row justify-start"
                >
                  <span className="block mb-4">{item.textSpacing}</span>
                  <div className={`w-2/4 h-1 bg-${item.borderPink} mr-auto`} />
                </Link>
              )}
            </div>
            <div className="w-full max-w-[700px] flex-shrink-0">
              <Image
                src={item.imgWork}
                alt="image work"
                className="w-full h-full object-cover"
                width={700}
                height={585}
              ></Image>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section3;
