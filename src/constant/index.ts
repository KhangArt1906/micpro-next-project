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

export { expertiseList };
