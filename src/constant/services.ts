const servicesList: {
  textLeft?: string;
  textRight?: string;
  price?: string;
  priceMonth?: string;
  iconCheckPink: string;
  services: string[];
  btnBuy?: string;
  isFree?: boolean;
}[] = [
  {
    textLeft: "Pro",
    textRight: "Most popular",
    price: "$35",
    priceMonth: "/Per Month",
    iconCheckPink: "/icon_check_pink.png",
    services: [
      "UI/UX Designer",
      "Project Manager",
      "Dedicated Developer",
      "On time Support",
      "QA technician",
    ],
    btnBuy: "Buy Now",
    isFree: false,
  },

  {
    textLeft: "Pro",
    textRight: "Free",
    price: "$0",
    priceMonth: "",
    iconCheckPink: "/icon_check_pink.png",
    services: ["UI/UX Designer", "Dedicated Developer", "QA Technician"],
    btnBuy: "Buy Now",
    isFree: true,
  },
];

const blogList: {
  imageBlog: string;
  tagBlog: string;
  dateBlog: string;
  textBlog: string;
}[] = [
  {
    imageBlog: "/design_first_blog.png",
    tagBlog: "Design Blog",
    dateBlog: "Jul 12, 2022",
    textBlog: "15 Important Usability Principles for" + "User Interface Design",
  },

  {
    imageBlog: "/design_second_blog.png",
    tagBlog: "Design Blog",
    dateBlog: "Jul 30, 2022",
    textBlog: "15 Important Usability Principles for" + "User Interface Design",
  },

  {
    imageBlog: "/design_third_blog.png",
    tagBlog: "Design Blog",
    dateBlog: "Jul 22, 2022",
    textBlog: "15 Important Usability Principles for" + "User Interface Design",
  },
];

const teamList: {
  bgTeam: string;
  nameMember: string;
  jobMember: string;
  socialMemberImage: string[];
  imageMember: string;
}[] = [
  {
    bgTeam: "bg-primary",
    nameMember: "Khang Nguyen",
    jobMember: "Web Developer",
    imageMember: "/team_member_1.png",
    socialMemberImage: [
      "/facebook_icon_team.png",
      "/twitter_icon_team.png",
      "/linkedin_icon_team.png",
      "/instagram_icon_team.png",
    ],
  },

  {
    bgTeam: "bg-primary",
    nameMember: "Justin Bieber",
    jobMember: "Singer",
    imageMember: "/team_member_2.png",
    socialMemberImage: [
      "/facebook_icon_team.png",
      "/twitter_icon_team.png",
      "/linkedin_icon_team.png",
      "/instagram_icon_team.png",
    ],
  },

  {
    bgTeam: "bg-primary",
    nameMember: "HIEUTHUHAI",
    jobMember: "RAPPER",
    imageMember: "/team_member_3.png",
    socialMemberImage: [
      "/facebook_icon_team.png",
      "/twitter_icon_team.png",
      "/linkedin_icon_team.png",
      "/instagram_icon_team.png",
    ],
  },

  {
    bgTeam: "bg-primary",
    nameMember: "Jurgen Klopp",
    jobMember: "Coach",
    imageMember: "/team_member_4.png",
    socialMemberImage: [
      "/facebook_icon_team.png",
      "/twitter_icon_team.png",
      "/linkedin_icon_team.png",
      "/instagram_icon_team.png",
    ],
  },

  {
    bgTeam: "bg-primary",
    nameMember: "Donal Trump",
    jobMember: "President",
    imageMember: "/team_member_5.png",
    socialMemberImage: [
      "/facebook_icon_team.png",
      "/twitter_icon_team.png",
      "/linkedin_icon_team.png",
      "/instagram_icon_team.png",
    ],
  },

  {
    bgTeam: "bg-primary",
    nameMember: "Son Tung M-TP",
    jobMember: "Singer",
    imageMember: "/team_member_1.png",
    socialMemberImage: [
      "/facebook_icon_team.png",
      "/twitter_icon_team.png",
      "/linkedin_icon_team.png",
      "/instagram_icon_team.png",
    ],
  },
];
export { servicesList, blogList, teamList };
