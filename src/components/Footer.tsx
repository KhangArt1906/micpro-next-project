import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="w-full h-full">
      <div className="main-container font-poppins bg-white flex md:flex-row flex-col justify-around items-start pt-[120px]">
        <div className="p-5">
          <ul className="text-dark font-medium flex items-center gap-2">
            <Image
              src="./logo.svg"
              width={36}
              height={36}
              alt="MicPro Logo"
            ></Image>
            <span className="text-[20px] font-semibold font-sora">MicPro</span>
          </ul>
        </div>

        <div className="p-5">
          <ul>
            <p className="text-dark font-medium text-[16px] pb-[25px]">
              Product
            </p>
            <li className="text-dark1 pb-3 text-14 font-normal cursor-pointer">
              Careere
            </li>
            <li className="text-dark1 pb-3 text-14 font-normal cursor-pointer">
              About Us
            </li>
            <li className="text-dark1 pb-3 text-14 font-normal cursor-pointer">
              Insights
            </li>
            <li className="text-dark1 pb-3 text-14 font-normal cursor-pointer">
              PCI Compliance
            </li>
            <li className="text-dark1 pb-3 text-14 font-normal cursor-pointer">
              Integratlons
            </li>
            <li className="text-dark1 pb-3 text-14 font-normal cursor-pointer">
              Pricing
            </li>
          </ul>
        </div>

        <div className="p-5">
          <ul>
            <p className="text-dark font-medium text-[16px] pb-[25px]">
              For Developers
            </p>
            <li className="text-dark1 pb-3 text-14 font-normal cursor-pointer">
              Docs
            </li>
            <li className="text-dark1 pb-3 text-14 font-normal cursor-pointer">
              Knowledge Base
            </li>
            <li className="text-dark1 pb-3 text-14 font-normal cursor-pointer">
              System Status
            </li>
            <li className="text-dark1 pb-3 text-14 font-normal cursor-pointer">
              Tutorials
            </li>
            <li className="text-dark1 pb-3 text-14 font-normal cursor-pointer">
              Security
            </li>
          </ul>
        </div>

        <div className="p-5">
          <ul>
            <p className="text-dark font-medium text-[16px] pb-[25px]">
              Resources
            </p>
            <li className="text-dark1 pb-3 text-14 font-normal cursor-pointer">
              About
            </li>
            <li className="text-dark1 pb-3 text-14 font-normal cursor-pointer">
              Leadership
            </li>
            <li className="text-dark1 pb-3 text-14 font-normal cursor-pointer">
              Press/News
            </li>
            <li className="text-dark1 pb-3 text-14 font-normal cursor-pointer">
              Careers/Team
            </li>
            <li className="text-dark1 pb-3 text-14 font-normal cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>

        <div className="p-5">
          <ul>
            <p className="text-dark font-medium text-[16px] pb-[30px]">
              Subscribe
            </p>

            <div className="relative inline-flex text-[12px] h-full pb-[28px]">
              <input
                type="text"
                placeholder="Email message"
                className="border rounded-l-[8px] font-normal text-dark1  px-4 py-2 focus:outline-none"
              />
              <button className="bg-purpleButton text-white px-4 py-2 rounded-r-[8px]">
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
              </button>
            </div>

            <div className="font-medium text-[14px] text-dark font-inter">
              <p>8/10</p>
              <span>Overall rating</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="104"
                  height="20"
                  viewBox="0 0 104 20"
                  fill="none"
                >
                  <path
                    d="M9.04894 2.92705C9.3483 2.00574 10.6517 2.00574 10.9511 2.92705L12.0206 6.21885C12.1545 6.63087 12.5385 6.90983 12.9717 6.90983H16.4329C17.4016 6.90983 17.8044 8.14945 17.0207 8.71885L14.2205 10.7533C13.87 11.0079 13.7234 11.4593 13.8572 11.8713L14.9268 15.1631C15.2261 16.0844 14.1717 16.8506 13.388 16.2812L10.5878 14.2467C10.2373 13.9921 9.7627 13.9921 9.41221 14.2467L6.61204 16.2812C5.82833 16.8506 4.77385 16.0844 5.0732 15.1631L6.14277 11.8713C6.27665 11.4593 6.12999 11.0079 5.7795 10.7533L2.97933 8.71885C2.19562 8.14945 2.59839 6.90983 3.56712 6.90983H7.02832C7.46154 6.90983 7.8455 6.63087 7.97937 6.21885L9.04894 2.92705Z"
                    fill="#FFAD0F"
                  />
                  <path
                    d="M30.0489 2.92705C30.3483 2.00574 31.6517 2.00574 31.9511 2.92705L33.0206 6.21885C33.1545 6.63087 33.5385 6.90983 33.9717 6.90983H37.4329C38.4016 6.90983 38.8044 8.14945 38.0207 8.71885L35.2205 10.7533C34.87 11.0079 34.7234 11.4593 34.8572 11.8713L35.9268 15.1631C36.2261 16.0844 35.1717 16.8506 34.388 16.2812L31.5878 14.2467C31.2373 13.9921 30.7627 13.9921 30.4122 14.2467L27.612 16.2812C26.8283 16.8506 25.7739 16.0844 26.0732 15.1631L27.1428 11.8713C27.2766 11.4593 27.13 11.0079 26.7795 10.7533L23.9793 8.71885C23.1956 8.14945 23.5984 6.90983 24.5671 6.90983H28.0283C28.4615 6.90983 28.8455 6.63087 28.9794 6.21885L30.0489 2.92705Z"
                    fill="#FFAD0F"
                  />
                  <path
                    d="M51.0489 2.92705C51.3483 2.00574 52.6517 2.00574 52.9511 2.92705L54.0206 6.21885C54.1545 6.63087 54.5385 6.90983 54.9717 6.90983H58.4329C59.4016 6.90983 59.8044 8.14945 59.0207 8.71885L56.2205 10.7533C55.87 11.0079 55.7234 11.4593 55.8572 11.8713L56.9268 15.1631C57.2261 16.0844 56.1717 16.8506 55.388 16.2812L52.5878 14.2467C52.2373 13.9921 51.7627 13.9921 51.4122 14.2467L48.612 16.2812C47.8283 16.8506 46.7739 16.0844 47.0732 15.1631L48.1428 11.8713C48.2766 11.4593 48.13 11.0079 47.7795 10.7533L44.9793 8.71885C44.1956 8.14945 44.5984 6.90983 45.5671 6.90983H49.0283C49.4615 6.90983 49.8455 6.63087 49.9794 6.21885L51.0489 2.92705Z"
                    fill="#FFAD0F"
                  />
                  <path
                    d="M72.0489 2.92705C72.3483 2.00574 73.6517 2.00574 73.9511 2.92705L75.0206 6.21885C75.1545 6.63087 75.5385 6.90983 75.9717 6.90983H79.4329C80.4016 6.90983 80.8044 8.14945 80.0207 8.71885L77.2205 10.7533C76.87 11.0079 76.7234 11.4593 76.8572 11.8713L77.9268 15.1631C78.2261 16.0844 77.1717 16.8506 76.388 16.2812L73.5878 14.2467C73.2373 13.9921 72.7627 13.9921 72.4122 14.2467L69.612 16.2812C68.8283 16.8506 67.7739 16.0844 68.0732 15.1631L69.1428 11.8713C69.2766 11.4593 69.13 11.0079 68.7795 10.7533L65.9793 8.71885C65.1956 8.14945 65.5984 6.90983 66.5671 6.90983H70.0283C70.4615 6.90983 70.8455 6.63087 70.9794 6.21885L72.0489 2.92705Z"
                    fill="#FFAD0F"
                  />
                  <path
                    d="M93.0489 2.92705C93.3483 2.00574 94.6517 2.00574 94.9511 2.92705L96.0206 6.21885C96.1545 6.63087 96.5385 6.90983 96.9717 6.90983H100.433C101.402 6.90983 101.804 8.14945 101.021 8.71885L98.2205 10.7533C97.87 11.0079 97.7234 11.4593 97.8572 11.8713L98.9268 15.1631C99.2261 16.0844 98.1717 16.8506 97.388 16.2812L94.5878 14.2467C94.2373 13.9921 93.7627 13.9921 93.4122 14.2467L90.612 16.2812C89.8283 16.8506 88.7739 16.0844 89.0732 15.1631L90.1428 11.8713C90.2766 11.4593 90.13 11.0079 89.7795 10.7533L86.9793 8.71885C86.1956 8.14945 86.5984 6.90983 87.5671 6.90983H91.0283C91.4615 6.90983 91.8455 6.63087 91.9794 6.21885L93.0489 2.92705Z"
                    fill="#DCDCDC"
                  />
                </svg>
              </span>
            </div>
          </ul>
        </div>
      </div>

      <div className="w-full border border-t-white1 mt-[86px] mb-[46px]"></div>

      <div className="main-container flex md:flex-row flex-col justify-between items-start">
        <ul className="flex items-center justify-center gap-10 font-poppins text-[12px] font-normal text-dark1 mt-3">
          <Link href="/">Platform</Link>
          <Link href="/">Products</Link>
          <Link href="/">Resources</Link>
        </ul>

        <p className="text-dark1 font-inter font-normal text-center items-center mt-2.5">
          © 2021 Besnik.com I All Rights Reserved
        </p>

        <div className="flex items-center justify-center gap-[16px]">
          <Link
            className="rounded-full bg-white
            border-[2px] border-white1 flex items-center justify-center w-[38px] h-[38px]"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              id="facebook"
              width={16}
              height={16}
            >
              <path
                fill="#1976D2"
                fill-rule="evenodd"
                d="M12 5.5H9v-2a1 1 0 0 1 1-1h1V0H9a3 3 0 0 0-3 3v2.5H4V8h2v8h3V8h2l1-2.5z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>

          <Link
            className="rounded-full bg-white
            border-[2px] border-white1 flex items-center justify-center w-[38px] h-[38px]"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/1600/svg"
              viewBox="0 0 16 16"
              id="google-plus"
              width={16}
              height={16}
            >
              <g fill="#F44336">
                <path d="M16 7h-2V5h-1v2h-2v1h2v2h1V8h2zM5 9h2.829A3.006 3.006 0 0 1 5 11c-1.654 0-3-1.346-3-3s1.346-3 3-3c.717 0 1.407.257 1.943.724l1.314-1.508A4.955 4.955 0 0 0 5 3C2.243 3 0 5.243 0 8s2.243 5 5 5 5-2.243 5-5V7H5v2z"></path>
              </g>
            </svg>
          </Link>

          <Link
            className="rounded-full bg-white
            border-[2px] border-white1 flex items-center justify-center w-[38px] h-[38px]"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/1600/svg"
              viewBox="0 0 16 16"
              id="twitter"
              width={16}
              height={16}
            >
              <path
                fill="#03A9F4"
                d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"
              ></path>
            </svg>
          </Link>

          <Link
            className="rounded-full bg-white
            border-[2px] border-white1 flex items-center justify-center w-[38px] h-[38px]"
            href="/"
          >
            <Image
              src="./basketball.svg"
              width={16}
              height={16}
              alt="Basketball"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
