"use client";
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const TemplateCard = ({ image, users }) => {
  const router = useRouter();

  return (
    <div className="relative group inline-flex flex-none w-[300px] mx-3" id='templates'>
      {/* Template Image with Hover Effect */}
      <div className="relative aspect-[3/4] w-full transition-all duration-300 group-hover: z-50">
        <Image
          src={image}
          alt="Resume template"
          fill
          className="object-cover rounded-lg shadow-lg"
          priority
        />
        
        {/* Users Count - Shows on Hover */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-sm text-gray-700">{users} users</p>
        </div>

        {/* Action Button - Shows on Hover */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={() => router.push('/templates')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            Use this template
          </button>
        </div>
      </div>
    </div>
  );
};

const Template = () => {
  const sliderRef = useRef(null);
  const SCROLL_SPEED = 3; // Seconds per slide
  const router = useRouter();

  const templates = [
    { image: "/template/1.png", users: "410,000+" },
    { image: "/template/2.png", users: "380,000+" },
    { image: "/template/3.png", users: "350,000+" },
    { image: "/template/4.png", users: "290,000+" },
    { image: "/template/5.png", users: "275,000+" },
    { image: "/template/6.png", users: "260,000+" }
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollWidth = slider.scrollWidth / 2;
    const animationDuration = scrollWidth * SCROLL_SPEED / 100;

    // Create and apply the animation
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      .template-slider {
        animation: scroll ${animationDuration}s linear infinite;
      }

      .template-slider:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <section id="template" className="py-20 bg-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-orange-100 p-3 rounded-full">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proven resume templates
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            These resume templates are here because they work.
            Every one is tried and tested on real hiring managers
          </p>
        </div>

        {/* Templates Slider */}
        <div className="relative overflow-hidden">
          <div 
            ref={sliderRef}
            className="flex gap-6 whitespace-nowrap template-slider"
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {/* First set of templates */}
            {templates.map((template, index) => (
              <TemplateCard
                key={`first-${index}`}
                {...template}
              />
            ))}
            
            {/* Duplicate set for seamless loop */}
            {templates.map((template, index) => (
              <TemplateCard
                key={`second-${index}`}
                {...template}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Template;
