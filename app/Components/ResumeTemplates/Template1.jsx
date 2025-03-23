const Template1 = ({ formData }) => {
  const { personalInfo, workExperience, education, skills } = formData;

  return (
    <div className="w-[612px] h-[792px] bg-white">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          {personalInfo?.fullName || 'Your Name'}
        </h1>
        <p className="text-lg text-gray-800 mt-1">
          {personalInfo?.title || 'Professional Title'}
        </p>
        <div className="flex gap-4 mt-2 text-sm text-gray-700">
          {personalInfo?.email && <span>{personalInfo.email}</span>}
          {personalInfo?.phone && <span>{personalInfo.phone}</span>}
          {personalInfo?.location && <span>{personalInfo.location}</span>}
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Work Experience</h2>
        {workExperience.map((work, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">{work.position}</h3>
                <p className="text-gray-800">{work.company}</p>
              </div>
              <p className="text-gray-700 text-sm">
                {work.startDate} - {work.endDate}
              </p>
            </div>
            <p className="text-gray-700 mt-2">{work.description}</p>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-gray-800">{edu.school}</p>
              </div>
              <p className="text-gray-700 text-sm">
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
            <p className="text-gray-700 mt-2">{edu.description}</p>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Template1; 