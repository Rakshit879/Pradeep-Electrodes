// /data/products.ts
export const categories = [
  "Mild Steel Electrode",
  "Stainless Steel Electrode",
  "Cast Iron Electrode",
  "Cutting Electrode",
  "Hard V Electrode",
  "7016 Welding Electrode",
  "7018 Welding Electrode",
];

export const products = [
  {
    id: 1,
    name: "SUPER OPTIMAL 7016",
    slug: "super-optimal-7016",
    image: "/images/product1.jpeg",
    category: "Mild Steel Electrode", // 🔥 Add this line
    description: "Basic coated, low hydrogen electrode for producing tough and crack-free welded joints...",
    usps: [
      "Ultra smooth finely rippled weld beads.",
      "Less than 4.0 ml diffusible hydrogen.",
      "Excellent impact notch toughness in class.",
      "Superior reliability for critical welding."
    ],
    aws: "E 7018 - H4",
    yieldStrength: 450,
    tensileStrength: "550-820",
    elongation: 30,
    impactValue: 70
  },
  
];
