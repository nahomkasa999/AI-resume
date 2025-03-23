const Template2 = ({ formData }) => {
  const { personalInfo, workExperience, education, skills } = formData;

  return (
    <div className="w-[612px] h-[792px] bg-white flex">
      {/* Left Sidebar */}
      <div className="w-1/3 bg-gray-900 text-white p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">
            {personalInfo.fullName || 'Your Name'}
          </h1>
          <p className="text-sm mt-1">
            {personalInfo.title || 'Professional Title'}
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <div className="space-y-1 text-sm">
            {personalInfo.email && <p>{personalInfo.email}</p>}
            {personalInfo.phone && <p>{personalInfo.phone}</p>}
            {personalInfo.location && <p>{personalInfo.location}</p>}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Skills</h2>
          <div className="space-y-1">
            {skills.map((skill, index) => (
              <p key={index} className="text-sm">{skill}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-2/3 p-6">
        {/* Work Experience */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Experience</h2>
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

        {/* Education */}
        <div>
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
      </div>
    </div>
  );
};

export default Template2; 