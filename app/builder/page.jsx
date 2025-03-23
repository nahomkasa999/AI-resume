'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

export default function BuilderPage() {
  const searchParams = useSearchParams();
  const templateId = searchParams.get('template');
  const [svgContent, setSvgContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [textElements, setTextElements] = useState([]);

  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: '',
      title: 'Computer Engineer',
      email: '',
      phone: '',
      location: '',
    },
    workExperience: [],
    education: [],
    skills: [],
    professionalSummary: ''
  });

  useEffect(() => {
    async function fetchTemplate() {
      try {
        // 1. First get template data
        const response = await fetch(`/api/figma/templates/${templateId}`);
        if (!response.ok) throw new Error('Failed to fetch template data');
        const data = await response.json();

        // 2. Fetch SVG content without timeout
        const svgResponse = await fetch(data.template.svgUrl);
        if (!svgResponse.ok) throw new Error('Failed to fetch SVG');
        const svgText = await svgResponse.text();

        // Log the raw SVG text to see what we're getting
        console.log('SVG Content:', svgText);

        // 3. Parse SVG and extract text elements
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
        const texts = svgDoc.querySelectorAll('text');
        
        // Log each text element we find
        texts.forEach((text, index) => {
          console.log(`Text Element ${index}:`, {
            content: text.textContent,
            x: text.getAttribute('x'),
            y: text.getAttribute('y')
          });
        });

        // Store text elements
        setTextElements(Array.from(texts).map((text, index) => ({
          index,
          content: text.textContent,
          x: text.getAttribute('x'),
          y: text.getAttribute('y')
        })));

        // Set SVG content
        setSvgContent(svgText);
        
      } catch (error) {
        console.error('Error fetching template:', error);
      } finally {
        setLoading(false);
      }
    }

    if (templateId) {
      fetchTemplate();
    }
  }, [templateId]);

  // Update SVG text when form data changes
  useEffect(() => {
    if (svgContent && !loading) {
      const svg = document.querySelector('#resumeSvg');
      if (svg) {
        const nameElement = svg.querySelector('[data-field="name"]');
        const titleElement = svg.querySelector('[data-field="title"]');

        if (nameElement && formData.personalInfo.fullName) {
          nameElement.textContent = formData.personalInfo.fullName;
        }
        if (titleElement && formData.personalInfo.title) {
          titleElement.textContent = formData.personalInfo.title;
        }
      }
    }
  }, [formData, svgContent, loading]);

  const updatePersonalInfo = (field, value) => {
    setFormData({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        [field]: value
      }
    });
    updateField(field, value);
  };

  const updateField = (field, value) => {
    const svg = document.querySelector('#resumeSvg');
    if (svg) {
      const textElement = svg.querySelector(`[data-editable="${field}"]`);
      if (textElement) {
        textElement.textContent = value;
      }
    }
  };

  const handleTextEdit = (field, e) => {
    const value = e.target.textContent || e.target.value;
    updatePersonalInfo(field, value);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left side - Form */}
      <div className="w-1/2 p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold">High School Student</h1>
          <div className="flex items-center gap-2">
            <span className="flex items-center">
              <Image src="/en-flag.png" alt="English" width={20} height={15} />
              <span className="ml-2">English</span>
            </span>
          </div>
        </div>

        {/* Resume Score */}
        <div className="bg-green-50 rounded-lg p-3 mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">100%</span>
            <span className="ml-2 text-sm text-gray-700">Your resume score</span>
          </div>
          <button className="text-blue-500 text-sm flex items-center">
            Improve resume
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Personal Details Section */}
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4">Personal details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md text-sm"
                value={formData.personalInfo.fullName}
                onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md text-sm"
                value={formData.personalInfo.title}
                onChange={(e) => updatePersonalInfo('title', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-md text-sm"
                value={formData.personalInfo.email}
                onChange={(e) => updatePersonalInfo('email', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                className="w-full p-2 border rounded-md text-sm"
                value={formData.personalInfo.phone}
                onChange={(e) => updatePersonalInfo('phone', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md text-sm"
                value={formData.personalInfo.location}
                onChange={(e) => updatePersonalInfo('location', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Professional Summary Section */}
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4">Professional Summary</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex gap-2 mb-2">
              <button className="p-1 hover:bg-gray-200 rounded">B</button>
              <button className="p-1 hover:bg-gray-200 rounded">I</button>
              <button className="p-1 hover:bg-gray-200 rounded">U</button>
            </div>
            <textarea
              className="w-full p-2 border rounded-md text-sm min-h-[100px]"
              placeholder="Write 2-4 short, energetic sentences about how great you are..."
              value={formData.professionalSummary}
              onChange={(e) => setFormData({ ...formData, professionalSummary: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Right side - Preview */}
      <div className="w-1/2 p-6 overflow-y-auto bg-gray-100">
        <div className="max-w-[612px] mx-auto">
          {loading ? (
            <div className="animate-pulse bg-white shadow-lg rounded-lg w-[612px] h-[792px]" />
          ) : (
            <div 
              id="resumeSvg"
              className="bg-white shadow-lg rounded-lg"
              dangerouslySetInnerHTML={{ __html: svgContent }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
