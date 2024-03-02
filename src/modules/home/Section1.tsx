import BlurredDiv from "@/components/ui/BlurDiv";
import Button from "@/components/ui/Button";
import { blurConfigs } from "@/constant";
import React from "react";

function Section1() {
  const generateStyle = (
    borderRadius: string,
    background: string,
    width: string,
    height: string,
    position: string,
    top?: number,
    bottom?: number,
    left?: number,
    right?: number
  ): React.CSSProperties => ({
    position: "absolute",
    borderRadius,
    background,
    width,
    height,
    top,
    bottom,
    left,
    right,
    zIndex: "-1",
  });

  return (
    <section className="hero">
      <div
        className="l-container"
        style={{
          position: "relative",
        }}
      >
        <h1 className="max-w-[807px] mt-[24px] mx-auto font-extrabold text-6xl text-center leading-snug mb-7">
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

        {blurConfigs.map((config, index) => (
          <BlurredDiv
            key={index}
            style={generateStyle(
              config.borderRadius,
              config.background,
              config.width,
              config.height,
              config.position,
              config.top,
              config.bottom,
              config.left,
              config.right
            )}
            className={`blur-${
              config.position.includes("left") ? "left" : "right"
            } blur-blurPx`}
          />
        ))}
      </div>
    </section>
  );
}

export default Section1;
