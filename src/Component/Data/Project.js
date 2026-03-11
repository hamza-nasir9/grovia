import img_two from '@/assets/emma.jpg'; 
import img_three from '@/assets/img_three.jpeg'; 
import img_four from '@/assets/img_four.jpeg'; 
import img_one from '@/assets/isaac.jpg'; 
import img_five from '@/assets/img_five.jpeg'; 
import img_seven from '@/assets/img_six.jpg'; 

export const projects = [
  {
    id: "ojea",
    title: "Ojea",
    tagline: "From Clicks to Conversions: Elevating Ojea with Meta, Google & Snapchat Ads",
    category: "Skin Care",
    industry: "Skin Care",
    location: "United State",
    duration: "6 Months",
    results: [
      { label: "Revenue Growth", value: "350%", color: "from-green-500 to-emerald-500" },
      { label: "ROAS", value: "8.2x", color: "from-emerald-500 to-green-600" },
      { label: "Conversion Rate", value: "42%", color: "from-green-600 to-emerald-600" },
      { label: "Customer Acquisition", value: "1200+", color: "from-emerald-600 to-green-700" }
    ],
    description: "Ojea is a premium men's Skin Care brand in United State, redefining luxury with high-quality accessories. Since 2020, Ojea has gained a strong reputation for offering elegantly crafted pendants, chains, rings, and bracelets—designed for 24/7 wear with lasting durability.",
    challenge: "Ojea struggled with converting social media engagement into actual sales. They had strong brand awareness but lacked a systematic approach to turn clicks into consistent conversions.",
    solution: "We implemented a multi-platform advertising strategy combining Meta, Google, and Snapchat Ads with advanced audience segmentation and retargeting funnels.",
    approach: [
      "Platform Strategy: Meta for awareness, Google for intent, Snapchat for youth engagement",
      "Audience Segmentation: High-value customers, fashion enthusiasts, gift shoppers",
      "Creative Optimization: Lifestyle-focused content showcasing durability and style",
      "Conversion Funnel: Multi-touch attribution with custom landing pages"
    ],
    highlights: [
      "Developed comprehensive brand identity and marketing strategy",
      "Created high-performing ad creatives across 3 platforms",
      "Implemented advanced tracking and analytics system",
      "Built scalable conversion funnels for sustainable growth"
    ],
    technologies: ["Meta Ads", "Google Ads", "Snapchat Ads", "Shopify", "Google Analytics"],
    image: img_one,
    color: "from-green-500 to-emerald-700"
  },
  {
    id: "freefly",
    title: "Free Fly",
    tagline: "Revolutionizing Digital Presence for Premium Apparel Brand",
    category: "Apparel",
    industry: "Apparel",
    location: "United State",
    duration: "8 Months",
    results: [
      { label: "Online Sales", value: "280%", color: "from-green-500 to-emerald-500" },
      { label: "Brand Awareness", value: "450%", color: "from-emerald-500 to-green-600" },
      { label: "Social Engagement", value: "65%", color: "from-green-600 to-emerald-600" },
      { label: "Market Share", value: "+22%", color: "from-emerald-600 to-green-700" }
    ],
    description: "Transforming Free Fly's digital marketing strategy to dominate the premium apparel market with targeted campaigns and innovative approaches.",
    challenge: "Need to modernize digital presence and increase direct-to-consumer sales.",
    solution: "Complete digital overhaul with focus on performance marketing and brand storytelling.",
    image: img_three,
    color: "from-blue-500 to-cyan-600"
  },
  {
    id: "tulips",
    title: "Tulips",
    tagline: "Digital Transformation for Traditional Textile Business",
    category: "Textile",
    industry: "Textile",
    location: "Global",
    duration: "1 Year",
    results: [
      { label: "Revenue Growth", value: "410%", color: "from-green-500 to-emerald-500" },
      { label: "Website Traffic", value: "320%", color: "from-emerald-500 to-green-600" },
      { label: "Order Value", value: "35%", color: "from-green-600 to-emerald-600" },
      { label: "Repeat Customers", value: "48%", color: "from-emerald-600 to-green-700" }
    ],
    description: "Bringing traditional textile business into digital age with modern e-commerce solutions.",
    challenge: "Traditional business struggling with online presence and digital sales.",
    solution: "Complete e-commerce setup with integrated digital marketing strategy.",
    image: img_five,
    color: "from-purple-500 to-pink-600"
  },
  {
    id: "blackbieger",
    title: "Black Bieger",
    tagline: "Footwear Marketing Excellence in Digital Space",
    category: "Footwear",
    industry: "Fashion",
    location: "United State",
    duration: "7 Months",
    results: [
      { label: "Lead Generation", value: "530%", color: "from-green-500 to-emerald-500" },
      { label: "Brand Trust", value: "75%", color: "from-emerald-500 to-green-600" },
      { label: "Digital Reach", value: "290%", color: "from-green-600 to-emerald-600" },
      { label: "Sales Growth", value: "180%", color: "from-emerald-600 to-green-700" }
    ],
    description: "Building digital credibility and trust for footwear products through strategic marketing.",
    challenge: "Regulated industry with strict marketing limitations.",
    solution: "Educational content strategy combined with targeted professional outreach.",
    image: img_four,
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "faster",
    title: "Faster",
    tagline: "Scaling Apparel Business with Digital Solutions",
    category: "Apparel",
    industry: "Fashion",
    location: "United State",
    duration: "6 Months",
    results: [
      { label: "Customer Growth", value: "220%", color: "from-green-500 to-emerald-500" },
      { label: "App Downloads", value: "180k", color: "from-emerald-500 to-green-600" },
      { label: "Operational Efficiency", value: "40%", color: "from-green-600 to-emerald-600" },
      { label: "Market Expansion", value: "+3 Cities", color: "from-emerald-600 to-green-700" }
    ],
    description: "Digital transformation for Apparel company expanding across Europe.",
    challenge: "Inefficient customer acquisition and operational bottlenecks.",
    solution: "Integrated digital platform with automated marketing funnels.",
    image: img_two,
    color: "from-orange-500 to-red-600"
  },
  {
    id: "tiffany",
    title: "Tiffany&Co",
    tagline: "Premium diamonds & fine jewelry, made to shine everyday.",
    category: "Jewellery",
    industry: "Fashion",
    location: "United State",
    duration: "9 Months",
    results: [
      { label: "MRR Growth", value: "310%", color: "from-green-500 to-emerald-500" },
      { label: "Enterprise Clients", value: "+45", color: "from-emerald-500 to-green-600" },
      { label: "Churn Reduction", value: "28%", color: "from-green-600 to-emerald-600" },
      { label: "Product Adoption", value: "85%", color: "from-emerald-600 to-green-700" }
    ],
    description: "A premium jewelry brand specializing in fine diamond and luxury jewelry, focused on timeless design and high-quality craftsmanship for modern customers.",
    challenge: "The brand needed stronger digital visibility and better customer engagement in a highly competitive luxury jewelry market.",
    solution: "We implemented a targeted digital marketing strategy, improving brand presence, audience reach, and engagement through optimized campaigns and content.",
    image: img_seven,
    color: "from-indigo-500 to-purple-600"
  }
];