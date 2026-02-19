export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "0",
    title: "Goflash",
    description: "面向海外的购物返利电商平台。",
    image: "/goflash.png",
    url: "https://goflashdeals.com/",
    tags: ["React", "Nextjs"],
  },
  // {
  //   id: "1",
  //   title: "变体级别补货通知 App",
  //   description: "为 Shopify 品牌开发的变体级别补货通知应用，提升客户购物体验。",
  //   image: "/project3.png",
  //   url: "https://landing.54d.com/",
  //   tags: ["Shopify App", "React"],
  // },
  {
    id: "2",
    title: "54D Theme",
    description: "为销售健身课程的品牌搭建的 Shopify 主题。",
    image: "/project1.png",
    url: "https://landing.54d.com/",
    tags: ["Shopify Theme", "Custom Design"],
  },
  {
    id: "3",
    title: "二手奢侈品独立站",
    description: "为二手奢侈品品牌打造的 Shopify 独立站，支持多渠道销售与库存管理。",
    image: "/project2.png",
    url: "https://miloura.com/",
    tags: ["Shopify Theme", "Liquid"],
  },
];
