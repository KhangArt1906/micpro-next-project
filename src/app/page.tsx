import { IconApple, IconCheckPink } from "@/components/icons";
import IconCheckList from "@/components/icons/IconCheckList";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import { expertiseList } from "@/constant";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Header */}
      <section className="hero">
        <div className="l-container">
          <h1 className="max-w-[807px] mx-auto font-extrabold text-6xl text-center leading-snug mb-7">
            Build Your Dream Website with Our Skilled{" "}
            <span className="text-gradient"> Development</span> Team
          </h1>

          <div className="text-center max-w-[715px] text-lg mb-11 mx-auto">
            Are you looking for a way to close all marketing, technical and
            customer support tasks for your company in one place
          </div>

          <div className="flex items-center justify-center gap-6">
            <Button className="text-white bg-primary">Get Started</Button>
            <Button className="border border-dark">Pricing</Button>
          </div>
        </div>
      </section>

      {/* Discover */}
      <section className="bg-white rounded-[30px] max-w-[1170px] mx-auto pt-[70px] px-12 pb-[120px]">
        <div className="grid grid-cols-4 gap-8 mb-32">
          {Array(4)
            .fill(0)
            .map((item, index) => (
              <div
                className="bg-white p-8 rounded-xl border border-grayf2"
                key={index}
              >
                <div
                  className="rounded-full w-[88px] h-[88px] mb-8 bg-gradientPink
            border border-grayf2 flex items-center justify-center"
                >
                  <IconApple></IconApple>
                </div>

                <h3 className="text-lg font-semibold">
                  Discover, Explore the Product
                </h3>
              </div>
            ))}
        </div>

        <Heading className=" max-w-[810px] mb-10">
          More than <span className="text-primary">80,000+</span> companies
          trust Micpro
        </Heading>

        <div className="flex items-center gap-5 justify-between">
          {Array(5)
            .fill(0)
            .map((item, index) => (
              <Image
                src="/slack.svg"
                alt="Slack"
                width={150}
                height={40}
                className="aspect-video object-contain"
                key={index}
              ></Image>
            ))}
        </div>
      </section>

      {/* Our Team Work */}
      <section className="main-container pb-[120px]">
        <Heading className="mb-[100px]">
          Our Team's <span className="text-primary">Work</span>
        </Heading>

        <div className="flex flex-col gap-[100px]">
          {Array(4)
            .fill(4)
            .map((item, index) => (
              <div
                className="flex items-center odd:gap-[104px] even:gap-[70px]  even:flex-row-reverse even:text-right group"
                key={index}
              >
                <div>
                  <div className="text-dark1 mb-4 flex items-start gap-2 group-even:justify-end">
                    <span>Mobile app, Weather,</span>
                    <span>Software</span>
                  </div>

                  <h3 className="font-bold text-[34px] mb-8">
                    Weather App UI Kit - WETHY{" "}
                  </h3>

                  <p className="text-gray17 text-lg leading-normal mb-10 font-poppins">
                    Hello Designers! This is the video calling website landing
                    page design concept. Video calling software is very popular
                    nowadays.
                  </p>

                  <Link href="#" className="text-lg uppercase tracking-[10px]">
                    <span className="block mb-4">View Portfolio</span>
                    <div className="w-2/4 h-1 bg-gradientPink"></div>
                  </Link>
                </div>
                <div className="w-full max-w-[700px] flex-shrink-0">
                  <Image
                    src="/image1.png"
                    alt=""
                    className="w-full h-full object-cover"
                    width={700}
                    height={585}
                  ></Image>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Explore Our Core */}
      <section className="main-container bg-grayf1 rounded-xl pt-[70px] pb-12 px-10">
        <Heading className="mb-8">
          Explore our core <span className="text-primary">Expertise</span>
        </Heading>
        <p className="max-w-[710px] text-center mx-auto mb-12 font-poppins">
          We produce beautiful and engaging websites. Our team is mostly
          experienced in the design of stunning interfaces, e-commerce and
          marketing website development, ready to work with you on your project!
        </p>

        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          {expertiseList.map((item, index) => (
            <div className="bg-white rounded-xl py-6 px-8" key={index}>
              <h4 className="font-bold text-xl pb-5 border-b border-b-grayf2">
                {item.title}
              </h4>

              <div className="flex flex-col gap-4">
                {item.features.map((feature, index) => (
                  <CoreItem
                    icon={<IconCheckList type={item.iconColor}></IconCheckList>}
                    key={index}
                    title={feature}
                  ></CoreItem>
                ))}
              </div>
            </div>

            // <div className="bg-white rounded-xl py-6 px-8">
            //   <h4 className="font-bold text-xl pb-5 border-b border-b-grayf2">
            //     Webflow Design
            //   </h4>

            //   <div className="flex flex-col gap-4">
            //     {Array(4)
            //       .fill(0)
            //       .map((item, index) => (
            //         <CoreItem
            //         icon={<IconCheckList type="orange"></IconCheckList>}
            //         key={index}
            //         ></CoreItem>
            //       ))}
            //   </div>
            // </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function CoreItem({
  icon,
  title = "High-quality motion design",
}: {
  icon: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-5 h-5 flex-shrink-0">
        <svg>{icon}</svg>
      </span>

      <p className="text-black leading-normal">{title}</p>
    </div>
  );
}
