export const PRODUCTS = [
  {
    id: "fresh-milk",
    slug: "fresh-milk",
    name: "Fresh Whole Milk",
    category: "Fresh Milk",
    categoryKey: "milk",
    tagline: "Pure, untouched daily milk straight from our morning milking.",
    shortDesc: "Creamy, fresh and carefully processed to maintain natural nutrition and pure taste.",
    description: "Our signature Fresh Whole Milk comes directly from our healthy free-grazing cows every morning. Gently pasteurized to preserve its rich natural creaminess, vibrant flavor, and wholesome nutrients without any additives or preservatives.",
    image: "./src/assets/12.png",
    gallery: [
      "./src/assets/12.png",
      "./src/assets/13.png",
      "./src/assets/14.png"
    ],
    source: "AAVINARA Central Pastures, Tamil Nadu",
    type: "100% Whole Cow Milk",
    storage: "Keep Refrigerated at 2°C - 4°C",
    shelfLife: "3 Days from Chilling",
    sizes: ["500 ml Glass Bottle", "1 Litre Glass Bottle", "2 Litre Family Pack"],
    priceDisplay: "₹38 / 500ml · ₹70 / 1L",
    badges: ["Farm Fresh", "Pasteurized", "Zero Additives", "Glass Packaged"],
    highlights: [
      "Naturally high in Calcium, Vitamin D & A2 Protein",
      "Chilled to 4°C within 15 minutes of milking",
      "Delivered in reusable eco-friendly glass bottles",
      "Strict 24-parameter quality tested daily"
    ],
    nutrition: {
      energy: "64 kcal per 100ml",
      fat: "3.6g",
      protein: "3.3g",
      carbs: "4.7g",
      calcium: "120mg"
    }
  },
  {
    id: "full-cream-milk",
    slug: "full-cream-milk",
    name: "Full Cream Malai Milk",
    category: "Fresh Milk",
    categoryKey: "milk",
    tagline: "Rich, velvety whole milk with natural cream intact for traditional recipes.",
    shortDesc: "Extra rich texture with high natural cream content, ideal for kheer, tea, and desserts.",
    description: "Extracted from select morning yields, our Full Cream Malai Milk retains its complete natural fat content of 6.0%. Perfect for crafting velvety badam milk, aromatic tea, traditional sweets, and thick curd at home.",
    image: "./src/assets/15.png",
    gallery: [
      "./src/assets/15.png",
      "./src/assets/16.png"
    ],
    source: "AAVINARA Heritage Herd, Tamil Nadu",
    type: "Full Cream Pasteurised Milk",
    storage: "Keep Refrigerated at 2°C - 4°C",
    shelfLife: "3 Days from Chilling",
    sizes: ["500 ml Pouch", "1 Litre Pouch"],
    priceDisplay: "₹45 / 500ml · ₹85 / 1L",
    badges: ["6.0% Fat", "Thick Cream Layer", "Rich Taste"],
    highlights: [
      "Thick natural malai layer upon boiling",
      "No added fat or milk powder solids",
      "Ideal for traditional Indian sweets and badam milk",
      "Hygienically cold-filtered"
    ],
    nutrition: {
      energy: "90 kcal per 100ml",
      fat: "6.0g",
      protein: "3.4g",
      carbs: "5.0g",
      calcium: "135mg"
    }
  },
  {
    id: "curd",
    slug: "curd",
    name: "Farm Fresh Thick Curd",
    category: "Cultured Dairy",
    categoryKey: "cultured",
    tagline: "Smooth, velvety, and naturally cultured with traditional active probiotics.",
    shortDesc: "Naturally set curd crafted from fresh pasteurized milk for gut harmony and thick texture.",
    description: "AAVINARA Thick Curd is set in climate-controlled terracotta vessels using traditional strain cultures. Mildly tangy, dense, and packed with active gut-friendly probiotics, it is the ultimate comfort food for every meal.",
    image: "./src/assets/17.png",
    gallery: [
      "./src/assets/17.png",
      "./src/assets/18.png"
    ],
    source: "AAVINARA Artisanal Creamery",
    type: "Probiotic Set Curd",
    storage: "Keep Refrigerated at 4°C",
    shelfLife: "5 Days",
    sizes: ["400g Tub", "1kg Bucket"],
    priceDisplay: "₹40 / 400g · ₹90 / 1kg",
    badges: ["Probiotic", "Naturally Set", "Thick Texture", "No Gelatin"],
    highlights: [
      "Over 1 Billion live probiotic cultures per serving",
      "Zero artificial thickeners or stabilizers",
      "Naturally sets in small batches for consistent creaminess",
      "Gentle on digestion and rich in bio-available calcium"
    ],
    nutrition: {
      energy: "72 kcal per 100g",
      fat: "4.1g",
      protein: "3.7g",
      carbs: "4.8g",
      calcium: "140mg"
    }
  },
  {
    id: "paneer",
    slug: "paneer",
    name: "Artisanal Soft Paneer",
    category: "Fresh Cheese",
    categoryKey: "traditional",
    tagline: "Ultra-soft, melt-in-mouth cottage cheese crafted from pure morning milk.",
    shortDesc: "Hand-pressed cottage cheese with exceptional softness and high protein content.",
    description: "Made by coagulating fresh warm milk with natural lemon extract, our Paneer is gently hand-pressed in muslin cloth. Moist, tender, and porous, it absorbs spices beautifully without turning rubbery when cooked.",
    image: "./src/assets/19.png",
    gallery: [
      "./src/assets/19.png",
      "./src/assets/20.png"
    ],
    source: "AAVINARA Dairy Kitchen",
    type: "Fresh Cottage Cheese",
    storage: "Submerge in cold water & refrigerate at 2°C - 4°C",
    shelfLife: "7 Days (Vacuum Sealed)",
    sizes: ["200g Pack", "500g Pack"],
    priceDisplay: "₹110 / 200g · ₹260 / 500g",
    badges: ["Hand Pressed", "Ultra Soft", "18g Protein / 100g", "Fresh Made"],
    highlights: [
      "Made fresh every midnight for same-day delivery",
      "Porous structure absorbs gravies perfectly",
      "Zero starch, palm oil, or synthetic coagulants",
      "Rich source of vegetarian protein"
    ],
    nutrition: {
      energy: "265 kcal per 100g",
      fat: "20g",
      protein: "18.3g",
      carbs: "2.1g",
      calcium: "210mg"
    }
  },
  {
    id: "ghee",
    slug: "ghee",
    name: "Golden Bilona Desi Ghee",
    category: "Artisanal Ghee",
    categoryKey: "traditional",
    tagline: "Slowly simmered in small batches using traditional Bilona cultured butter.",
    shortDesc: "Granular, aromatic golden ghee with rich nutty notes and deep nutritional value.",
    description: "Crafted using the ancient 5-step Bilona method: fresh milk is converted into curd, hand-churned into makhan (butter), and simmered on low flame over wood logs. The result is a granular, nutty golden elixir bursting with aroma.",
    image: "./src/assets/21.png",
    gallery: [
      "./src/assets/21.png",
      "./src/assets/22.png"
    ],
    source: "AAVINARA Traditional Ghee Hearth",
    type: "100% Pure Cultured Cow Ghee",
    storage: "Store in cool dry place, away from sunlight",
    shelfLife: "9 Months",
    sizes: ["250ml Glass Jar", "500ml Glass Jar", "1 Litre Glass Jar"],
    priceDisplay: "₹380 / 250ml · ₹720 / 500ml · ₹1400 / 1L",
    badges: ["Bilona Method", "Cultured Butter", "Golden Granular", "Lab Certified"],
    highlights: [
      "Traditional slow-simmered wooden flame process",
      "Rich in Omega-3, Omega-6, & Vitamins A, D, E, K",
      "Lactose-free & casein-free pure butter oil",
      "Irresistible authentic granular texture (Danedar)"
    ],
    nutrition: {
      energy: "898 kcal per 100ml",
      fat: "99.7g",
      protein: "0g",
      carbs: "0g",
      vitaminA: "3000 IU"
    }
  },
  {
    id: "buttermilk",
    slug: "buttermilk",
    name: "Spiced Farm Mor (Buttermilk)",
    category: "Refreshment",
    categoryKey: "cultured",
    tagline: "Churned probiotic buttermilk spiced with ginger, curry leaves & mustard seeds.",
    shortDesc: "Cooling traditional spiced churned buttermilk for ultimate summer hydration.",
    description: "Freshly churned from our cultured curd, blended with ice-cold spring water, pounded green chillies, ginger, toasted cumin, fresh coriander, and crisp curry leaves. Light, refreshing, and digestive.",
    image: "./src/assets/23.png",
    gallery: [
      "./src/assets/23.png"
    ],
    source: "AAVINARA Cold Kitchen",
    type: "Cultured Spiced Buttermilk",
    storage: "Serve Chilled at 2°C - 4°C",
    shelfLife: "2 Days",
    sizes: ["300ml Bottle", "500ml Bottle"],
    priceDisplay: "₹25 / 300ml · ₹40 / 500ml",
    badges: ["100% Natural", "Electrolyte Rich", "Low Fat"],
    highlights: [
      "Natural hydration packed with active electrolytes",
      "Infused with farm-fresh herbs and hand-ground spices",
      "Only 25 calories per bottle with 0.8% natural fat",
      "Perfect post-meal digestive remedy"
    ],
    nutrition: {
      energy: "25 kcal per 100ml",
      fat: "0.8g",
      protein: "1.2g",
      carbs: "3.1g",
      sodium: "180mg"
    }
  },
  {
    id: "fresh-cream",
    slug: "fresh-cream",
    name: "Pure Farm Fresh Cream",
    category: "Fresh Cream",
    categoryKey: "milk",
    tagline: "Silky, unadulterated high-fat dairy cream skimmed from top morning yields.",
    shortDesc: "Rich whipping cream perfect for gourmet gravies, soups, coffees, and baking.",
    description: "Skimmed within hours of pasteurization, our Fresh Cream contains 25% natural milk fat without emulsifiers or gums. Adds unmatched silky richness to North & South Indian gravies, pastas, and desserts.",
    image: "./src/assets/24.png",
    gallery: [
      "./src/assets/24.png"
    ],
    source: "AAVINARA Creamery",
    type: "25% Fat Dairy Cream",
    storage: "Keep Refrigerated at 2°C - 4°C. Do not freeze.",
    shelfLife: "4 Days",
    sizes: ["200ml Pack", "500ml Pack"],
    priceDisplay: "₹65 / 200ml · ₹150 / 500ml",
    badges: ["25% Natural Fat", "No Thickeners", "Silky Smooth"],
    highlights: [
      "Natural cream separation without chemical centrifuging",
      "Easy whipping consistency for sweet & savory dishes",
      "Zero added oil, vegetable fat, or artificial stabilizers",
      "Sealed in oxygen-barrier recyclable containers"
    ],
    nutrition: {
      energy: "240 kcal per 100g",
      fat: "25.0g",
      protein: "2.1g",
      carbs: "3.2g",
      calcium: "90mg"
    }
  }
];
