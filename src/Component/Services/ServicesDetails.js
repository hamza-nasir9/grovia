// src/app/services/[id]/page.js
'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const servicesData = {
  "digital-marketing": {
    title: "Digital Marketing",
    description: "Complete digital marketing solutions",
    details: "We provide end-to-end digital marketing services..."
  },
  "social-media-marketing": {
    title: "Social Media Marketing",
    description: "Social media strategy and management",
    details: "Build your brand on social media platforms..."
  },
  "seo-optimization": {
    title: "SEO & Content",
    description: "Search engine optimization",
    details: "Improve your website's search rankings..."
  },
  "ecommerce-solutions": {
    title: "E-commerce Solutions",
    description: "E-commerce store optimization",
    details: "Boost your online store sales..."
  },
  "brand-strategy": {
    title: "Brand Strategy",
    description: "Brand building and positioning",
    details: "Create a strong brand identity..."
  },
  "web-development": {
    title: "Web Development",
    description: "Website development services",
    details: "Build high-performance websites..."
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const id = params?.id;
    console.log(id)
  const service = servicesData[id];
  
  if (!service) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link href="/services" className="text-green-400 hover:text-green-300">
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Link href="/services" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 mb-8">
        <FaArrowLeft />
        <span>Back to Services</span>
      </Link>
      
      <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
      <p className="text-2xl text-gray-300 mb-6">{service.description}</p>
      <p className="text-lg">{service.details}</p>
    </div>
  );
}