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
    title: "定制首饰独立站",
    description: "为定制首饰品牌打造的 Shopify 独立站，提供个性化的设计。",
    image: "/shopify-blog/project3.webp",
    url: "https://www.fleurshine.com/",
    tags: ["Shopify Theme", "Custom Design"],
  },
  {
    id: "1",
    title: "54D Theme",
    description: "为销售健身课程的品牌搭建的 Shopify 主题。",
    image: "/shopify-blog/project1.webp",
    url: "https://landing.54d.com/",
    tags: ["Shopify Theme", "Custom Design"],
  },
  {
    id: "2",
    title: "二手奢侈品独立站",
    description: "为二手奢侈品品牌打造的 Shopify 独立站，支持多渠道销售与库存管理。",
    image: "/shopify-blog/project2.webp",
    url: "https://miloura.com/",
    tags: ["Shopify Theme", "Liquid"],
  },
  {
    id: "3",
    title: "Goflash",
    description: "面向海外的购物返利电商平台。",
    image: "/shopify-blog/goflash.webp",
    url: "https://goflashdeals.com/",
    tags: ["React", "Nextjs"],
  },
];
