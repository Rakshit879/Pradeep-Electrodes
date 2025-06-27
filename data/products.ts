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
    name: "Pradeep E-6013",
    slug: "mild-steel-electrode-6013",
    image: "/images/product1.jpeg",
    category: "Mild Steel Electrode",
    description:
      "E6013 is a versatile, rutile-coated welding electrode known for its smooth arc, easy slag removal, and excellent weld finish in all positions.",
    usps: [
      "Enhanced arc force and deep penetration for stronger, more reliable joints — minimizing cracking, defects, and joint failures.",
      "Superior fluidity control enables smooth out-of-position welding, easy electrode handling, faster operation, and reduced welder fatigue — allowing longer weld lengths per electrode and lower consumption.",
      "Reduced spatter and improved metal recovery for cleaner welds and enhanced efficiency.",
      "Exceptionally smooth, ripple-free weld bead appearance — among the best in its class.",
      "Excellent slag removal with easy arc striking and re-striking for consistent performance.",
      "No excessive red-hot conditions; provides superior shielding for X-ray quality, defect-free welds."
    ],
    specs: [
      { label: "AWS/SFA", value: "E 6013" },
      { label: "Yield Strength (N/mm²)", value: "≥380" },
      { label: "Tensile Strength (N/mm²)", value: "470–540" },
      { label: "Elongation Δ5(%)", value: "≥24" },
      { label: "Impact V (J) -30°C", value: "≥55" },
      { label: "Welding Conditions", value: "AC;DC±" }
    ]
  },
  {
    id: 2,
    name: "Weld Bond 308",
    slug: "stainless-steel-electrode-308",
    image: "/images/product1.jpeg",
    category: "Stainless Steel Electrode",
    description:
      "Weld Bond 308 is designed for welding austenitic stainless steels, offering high corrosion resistance and exceptional weldability on AC or DC sources.",
    usps: [
      "Self-lifting slag for effortless post-weld cleanup.",
      "Superior fluidity control enables smooth out-of-position welding, easy electrode handling, faster operation, and reduced welder fatigue — allowing longer weld lengths per electrode and lower consumption.",
      "Reduced spatter and improved metal recovery for cleaner welds and enhanced efficiency.",
      "Exceptionally smooth, ripple-free weld bead appearance — among the best in its class.",
      "Excellent slag removal with easy arc striking and re-striking for consistent performance.",
      "No excessive red-hot conditions; provides superior shielding for X-ray quality, defect-free welds."
    ],
    specs: [
      { label: "AWS", value: "E 308L" },
      { label: "Tensile Strength (N/mm²)", value: "≥550" },
      { label: "Elongation A5(%)", value: "≥35" },
      { label: "IMPACT VJ+20◦C", value: "≥ 60" },
      { label: "Welding Condition", value: "AC/DC(+)" }
    ]
  },
  {
    id: 3,
    name: "Weld Bond 309",
    slug: "stainless-steel-electrode-309",
    image: "/images/product1.jpeg",
    category: "Stainless Steel Electrode",
    description:
      "Weld Bond 309 is specially formulated for welding dissimilar metals and stainless-to-mild steel joints, offering excellent crack resistance, high strength, and superior performance on both AC and DC power sources.",
    usps: [
      "Designed for welding dissimilar metals and stainless-to-carbon steel joints with excellent metallurgical compatibility.",
      "Outstanding crack resistance and high tensile strength ensure durable, long-lasting welds.",
      "Versatile performance on both AC and DC power sources for greater flexibility in various welding setups.",
      "Smooth, stable arc with minimal spatter for cleaner, more efficient welding.",
      "Easy slag removal and excellent weld bead appearance with ripple-free finish.",
      "High resistance to heat and oxidation, making it suitable for high-temperature and corrosive environments.",
      "Consistent arc re-strike and low heat input reduce warping and minimize heat-affected zone (HAZ)."
    ],

    specs: [
      { label: "AWS", value: "E 309L" },
      { label: "YIELD STRENGTH N/MM2", value: "≥350" },
      { label: "TENSILE STRENGTH N/MM2", value: "≥550" },
      { label: "ELONGATION A5(%)", value: "≥35" },
      { label: "IMPACT(J)", value: "≥47" }
    ]
  },
  {
    id: 4,
    name: "7016 Welding Electrode",
    slug: "7016-welding-electrode",
    image: "/images/product1.jpeg",
    category: "7016 Welding Electrode",
    description:
      "A premium basic-coated, low hydrogen electrode designed to deliver robust, crack-free weld joints with superior mechanical integrity. It offers excellent arc stability and control across all welding positions, making it the preferred choice for critical applications, especially root pass welding.",
    usps: [
      "Low hydrogen formulation minimizes the risk of cracking and porosity in weld joints.",
      "Excellent arc stability and control in all welding positions, including vertical and overhead.",
      "Ideal for root pass welding with superior penetration and bead profile.",
      "Smooth and uniform welds with minimal spatter and easy slag removal.",
      "Produces strong, high-integrity joints suitable for structural and pressure vessel applications.",
      "Performs well on both AC and DC power sources for added versatility.",
      "Optimized for critical welding tasks requiring high strength and toughness."
    ],


    specs: [
      { label: "AWS/SFA", value: "E 7016 " },
      { label: "YIELD STRENGTH N/MM2", value: "450" },
      { label: "TENSILE STRENGTH N/MM2", value: "550-620" },
      { label: "ELONGATION A5(%)", value: "30" },
      { label: "CHARPY IMPACT VALUE ISO-V J+0°C", value: "70" }
    ]
  },
  {
    id: 5,
    name: "7018 Welding Electrode",
    slug: "7018-welding-electrode",
    image: "/images/product1.jpeg",
    category: "7018 Welding Electrode",
    description:
      "E7018 is a low-hydrogen, iron powder electrode designed for high-strength, crack-resistant welds with excellent mechanical properties. It offers smooth arc stability, minimal spatter, and superior performance in structural, pipeline, and pressure vessel applications. Ideal for out-of-position welding with easy slag removal and excellent re-strike characteristics.",
    usps: [
      "Unique self-lifting slag for effortless post-weld cleaning",
      "Exceptional impact notch toughness for superior mechanical performance",
      "Crack-resistant weld deposits ensuring long-term durability",
      "Minimal spatter for cleaner, more efficient welding",
      "Smooth, uniform weld beads with high metal recovery",
      "Ultra-low diffusible hydrogen content (≤4 ml/100g weld metal) to prevent hydrogen-induced cracking",
      "Premium-grade packaging to ensure product integrity and minimize transit damage"
    ],


    specs: [
      { label: "AWS/SFA", value: "E 7018 " },
      { label: "YIELD STRENGTH N/MM2", value: "≥450" },
      { label: "TENSILE STRENGTH N/MM2", value: "540-620" },
      { label: "ELONGATION A5(%)", value: "≥27" },
      { label: "IMPACT O V (J) -30°C", value: "≥80" },
      { label: "WELDING CONDITIONS", value: "AC/DC(+)" }
    ]
  },
];
