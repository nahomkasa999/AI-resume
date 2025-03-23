"use client";
import { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg text-gray-900">{question}</span>
        <svg
          className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is the definition of a resume?",
      answer: "A resume is a formal document that provides an overview of your professional qualifications, including your relevant work experience, skills, education, and notable accomplishments. It is typically used when applying for jobs and should be tailored to each specific position."
    },
    {
      question: "What is the difference between a CV and a resume?",
      answer: "A resume is a brief, concise document (1-2 pages) highlighting relevant professional experience and skills, typically used in job applications. A CV (Curriculum Vitae) is a longer, more detailed document focusing on academic and research background, commonly used in academic, medical, or research positions."
    },
    {
      question: "How do I choose the right resume template?",
      answer: "Choose a resume template based on your industry, experience level, and the job you're applying for. Consider factors like formality, creativity, and ATS-friendliness. For corporate roles, stick to traditional layouts. For creative positions, you might opt for more modern designs while maintaining professionalism."
    },
    {
      question: "How far back should a resume go?",
      answer: "Generally, a resume should cover the last 10-15 years of relevant experience. For most professionals, this means including your last 3-4 positions. Focus on recent, relevant experience that demonstrates your qualifications for the target position."
    },
    {
      question: "What does an ATS-friendly resume mean?",
      answer: "An ATS (Applicant Tracking System) friendly resume is formatted to be easily read and parsed by automated screening software. This includes using standard section headings, simple formatting, appropriate keywords from the job description, and avoiding tables, graphics, or unusual fonts."
    },
    {
      question: "What resume file format can I download in?",
      answer: "Our platform allows you to download your resume in multiple formats including PDF (recommended for most applications), DOCX (for easy editing), and plain text formats. PDF format ensures your resume's formatting remains consistent across different devices and platforms."
    },
    {
      question: "Is it worth paying for a resume builder?",
      answer: "Yes, a professional resume builder can be a valuable investment in your job search. It provides professionally designed templates, ATS-friendly formatting, expert content suggestions, and time-saving features that help create polished, effective resumes that stand out to employers."
    },
    {
      question: "Should I make a different resume for every job application?",
      answer: "Yes, you should tailor your resume for each job application. While you don't need to create an entirely new resume, adjust your experience descriptions and keywords to match the specific job requirements. This increases your chances of passing ATS screening and catching the recruiter's attention."
    },
    {
      question: "What makes resume.io the best resume builder?",
      answer: "Resume.io stands out for its user-friendly interface, professional templates, ATS-friendly designs, expert content suggestions, and comprehensive features. Our platform is continuously updated based on hiring trends and user feedback, ensuring you create resumes that meet current industry standards."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-1">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Support Links */}
        <div className="mt-12 space-y-4 text-center">
          <p className="text-gray-600">
            Can't find what you need yet? —{' '}
            <a href="#" className="text-blue-600 hover:underline">
              View our customer support articles
            </a>
          </p>
          <p className="text-gray-600">
            Need more career advice? —{' '}
            <a href="#" className="text-blue-600 hover:underline">
              View our career resources
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
