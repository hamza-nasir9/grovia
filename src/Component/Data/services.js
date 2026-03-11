// data/services.js
export const services = [
  {
    id: 'web-development',
    title: 'Website Design & Development',
    shortDescription: 'Custom websites that convert visitors into customers',
    description: 'We create stunning, responsive websites that are not just beautiful but also highly functional and optimized for conversions. Our team of expert developers uses the latest technologies to build websites that deliver exceptional user experience and drive business growth.',
    longDescription: `At Adscalify, we don't just build websites; we create digital experiences that convert. Our web development process combines cutting-edge technology with strategic design to deliver websites that not only look amazing but also perform exceptionally.

We specialize in:
• Responsive websites that work perfectly on all devices
• E-commerce solutions with secure payment gateways
• Custom web applications tailored to your business needs
• Content Management Systems (CMS) for easy updates
• Website maintenance and security services

Our development stack includes React.js, Next.js, Node.js, WordPress, and Shopify, ensuring we use the right technology for your specific requirements.`,

    icon: '💻',
    features: [
      'Custom Web Design',
      'Responsive Development',
      'E-commerce Solutions',
      'CMS Integration',
      'Performance Optimization',
      'Security Implementation',
      'SEO-Friendly Structure',
      'Mobile-First Approach'
    ],
    process: [
      { step: 1, title: 'Discovery & Planning', desc: 'Understanding your goals, target audience, and business requirements' },
      { step: 2, title: 'UI/UX Design', desc: 'Creating wireframes, prototypes, and visual designs for user experience' },
      { step: 3, title: 'Development', desc: 'Coding with modern technologies and best practices' },
      { step: 4, title: 'Testing & Launch', desc: 'Quality assurance, performance testing, and deployment' }
    ],
    technologies: ['React/Next.js', 'WordPress', 'Shopify', 'Node.js', 'MongoDB', 'AWS', 'Tailwind CSS', 'Figma'],
    // pricing: 'Starting from ₨25,000',
    deliveryTime: '2-6 Weeks',
    portfolio: ['E-commerce Store', 'Corporate Website', 'Portfolio Site', 'Web Application', 'Landing Page'],
    stats: { projects: '150+', satisfaction: '98%', clients: '80+', support: '24/7' },
    faq: [
      {
        q: 'How long does it take to develop a website?',
        a: 'Basic websites take 2-3 weeks, while complex e-commerce sites can take 4-6 weeks. We provide detailed timelines during our initial consultation.'
      },
      {
        q: 'Do you provide website maintenance?',
        a: 'Yes, we offer comprehensive maintenance packages including updates, security monitoring, backups, and technical support.'
      },
      {
        q: 'Can you redesign my existing website?',
        a: 'Absolutely! We specialize in website redesigns that improve user experience, speed, and conversion rates.'
      }
    ]
  },
  {
    id: 'seo',
    title: 'SEO (Search Engine Optimization)',
    shortDescription: 'Rank higher and drive organic traffic to your website',
    description: 'Our SEO strategies help your website rank on top of search engines, driving targeted organic traffic and increasing visibility. We use data-driven approaches to improve your search rankings.',
    longDescription: `SEO is more than just keywords - it's about creating a holistic strategy that improves your website's visibility and authority. Our comprehensive SEO services cover technical optimization, content strategy, and link building to ensure sustainable growth.

Our SEO services include:
• Comprehensive technical SEO audits
• On-page optimization for better rankings
• Content strategy and optimization
• Link building and digital PR
• Local SEO for location-based businesses
• E-commerce SEO for online stores
• Regular performance reporting and analysis

We use tools like SEMrush, Ahrefs, and Google Search Console to track progress and make data-driven decisions.`,

    icon: '🔍',
    features: [
      'Keyword Research & Analysis',
      'On-page SEO Optimization',
      'Technical SEO Audit',
      'Link Building Strategy',
      'Local SEO',
      'SEO Analytics & Reporting',
      'Content Optimization',
      'Competitor Analysis'
    ],
    process: [
      { step: 1, title: 'Audit & Analysis', desc: 'Complete website SEO audit and competitor analysis' },
      { step: 2, title: 'Strategy Development', desc: 'Customized SEO strategy based on research findings' },
      { step: 3, title: 'Implementation', desc: 'On-page, technical, and off-page optimization' },
      { step: 4, title: 'Monitoring', desc: 'Regular tracking, reporting, and strategy adjustments' }
    ],
    technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Google Search Console', 'Screaming Frog', 'Moz'],
    // pricing: 'Starting from ₨15,000/month',
    deliveryTime: 'Ongoing',
    portfolio: ['Local Business SEO', 'E-commerce SEO', 'Service Business SEO', 'SaaS SEO', 'Blog SEO'],
    stats: { projects: '120+', trafficIncrease: '300%', clients: '60+', keywords: '5000+' },
    faq: [
      {
        q: 'How long does it take to see SEO results?',
        a: 'Typically 3-6 months for noticeable improvements, depending on competition and website authority.'
      },
      {
        q: 'Do you guarantee #1 ranking on Google?',
        a: 'No ethical SEO agency guarantees rankings, but we guarantee increased organic traffic and improved rankings.'
      },
      {
        q: 'How often will I receive reports?',
        a: 'We provide detailed monthly reports with insights, progress tracking, and recommendations.'
      }
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    shortDescription: 'Build brand presence and engage with your audience',
    description: 'We create compelling social media strategies that increase brand awareness, engagement, and conversions across all platforms.',
    longDescription: `Social media is where your customers spend their time. We help you build a strong social media presence that engages your audience and drives business results.

Our social media services include:
• Platform-specific strategy development
• Content creation and calendar management
• Community engagement and management
• Paid social media advertising
• Influencer marketing campaigns
• Social media analytics and reporting
• Brand reputation management

We work with all major platforms including Facebook, Instagram, LinkedIn, Twitter, TikTok, and Pinterest to maximize your reach and engagement.`,

    icon: '📱',
    features: [
      'Social Media Strategy',
      'Content Creation & Scheduling',
      'Community Management',
      'Paid Social Advertising',
      'Influencer Marketing',
      'Analytics & Reporting',
      'Brand Monitoring',
      'Crisis Management'
    ],
    process: [
      { step: 1, title: 'Audit & Research', desc: 'Analyze current presence, competitors, and audience insights' },
      { step: 2, title: 'Strategy Development', desc: 'Platform-specific content and engagement strategy' },
      { step: 3, title: 'Content Creation', desc: 'Design and create engaging visual and written content' },
      { step: 4, title: 'Management & Growth', desc: 'Daily management, engagement, and growth hacking' }
    ],
    technologies: ['Meta Business Suite', 'Instagram', 'LinkedIn', 'Twitter/X', 'TikTok', 'Hootsuite', 'Buffer', 'Canva'],
    // pricing: 'Starting from ₨20,000/month',
    deliveryTime: 'Ongoing',
    portfolio: ['Brand Awareness Campaign', 'Product Launch', 'Lead Generation Campaign', 'Event Promotion', 'Customer Engagement'],
    stats: { projects: '200+', engagementRate: '15%', clients: '100+', followers: '1M+' },
    faq: [
      {
        q: 'Which social media platforms should I use?',
        a: 'We help you identify the right platforms based on your target audience and business goals.'
      },
      {
        q: 'How often should I post on social media?',
        a: 'Optimal frequency varies by platform: Instagram (3-5x/week), Facebook (3-5x/week), LinkedIn (2-3x/week), Twitter (1-2x/day).'
      },
      {
        q: 'Do you provide social media content creation?',
        a: 'Yes, we create all content including graphics, videos, captions, and hashtags.'
      }
    ]
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing',
    shortDescription: 'Create valuable content that attracts and retains customers',
    description: 'Our content marketing services help you tell your brand story, educate your audience, and drive sustainable growth through valuable content.',
    longDescription: `Content is the foundation of digital marketing. We create content that resonates with your audience, builds trust, and drives conversions.

Our content marketing services include:
• Content strategy and planning
• Blog writing and management
• Video content production
• Email marketing campaigns
• Infographics and visual content
• eBook and whitepaper creation
• Content distribution and promotion
• Content performance analysis

We focus on creating content that answers your audience's questions, solves their problems, and positions you as an industry authority.`,

    icon: '✍️',
    features: [
      'Content Strategy Development',
      'Blog Writing & Management',
      'Video Content Creation',
      'Email Marketing',
      'Infographics & Visual Content',
      'Content Distribution',
      'Performance Analytics',
      'Content Optimization'
    ],
    process: [
      { step: 1, title: 'Audience Research', desc: 'Understand target audience needs, pain points, and content preferences' },
      { step: 2, title: 'Content Planning', desc: 'Create editorial calendar and content themes' },
      { step: 3, title: 'Content Creation', desc: 'Write, design, and produce high-quality content' },
      { step: 4, title: 'Distribution', desc: 'Publish and promote content across multiple channels' }
    ],
    technologies: ['WordPress', 'Mailchimp', 'Canva', 'Adobe Creative Suite', 'Google Docs', 'Grammarly', 'HubSpot'],
    // pricing: 'Starting from ₨18,000/month',
    deliveryTime: 'Ongoing',
    portfolio: ['Blog Management', 'Newsletter Campaigns', 'Video Series', 'Case Studies', 'Whitepapers'],
    stats: { projects: '90+', contentPieces: '5000+', clients: '50+', readership: '100K+' },
    faq: [
      {
        q: 'How often should I publish new content?',
        a: 'We recommend 2-4 blog posts per week and regular social media updates for optimal results.'
      },
      {
        q: 'What type of content works best?',
        a: 'It depends on your audience, but typically how-to guides, case studies, and video content perform well.'
      },
      {
        q: 'How do you measure content marketing success?',
        a: 'We track metrics like traffic, engagement, leads generated, and conversion rates.'
      }
    ]
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    shortDescription: 'Get measurable results with data-driven advertising',
    description: 'Our performance marketing campaigns are optimized to deliver maximum ROI through targeted advertising across multiple channels.',
    longDescription: `Performance marketing is about getting results you can measure. We create data-driven advertising campaigns that deliver maximum return on investment.

Our performance marketing services include:
• Google Ads (Search, Display, Shopping)
• Facebook and Instagram advertising
• LinkedIn advertising for B2B
• Conversion rate optimization
• Landing page optimization
• Retargeting campaigns
• Analytics and ROI tracking
• A/B testing and optimization

We focus on measurable KPIs like cost per acquisition (CPA), return on ad spend (ROAS), and conversion rates to ensure your advertising budget delivers real results.`,

    icon: '📈',
    features: [
      'Google Ads Management',
      'Facebook/Instagram Ads',
      'Conversion Rate Optimization',
      'Retargeting Campaigns',
      'Landing Page Optimization',
      'ROI Tracking & Analytics',
      'A/B Testing',
      'Audience Targeting'
    ],
    process: [
      { step: 1, title: 'Goal Setting', desc: 'Define campaign objectives, KPIs, and target audience' },
      { step: 2, title: 'Audience Targeting', desc: 'Identify and segment target audience for precise targeting' },
      { step: 3, title: 'Campaign Setup', desc: 'Create and launch optimized ad campaigns across platforms' },
      { step: 4, title: 'Optimization', desc: 'Continuous testing, optimization, and performance improvement' }
    ],
    technologies: ['Google Ads', 'Meta Ads Manager', 'Google Analytics', 'Hotjar', 'Optimizely', 'Unbounce', 'Google Tag Manager'],
    // pricing: 'Starting from ₨25,000/month',
    deliveryTime: 'Ongoing',
    portfolio: ['Lead Generation Campaigns', 'E-commerce Sales', 'App Install Campaigns', 'Brand Awareness', 'Event Registrations'],
    stats: { projects: '150+', avgROI: '400%', clients: '70+', conversions: '50K+' },
    faq: [
      {
        q: 'How much should I budget for performance marketing?',
        a: 'We recommend starting with ₨30,000-50,000/month for testing, then scaling based on results.'
      },
      {
        q: 'How quickly will I see results?',
        a: 'You can see initial results within 2-4 weeks, with optimization leading to better results over time.'
      },
      {
        q: 'Do you manage both search and social ads?',
        a: 'Yes, we manage campaigns across Google, Facebook, Instagram, LinkedIn, and other platforms.'
      }
    ]
  },
  {
    id: 'branding',
    title: 'Branding & Graphic Design',
    shortDescription: 'Create a memorable brand identity that stands out',
    description: 'We help businesses develop strong brand identities through strategic design that communicates your values and resonates with your audience.',
    longDescription: `Your brand is more than just a logo - it's the complete experience your customers have with your business. We create comprehensive brand identities that tell your story and connect with your audience.

Our branding services include:
• Logo design and brand identity development
• Brand strategy and positioning
• Complete brand guidelines
• Marketing collateral design
• Packaging design
• Social media graphics and templates
• Presentation design
• Brand asset management

We work with you to understand your values, mission, and target audience to create a brand identity that truly represents your business and resonates with your customers.`,

    icon: '🎨',
    features: [
      'Logo Design & Brand Identity',
      'Brand Guidelines Development',
      'Marketing Collateral Design',
      'Packaging Design',
      'Social Media Graphics',
      'Presentation Design',
      'Brand Strategy',
      'Visual Identity Systems'
    ],
    process: [
      { step: 1, title: 'Discovery', desc: 'Understand brand values, mission, and target audience' },
      { step: 2, title: 'Concept Development', desc: 'Create multiple brand identity concepts and directions' },
      { step: 3, title: 'Design Refinement', desc: 'Polish and finalize selected design concepts' },
      { step: 4, title: 'Brand Guidelines', desc: 'Create comprehensive brand manual for consistent application' }
    ],
    technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Figma', 'After Effects', 'Procreate', 'Sketch'],
    // pricing: 'Starting from ₨30,000',
    deliveryTime: '2-4 Weeks',
    portfolio: ['Logo Design', 'Complete Brand Identity', 'Marketing Materials', 'Packaging Design', 'Brand Guidelines'],
    stats: { projects: '180+', satisfaction: '99%', clients: '90+', awards: '25+' },
    faq: [
      {
        q: 'What\'s included in a brand identity package?',
        a: 'Typically includes logo, color palette, typography, brand patterns, and basic applications.'
      },
      {
        q: 'How many logo concepts do you provide?',
        a: 'We provide 3-5 unique logo concepts in the initial presentation.'
      },
      {
        q: 'Do you provide source files?',
        a: 'Yes, we deliver all source files including AI, PSD, and vector formats.'
      }
    ]
  }
];