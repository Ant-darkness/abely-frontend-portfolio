import { Briefcase, GraduationCap } from 'lucide-react';

export default function Qualifications() {
  const experiences = [
    { title: "Data Scientist / Aspiring Engineer", institution: "Tanzania Sector", period: "Present", desc: "Developing advanced data structures, optimization models, and deploying machine learning solutions targeting impactful socio-economic analytics." }
  ];
  const education = [
    { degree: "Bachelor of Degree in Data Science", institution: "Higher Education Institution", period: "Ongoing", desc: "Deepening knowledge in advanced statistical methods, database structures, machine learning theory, and predictive algorithms." }
  ];

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-2">Qualifications</h2>
      <div className="space-y-12">
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <Briefcase className="text-cyan-400 w-6 h-6" />
            <h3 className="text-xl font-bold text-slate-200">Professional Experience</h3>
          </div>
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-cyan-500 pl-6 ml-3">
              <span className="text-xs text-cyan-400 font-mono">{exp.period}</span>
              <h4 className="text-lg font-bold text-white">{exp.title}</h4>
              <p className="text-sm text-slate-400 mb-2">{exp.institution}</p>
              <p className="text-sm text-slate-300 leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <GraduationCap className="text-cyan-400 w-6 h-6" />
            <h3 className="text-xl font-bold text-slate-200">Education & Certifications</h3>
          </div>
          {education.map((edu, idx) => (
            <div key={idx} className="border-l-2 border-cyan-500 pl-6 ml-3">
              <span className="text-xs text-cyan-400 font-mono">{edu.period}</span>
              <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
              <p className="text-sm text-slate-400 mb-2">{edu.institution}</p>
              <p className="text-sm text-slate-300 leading-relaxed">{edu.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
