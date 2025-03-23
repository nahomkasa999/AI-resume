"use client";
import { useState, useRef, useEffect } from 'react';

const TwitterCard = ({ username, handle, content, avatar, time, link }) => {
  return (
    <div className="max-w-lg border border-gray-200 p-4 rounded-xl bg-white">
      {/* Header with Profile Info */}
      <div className="flex items-center space-x-3 mb-3">
        <img 
          src={avatar} 
          alt={username} 
          className="w-12 h-12 rounded-full"
        />
        <div className="flex flex-col">
          <div className="flex items-center space-x-1">
            <span className="font-bold text-[15px] text-black">{username}</span>
            <svg 
              className="w-4 h-4 text-blue-400" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
            </svg>
          </div>
          <span className="text-gray-500 text-[15px]">@{handle}</span>
        </div>
      </div>

      {/* Tweet Content */}
      <div className="mb-3">
        <p className="text-[15px] text-gray-900 whitespace-pre-wrap">
          {content}
        </p>
        {link && (
          <a 
            href={link}
            className="text-blue-500 hover:underline text-[15px] block mt-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link}
          </a>
        )}
      </div>

      {/* Time and App Info */}
      <div className="flex items-center text-gray-500 text-[15px] mb-3">
        <span>{time}</span>
        <span className="mx-1">·</span>
        <span>Twitter Web App</span>
      </div>

      {/* Engagement Metrics */}
      <div className="flex items-center space-x-4 text-gray-500 border-t border-gray-100 pt-3">
        <div className="flex items-center space-x-2">
          <span className="text-[13px]">1.4k</span>
          <span className="text-[13px]">Likes</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-[13px]">177</span>
          <span className="text-[13px]">Retweets</span>
        </div>
      </div>
    </div>
  );
};

const Approval = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const companies = [
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
    { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
  ];

  const testimonials = [
    {
      username: "Sarah Anderson",
      handle: "sarah_tech",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      content: "This resume builder is absolutely amazing! Created a professional resume in minutes that perfectly highlights my skills and experience. The templates are so clean and modern.",
      time: "9:11 PM · Jan 18, 2023",
      link: "resumebuilder.io/templates"
    },
    {
      username: "Mike Chen",
      handle: "mike_dev",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      content: "Just landed my dream job using @resumebuilder! The ATS-friendly templates and AI suggestions made all the difference. Highly recommend checking it out!",
      time: "4:36 PM · Jan 19, 2023",
      link: "resumebuilder.io/success-stories"
    },
    {
      username: "Emily Rodriguez",
      handle: "em_design",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      content: "As a designer, I'm impressed by how polished and professional these resume templates look. The customization options are exactly what I needed.",
      time: "8:46 AM · Jan 20, 2023",
      link: "resumebuilder.io/design-templates"
    },
    {
      username: "David Kim",
      handle: "david_k",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      content: "The AI writing suggestions are incredible! Made my resume sound so much more professional. Already got callbacks from top companies! 🚀",
      time: "2:30 PM · Jan 21, 2023",
      link: "resumebuilder.io/ai-features"
    },
    {
      username: "Lisa Thompson",
      handle: "lisa_ux",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
      content: "Finally, a resume builder that understands modern design! The templates are beautiful and the customization options are exactly what I needed.",
      time: "11:20 AM · Jan 22, 2023",
      link: "resumebuilder.io/design"
    },
    {
      username: "James Wilson",
      handle: "jwilson",
      avatar: "https://randomuser.me/api/portraits/men/6.jpg",
      content: "Changed jobs after 5 years and this made my resume look incredible. The ATS optimization really works - got way more responses than before!",
      time: "3:45 PM · Jan 23, 2023",
      link: "resumebuilder.io/ats-optimization"
    }
  ];

  const SCROLL_SPEED = 3; // Seconds per slide
  
  useEffect(() => {
    // Create keyframe animation for continuous scroll
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollWidth = slider.scrollWidth / 2; // Half because we duplicate the items
    const animationDuration = scrollWidth * SCROLL_SPEED / 800; // Adjust speed

    // Create and apply the animation
    slider.style.animation = `scroll ${animationDuration}s linear infinite`;

    // Define the animation
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
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <section id="testimonial" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Companies Section */}
        <div className="mb-20">
          <h3 className="text-center text-xl text-gray-600 mb-12">
            Our candidates have been hired at:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className="w-32 h-12 relative grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 my-20"></div>

        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Reviewed by the community.
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted by professionals
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="relative overflow-hidden">
          <div 
            ref={sliderRef}
            className="flex gap-6 whitespace-nowrap"
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <div 
                key={`first-${index}`}
                className="inline-flex flex-none w-[400px]"
              >
                <TwitterCard {...testimonial} />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div 
                key={`second-${index}`}
                className="inline-flex flex-none w-[400px]"
              >
                <TwitterCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approval;
