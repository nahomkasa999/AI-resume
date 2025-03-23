"use client";
import { useState } from 'react';

const TwitterCard = ({ username, handle, content, avatar, time, link, likes, retweets }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img src={avatar} alt={username} className="w-12 h-12 rounded-full" />
        <div className="ml-4">
          <h4 className="font-bold">{username}</h4>
          <p className="text-gray-500">@{handle}</p>
        </div>
      </div>
      <p className="text-gray-800 mb-4">{content}</p>
      <p className="text-gray-500 text-sm mb-4">{time}</p>
      <div className="flex items-center space-x-4 text-gray-500 border-t border-gray-100 pt-3">
        <div className="flex items-center space-x-2">
          <span className="text-[13px]">{likes}</span>
          <span className="text-[13px]">Likes</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-[13px]">{retweets}</span>
          <span className="text-[13px]">Retweets</span>
        </div>
      </div>
    </div>
  );
};

const Approval = () => {
  const testimonials = [
    {
      username: "Alex Thompson",
      handle: "alex_tech",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      content: "Thanks to Nahom, I landed my first software engineering role at Microsoft! Fresh out of bootcamp, I was worried about my resume, but his expertise made my skills shine. Within 2 weeks, I had multiple interviews! 🚀 #TechCareer",
      time: "3:30 PM · Mar 20, 2024",
      link: "t.me/nahomkasa",
      likes: "234",
      retweets: "45"
    },
    {
      username: "Emma Davis",
      handle: "emma_d",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      content: "Nahom transformed my resume completely! Got my first job at Goldman Sachs right after graduation. His understanding of what top companies look for is incredible. Best investment in my career! 💼 #Finance #FirstJob",
      time: "11:20 AM · Mar 18, 2024",
      link: "t.me/nahomkasa",
      likes: "189",
      retweets: "38"
    },
    {
      username: "Ryan Miller",
      handle: "ryan_m",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      content: "After struggling with job applications, Nahom helped me land a position at Google! His resume writing skills are exceptional - he knows exactly how to present your experience. Forever grateful! 🌟 #BigTech",
      time: "4:45 PM · Mar 15, 2024",
      link: "t.me/nahomkasa",
      likes: "167",
      retweets: "31"
    },
    {
      username: "Sophie Wilson",
      handle: "sophie_w",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      content: "From zero callbacks to multiple interviews! Nahom's resume got me my first marketing position at Netflix. His ability to highlight transferable skills is amazing. 3 interviews in the first week! ✨ #Marketing",
      time: "9:15 AM · Mar 12, 2024",
      link: "t.me/nahomkasa",
      likes: "203",
      retweets: "42"
    },
    {
      username: "James Anderson",
      handle: "james_tech",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      content: "Nahom's expertise is unmatched! Applied to Amazon with his resume and got hired! He knows exactly what FAANG companies are looking for. The resume he created perfectly showcased my projects. 🎯 #SoftwareEngineer",
      time: "2:30 PM · Mar 10, 2024",
      link: "t.me/nahomkasa",
      likes: "178",
      retweets: "35"
    },
    {
      username: "Isabella Clark",
      handle: "bella_c",
      avatar: "https://randomuser.me/api/portraits/women/6.jpg",
      content: "Best resume service ever! Nahom helped me transition into UX design at Apple. His modern resume template and way of presenting my skills were perfect. Doubled my previous salary! 🚀 #UXDesign #CareerChange",
      time: "1:20 PM · Mar 8, 2024",
      link: "t.me/nahomkasa",
      likes: "156",
      retweets: "29"
    }
  ];

  return (
    <section id="testimonial" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Companies Section */}
        <div className="mb-20">
          <h3 className="text-center text-xl text-gray-600 mb-12">
            My clients have been hired at:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Add your company logos here */}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            What clients say about Nahom
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Your trusted resume expert
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TwitterCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approval;