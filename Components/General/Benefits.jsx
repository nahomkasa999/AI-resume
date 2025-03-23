"use client";
import { useRouter } from 'next/navigation';

const Benefits = () => {
  const router = useRouter();

  return (
    <section>
      {/* ... other code ... */}
      <div className="text-center mt-12">
        <button 
          onClick={() => router.push('/order')}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Create your resume now
        </button>
      </div>
    </section>
  );
}; 