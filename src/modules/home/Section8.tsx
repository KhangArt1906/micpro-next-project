import Button from "@/components/ui/Button";
import React from "react";

function Section8() {
  return (
    <section>
      <div className="main-container bg-gradientBlue pt-[80px] pb-[56px] rounded-3xl">
        <h3 className="text-[34px] max-w-[858px] text-center text-white mx-auto mb-30">
          We'll take the time to understand your goals and then help you create
          a website that's exactly what you envisioned.
        </h3>

        <p className="text-white text-center mx-auto max-w-[692px] font-poppins font-normal mb-10">
          We believe your project is only as good as the team that's working on
          it. When we work with you and your team, we know there are no
          shortcuts to success. Your research is done; now lets get down to
          business!
        </p>
        <Button className="max-w-[220px] h-[60px] flex items-center text-center justify-between mx-auto bg-white p-6 rounded-xl border border-grayf2">
          <h5 className="text-dark font-semibold font-poppins text-[18px] mr-[3px]">
            Join the team
          </h5>
          <div
            className="rounded-full bg-primary
            border border-grayf2 flex items-center justify-center w-[28px] h-[28px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.5682 5.44891C10.8726 5.16795 11.3471 5.18693 11.628 5.49129L14.0511 8.11626C14.3163 8.40356 14.3163 8.84638 14.0511 9.13368L11.628 11.7587C11.3471 12.0631 10.8726 12.0821 10.5682 11.8011C10.2638 11.5202 10.2449 11.0457 10.5258 10.7413L11.787 9.37498L4.5 9.37498C4.08579 9.37498 3.75 9.03919 3.75 8.62498C3.75 8.21076 4.08579 7.87498 4.5 7.87498L11.787 7.87498L10.5258 6.50872C10.2449 6.20435 10.2638 5.72986 10.5682 5.44891Z"
                fill="white"
              />
            </svg>
          </div>
        </Button>
      </div>
    </section>
  );
}

export default Section8;
