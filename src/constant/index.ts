import { EIconCheckListKeys } from "@/types";

const expertiseList: {
  title: string;
  features: string[];
  iconColor: EIconCheckListKeys;
}[] = [
  {
    title: "UI/UX Design",
    features: [
      "High-quality motion design",
      "Thoughtful user experience design",
      "Unique user interface design for websites and apps",
      "Design concepts & strategies for MVPs",
    ],
    iconColor: EIconCheckListKeys.pink,
  },
  {
    title: "Webflow Design",
    features: [
      "High-quality motion design",
      "Thoughtful user experience design",
      "Unique user interface design for websites and apps",
      "Design concepts & strategies for MVPs",
    ],
    iconColor: EIconCheckListKeys.orange,
  },
  {
    title: "Webflow Developer",
    features: [
      "Full-cycle development of powerful corporate websites and one-pagers",
      "Webflow integrations with third-party services and apps",
      "Migration of your designs or even ready website to Webflow CMS",
    ],
    iconColor: EIconCheckListKeys.blue,
  },
  {
    title: "Shopify Developer",
    features: [
      "Cost-effective e-commerce development",
      "Reinvention of your online store with a strong tech stack",
    ],
    iconColor: EIconCheckListKeys.pink,
  },
];

const iconRoundList: {
  title: string;
  icon: string;
  bgRound: string;
}[] = [
  {
    title: "Discover, Explore the Product",
    icon: "/icon_apple.png",
    bgRound: "linear-gradient(158deg, #D555C7 14.46%, #F396EA 79.18%)",
  },
  {
    title: "Product UX, Design & Development",
    icon: "/icon_stack.png",
    bgRound: "linear-gradient(160deg, #F49235 11.67%, #FFB46D 82.2%)",
  },
  {
    title: "Art Direction & Brand Strategy",
    icon: "/icon_application.png",
    bgRound: "linear-gradient(339deg, #6BCEFD 11.58%, #32A9DF 88.12%)",
  },
  {
    title: "Marketing Strategy & SEO Campaigns",
    icon: "/icon_loa.png",
    bgRound: "linear-gradient(158deg, #FF7999 17.3%, #FFBDCC 82.95%)",
  },
];

const sponsorList: {
  id: number;
  sponImg: string;
}[] = [
  {
    id: 1,
    sponImg: "/slack.png",
  },
  {
    id: 2,
    sponImg: "/amazon.png",
  },
  {
    id: 3,
    sponImg: "/woocommerce.png",
  },
  { id: 4, sponImg: "/undies.png" },
  { id: 5, sponImg: "/sitepoint.png" },
];

const blurConfigs = [
  {
    borderRadius: "532px",
    background: "#51B4FA",
    width: "450px",
    height: "560px",
    position: "absolute",
    top: 0,
    left: -100,
  },
  {
    borderRadius: "293.368px",
    background: "#854AEB",
    width: "450px",
    height: "220px",
    position: "absolute",
    bottom: -100,
    left: 150,
  },
  {
    borderRadius: "532px",
    background: "#F8A6F0",
    width: "450px",
    height: "560px",
    position: "absolute",
    top: 0,
    right: -100,
  },
  {
    borderRadius: "293.368px",
    background: "#F8D997",
    width: "450px",
    height: "220px",
    position: "absolute",
    bottom: -100,
    right: 150,
  },
];

const workList: {
  text?: string;
  title?: string;
  desc?: string;
  textSpacing?: string;
  borderPink?: string;
  imgWork: string;
  isEven?: boolean;
}[] = [
  {
    text: "Mobile app, Weather, Software",
    title: "Weather App UI Kit - WETHY ",
    desc:
      "Hello Designers! This is the video calling website landing" +
      "page design concept. Video calling software is very popular nowadays.",
    textSpacing: "VIEW PORTFOLIO",
    borderPink: "gradientPink",
    imgWork: "/image_work_1.png",
    isEven: false,
  },

  {
    text: "Web Design, Video call,, Software",
    title: "Video Calling Website - Jabber",
    desc:
      "WEATHY is a modern and clean mobile app project based on the weather app. The UI Kit gives you the necessary screens for creating stunning iOS " +
      "screens and applying them to any weather app.",
    textSpacing: "VIEW PORTFOLIO",
    borderPink: "gradientPink",
    imgWork: "/image_work_2.png",
    isEven: true,
  },

  {
    text: "Mobile app, Weather, Software",
    title: "Weather App UI Kit - WETHY ",
    desc:
      "Hello Designers! This is the video calling website landing" +
      "page design concept. Video calling software is very popular nowadays.",
    textSpacing: "VIEW PORTFOLIO",
    borderPink: "gradientPink",
    imgWork: "/image_work_3.png",
    isEven: false,
  },

  {
    text: "Web Design, Software",
    title: "Video Editing Website - Revise",
    desc: "Hello Peoples! This is the Video Editing Website landing page design concept. Video editing is an essential part of a tech user.",
    textSpacing: "VIEW PORTFOLIO",
    borderPink: "gradientPink",
    imgWork: "/image_work_4.png",
    isEven: true,
  },
];

export { expertiseList, iconRoundList, sponsorList, blurConfigs, workList };
