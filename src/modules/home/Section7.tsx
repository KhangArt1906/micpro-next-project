import Heading from "@/components/ui/Heading";
import { blogList } from "@/constant/services";
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
          {blogList.map((item, index) => (
            <div key={index}>
              <div className="aspect-video relative w-full mb-30">
                <Image
                  src={item.imageBlog}
                  width={360}
                  height={270}
                  alt="Hinh design blog"
                />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block py-1.5 px-2 text-sm font-medium bg-secondary rounded">
                  {item.tagBlog}
                </span>

                <span className="text-dark1 text-xs">{item.dateBlog}</span>
              </div>

              <h3 className="font-medium font-poppins">{item.textBlog}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section7;
