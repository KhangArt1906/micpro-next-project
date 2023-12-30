import Heading from "@/components/ui/Heading";
import Image from "next/image";
import React from "react";

function Section7() {
  return (
    <section className="pb-[112px]">
      <div className="main-container">
        <Heading className="mb-[58px]">
          Our Design <span className="text-primary">BLOG</span>
        </Heading>

        <div className="grid grid-cols-3 gap-7">
          {Array(3)
            .fill(0)
            .map((item, index) => (
              <div key={index}>
                <div className="aspect-video relative w-full mb-30">
                  <Image
                    src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fill
                    alt="beach"
                    className="w-full h-full object-cover rounded-lg"
                  ></Image>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block py-1.5 px-2 text-sm font-medium bg-secondary rounded">
                    Design Blog
                  </span>

                  <span className="text-dark1 text-xs">June 19, 2023</span>
                </div>

                <h3 className="font-medium font-poppins">
                  15 Important Usability Principles for User Interface Design
                </h3>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Section7;
