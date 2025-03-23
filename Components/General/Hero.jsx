"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();

  return (
    <section id="home" className="pt-28 pb-20 bg-gradient-to-r from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Banner */}
        <div className="text-center mb-8">
          <p className="inline-flex items-center bg-white px-4 py-2 rounded-full text-gray-600 shadow-sm">
            <span className="text-blue-600 font-semibold">30,083</span>
            &nbsp;resumes created today
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              The resume builder that
              <span className="text-blue-600"> gets you hired</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Only 2% of resumes win. Yours will be one of them. Let's build you a resume that works.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => router.push('/templates')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                Create my resume
              </button>
              <button 
                onClick={() => router.push('/templates')}
                className="border-2 border-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-lg text-gray-700"
              >
                Upload my resume
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-12">
              <div>
                <h3 className="text-4xl font-bold text-green-500">39%</h3>
                <p className="text-gray-600">more likely to get hired</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-yellow-500">8%</h3>
                <p className="text-gray-600">better pay with your next job</p>
              </div>
            </div>
          </div>

          {/* Right Content - Resume Preview */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Resume Image */}
              <div className="bg-white rounded-lg shadow-2xl p-4 relative z-10">
                <Image
                  src="/resume-preview.png" // You'll need to add this image to your public folder
                  alt="Resume Preview"
                  width={500}
                  height={700}
                  className="rounded-lg"
                  priority
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 -mr-4 -mt-4 text-6xl z-20">
                ✨
              </div>
              <div className="absolute bottom-0 left-0 -ml-4 mb-4 text-4xl z-20">
                🎯
              </div>

              {/* Floating UI Elements */}
              <div className="absolute top-4 right-0 bg-white rounded-lg shadow-lg p-3 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-gray-600">ATS Friendly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
