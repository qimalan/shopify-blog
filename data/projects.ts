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
    id: "1",
    title: "Minimal Fashion Theme",
    description: "为高端时尚品牌打造的极简主义 Shopify 主题，注重产品展示与用户体验。",
    image: "/projects/project-1.jpg",
    url: "https://example.com",
    tags: ["Shopify Theme", "Liquid"],
  },
  {
    id: "2",
    title: "Inventory Sync App",
    description: "多渠道库存同步应用，支持实时库存更新与自动化管理。",
    image: "/projects/project-2.jpg",
    url: "https://example.com",
    tags: ["Shopify App", "React"],
  },
  {
    id: "3",
    title: "Luxury Jewelry Store",
    description: "奢侈珠宝品牌定制主题，融合优雅设计与流畅购物体验。",
    image: "/projects/project-3.jpg",
    url: "https://example.com",
    tags: ["Shopify Theme", "Custom Design"],
  },
];
