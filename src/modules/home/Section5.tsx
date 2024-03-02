import { IconCheckPink } from "@/components/icons";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import { servicesList } from "@/constant/services";
import Image from "next/image";
import React from "react";

function Section5() {
  return (
    <section className="py-[70px] bg-grayf2 mb-[120px] mt-[105px]">
      <div className="main-container">
        <Heading className="max-w-[679px] mb-[70px]">
          Find the plan that fits your budget
        </Heading>

        <div className="flex items-center justify-center gap-3 mb-10">
          <Button className="bg-primary text-white text-sm font-normal font-poppins">
            Monthly
          </Button>
          <Button className="bg-white text-dark1 text-sm font-normal font-poppins">
            Yearly
          </Button>
        </div>

        <div className="flex gap-8">
          {servicesList.map((item, index) => (
            <div
              className={`bg-grayea ${
                item.isFree == false
                  ? "w-full max-w-[730px]"
                  : "w-full max-w-[410px]"
              }`}
              key={index}
            >
              <div className="bg-white py-5 px-8 rounded-t-xl">
                <div className="flex items-center justify-between mb-3">
                  <h5 className="font-semibold font-poppins">
                    {item.textLeft}
                  </h5>
                  <span
                    className={`flex items-center justify-center rounded-full py-3 px-6 
                    font-poppins text-sm font-medium ${
                      item.isFree == false
                        ? "bg-primary text-primary bg-opacity-10"
                        : "bg-primary bg-opacity-5 text-dark"
                    }`}
                  >
                    {item.textRight}
                  </span>
                </div>

                <h4 className="text-[50px] font-bold">
                  {item.price}
                  <small className="text-xl text-dark1 font-poppins font-normal">
                    {item.priceMonth}
                  </small>
                </h4>
              </div>

              <div className="py-11 px-10 rounded-b-xl bg-grayea">
                <div
                  className={`grid ${
                    item.isFree === true ? "grid-cols-1" : "grid-cols-2"
                  } gap-5 mb-11`}
                >
                  {item.services.map((service, serviceIndex) => (
                    <div
                      className={`flex ${!item.isFree ? "flex-col" : ""}`}
                      key={serviceIndex}
                    >
                      <div className="flex items-center gap-2 font-poppins text-lg text-dark1">
                        <Image
                          src={item.iconCheckPink}
                          alt="icon check"
                          width={20}
                          height={20}
                        />
                        <p>{service}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-[175px] h-[60px] text-[16px] font-poppins font-medium text-white
                      ${
                        item.isFree === false
                          ? "bg-gradientMix text-white"
                          : "text-dark border bg-transparent border-solid border-gradientMix"
                      }
                `}
                >
                  {item.btnBuy}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section5;
