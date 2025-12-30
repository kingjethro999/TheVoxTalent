import { getCvData } from "@/data/data";
const cvData = getCvData();

export default function ElegantCV() {
  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl">
        {/* Elegant Header */}
        <header className="bg-gradient-to-b from-amber-100 to-white p-10 border-b-4 border-amber-800">
          <h1 className="text-5xl font-serif text-amber-900 mb-3 tracking-wide">
            {cvData.personalInfo.name}
          </h1>
          <p className="text-2xl text-amber-700 font-light mb-6">
            {cvData.personalInfo.title}
          </p>
          <div className="flex flex-wrap gap-6 text-amber-800">
            <span className="border-r border-amber-300 pr-6">
              {cvData.personalInfo.email}
            </span>
            <span className="border-r border-amber-300 pr-6">
              {cvData.personalInfo.phone}
            </span>
            <span>{cvData.personalInfo.location}</span>
          </div>
        </header>

        <div className="p-10">
          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-3xl font-serif text-amber-900 mb-4 border-b-2 border-amber-200 pb-2">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {cvData.summary}
            </p>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-3xl font-serif text-amber-900 mb-4 border-b-2 border-amber-200 pb-2">
              Professional Experience
            </h2>
            <div className="space-y-6">
              {cvData.experience.map((exp, idx) => (
                <div key={idx} className="pl-4 border-l-4 border-amber-300">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-serif text-amber-900">
                        {exp.position}
                      </h3>
                      <p className="text-xl text-amber-700 font-light">
                        {exp.company}
                      </p>
                      <p className="text-amber-600">{exp.location}</p>
                    </div>
                    <span className="text-amber-700 font-light">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <ul className="list-none text-gray-700 space-y-2 mt-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-3 text-amber-600">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-8">
            {/* Education */}
            <section>
              <h2 className="text-3xl font-serif text-amber-900 mb-4 border-b-2 border-amber-200 pb-2">
                Education
              </h2>
              {cvData.education.map((edu, idx) => (
                <div key={idx} className="mb-4">
                  <h3 className="text-xl font-serif text-amber-900">
                    {edu.degree} in {edu.field}
                  </h3>
                  <p className="text-amber-700 font-light">{edu.institution}</p>
                  <p className="text-amber-600 text-sm">
                    {edu.startDate} - {edu.endDate}
                  </p>
                  {edu.gpa && (
                    <p className="text-amber-600 text-sm">GPA: {edu.gpa}</p>
                  )}
                </div>
              ))}
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-3xl font-serif text-amber-900 mb-4 border-b-2 border-amber-200 pb-2">
                Skills
              </h2>
              <div className="space-y-4">
                {cvData.skills.map((skill, idx) => (
                  <div key={idx}>
                    <h3 className="text-lg font-serif text-amber-900 mb-2">
                      {skill.category}
                    </h3>
                    <p className="text-gray-700">
                      {skill.items.join(" • ")}
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

