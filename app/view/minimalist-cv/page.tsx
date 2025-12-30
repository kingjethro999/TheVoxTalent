import { getCvData } from "@/data/data";
const cvData = getCvData();

export default function MinimalistCV() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Minimalist Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-light text-gray-900 mb-3 tracking-widest">
            {cvData.personalInfo.name.toUpperCase()}
          </h1>
          <div className="w-16 h-px bg-gray-400 mx-auto mb-4"></div>
          <p className="text-sm text-gray-500 mb-6">{cvData.personalInfo.title}</p>
          <div className="flex justify-center gap-6 text-xs text-gray-400">
            <span>{cvData.personalInfo.email}</span>
            <span>•</span>
            <span>{cvData.personalInfo.phone}</span>
            <span>•</span>
            <span>{cvData.personalInfo.location}</span>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-12">
          <p className="text-gray-600 leading-relaxed text-center">
            {cvData.summary}
          </p>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-xs font-light text-gray-400 uppercase tracking-widest mb-8 text-center">
            Experience
          </h2>
          <div className="space-y-10">
            {cvData.experience.map((exp, idx) => (
              <div key={idx} className="text-center">
                <div className="mb-3">
                  <h3 className="text-lg font-light text-gray-900 mb-1">
                    {exp.position}
                  </h3>
                  <p className="text-sm text-gray-500">{exp.company}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>
                <ul className="list-none text-gray-600 space-y-2 text-sm max-w-md mx-auto">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12 text-center">
          <h2 className="text-xs font-light text-gray-400 uppercase tracking-widest mb-8">
            Education
          </h2>
          {cvData.education.map((edu, idx) => (
            <div key={idx} className="mb-4">
              <h3 className="text-lg font-light text-gray-900">
                {edu.degree} in {edu.field}
              </h3>
              <p className="text-sm text-gray-500">{edu.institution}</p>
              <p className="text-xs text-gray-400">
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="text-center">
          <h2 className="text-xs font-light text-gray-400 uppercase tracking-widest mb-8">
            Skills
          </h2>
          <div className="space-y-4">
            {cvData.skills.map((skill, idx) => (
              <div key={idx}>
                <p className="text-sm text-gray-500 mb-1">{skill.category}</p>
                <p className="text-xs text-gray-400">
                  {skill.items.join(" / ")}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

