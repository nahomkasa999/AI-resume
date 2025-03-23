"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// Template category icons (you'll need to add these icons to your project)
const CategoryIcons = {
  all: <svg className="w-5 h-5" /* Add your icon SVG here */ />,
  picture: <svg className="w-5 h-5" /* Add your icon SVG here */ />,
  word: <svg className="w-5 h-5" /* Add your icon SVG here */ />,
  simple: <svg className="w-5 h-5" /* Add your icon SVG here */ />,
  ats: <svg className="w-5 h-5" /* Add your icon SVG here */ />,
  twoColumn: <svg className="w-5 h-5" /* Add your icon SVG here */ />,
  googleDocs: <svg className="w-5 h-5" /* Add your icon SVG here */ />,
};

export default function TemplatesPage() {
  const router = useRouter();
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    async function fetchTemplates() {
      try {
        const response = await fetch('/api/figma/templates');
        const data = await response.json();
        setTemplates(data.templates);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    }
    fetchTemplates();
  }, []);

  const categories = [
    { id: 'all', name: 'All templates' },
    { id: 'picture', name: 'Picture' },
    { id: 'word', name: 'Word' },
    { id: 'simple', name: 'Simple' },
    { id: 'ats', name: 'ATS' },
    { id: 'twoColumn', name: 'Two-column' },
    { id: 'googleDocs', name: 'Google Docs' },
  ];

  // Handler for template selection
  const handleTemplateSelect = (templateId) => {
    router.push(`/builder?template=${templateId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span>›</span>
        <span>Resume Templates</span>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Resume templates</h1>
        <p className="text-gray-600 mb-2">
          Each resume template is designed to follow the exact rules you need to get hired faster.
        </p>
        <p className="text-gray-600 mb-6">
          Use our resume templates and get free access to 18 more career tools!
        </p>
        <button 
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
          onClick={() => handleTemplateSelect(templates[0]?.id)} // Use first template as default
        >
          Create my resume
        </button>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-4 mb-12 justify-center">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors
              ${activeCategory === category.id 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {CategoryIcons[category.id]}
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template, index) => (
          <div 
            key={template.id} 
            className="bg-gray-50 rounded-lg overflow-hidden group cursor-pointer"
            onClick={() => handleTemplateSelect(template.id)}
          >
            {/* Template Preview */}
            <div className="relative aspect-[3/4]">
              <Image
                src={template.imageUrl}
                alt={template.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={index < 6}
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black-300 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <button 
                  className="bg-blue-600 text-white px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent double navigation
                    handleTemplateSelect(template.id);
                  }}
                >
                  Use Template
                </button>
              </div>

              {/* Color variants */}
              <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                <div className="w-4 h-4 rounded-full bg-white border-2 border-gray-300"></div>
                <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-gray-300"></div>
                <div className="w-4 h-4 rounded-full bg-black border-2 border-gray-300"></div>
              </div>

              {/* Format badges */}
              <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                <span className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded">PDF</span>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded">DOCX</span>
              </div>
            </div>

            {/* Template Info */}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
              <p className="text-gray-600 text-sm">Perfect balance of fresh and functional resume template design.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 