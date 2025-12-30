import { getCvData } from "@/data/data";
const cvData = getCvData();

export default function IndustrialCV() {
  return (
    <div className="min-h-screen bg-gray-200 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white border-4 border-gray-800">
        {/* Industrial Header */}
        <header className="bg-gray-800 text-white p-6 border-b-4 border-gray-600">
          <h1 className="text-4xl font-bold uppercase tracking-wider mb-2">
            {cvData.personalInfo.name}
          </h1>
          <p className="text-xl text-gray-300 uppercase tracking-wide mb-4">
            {cvData.personalInfo.title}
          </p>
          <div className="flex flex-wrap gap-4 text-sm border-t border-gray-600 pt-4">
            <span className="bg-gray-700 px-3 py-1 rounded">
              {cvData.personalInfo.email}
            </span>
            <span className="bg-gray-700 px-3 py-1 rounded">
              {cvData.personalInfo.phone}
            </span>
            <span className="bg-gray-700 px-3 py-1 rounded">
              {cvData.personalInfo.location}
            </span>
          </div>
        </header>

        <div className="p-6">
          {/* Summary */}
          <section className="mb-6 border-2 border-gray-300 p-4 bg-gray-50">
            <h2 className="text-xl font-bold uppercase text-gray-900 mb-3 border-b-2 border-gray-800 pb-2">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">{cvData.summary}</p>
          </section>

          {/* Experience */}
          <section className="mb-6">
            <h2 className="text-xl font-bold uppercase text-gray-900 mb-4 border-b-2 border-gray-800 pb-2">
              Professional Experience
            </h2>
            <div className="space-y-5">
              {cvData.experience.map((exp, idx) => (
                <div key={idx} className="border-l-4 border-gray-800 pl-4 bg-gray-50 p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 uppercase">
                        {exp.position}
                      </h3>
                      <p className="text-gray-700 font-semibold">{exp.company}</p>
                      <p className="text-gray-600 text-sm">{exp.location}</p>
                    </div>
                    <div className="text-right">
                      <span className="bg-gray-800 text-white px-3 py-1 text-sm font-bold">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-6">
            {/* Education */}
            <section className="border-2 border-gray-300 p-4 bg-gray-50">
              <h2 className="text-xl font-bold uppercase text-gray-900 mb-3 border-b-2 border-gray-800 pb-2">
                Education
              </h2>
              {cvData.education.map((edu, idx) => (
                <div key={idx} className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 uppercase">
                    {edu.degree} in {edu.field}
                  </h3>
                  <p className="text-gray-700 font-semibold">{edu.institution}</p>
                  <p className="text-gray-600 text-sm">
                    {edu.startDate} - {edu.endDate}
                  </p>
                  {edu.gpa && (
                    <p className="text-gray-600 text-sm font-semibold">
                      GPA: {edu.gpa}
                    </p>
                  )}
                </div>
              ))}
            </section>

            {/* Skills */}
            <section className="border-2 border-gray-300 p-4 bg-gray-50">
              <h2 className="text-xl font-bold uppercase text-gray-900 mb-3 border-b-2 border-gray-800 pb-2">
                Skills
              </h2>
              <div className="space-y-3">
                {cvData.skills.map((skill, idx) => (
                  <div key={idx}>
                    <h3 className="font-bold text-gray-900 uppercase mb-1">
                      {skill.category}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {skill.items.join(" | ")}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

