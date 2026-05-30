import { Briefcase, GraduationCap } from 'lucide-react';

export default function Qualifications() {
  const experiences = [
    { 
      title: "Aspiring Data Scientist", 
      institution: "Tanzania Sector", 
      period: "Present", 
      desc: "Developing advanced data structures, optimization models, and deploying machine learning solutions targeting impactful socio-economic analytics." 
    }
  ];
  
  const education = [
    { 
      degree: "Bachelor of Degree in Data Science", 
      institution: "Higher Education Institution", 
      period: "Ongoing", 
      desc: "Deepening knowledge in advanced statistical methods, database structures, machine learning theory, and predictive algorithms." 
    }
  ];

  return (
    // 1. Tumeongeza 'px-4' kwa ajili ya simu ili kulinda maudhui yasiguse kioo
    <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6">
      
      {/* Kichwa cha habari kimekaa katikati kwenye simu, kushoto kwenye PC */}
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-2 text-center md:text-left">
        Qualifications
      </h2>
      
      <div className="space-y-12">
        
        {/* EXPERIENCE SECTION */}
        <div>
          {/* Tusemtumia gap-2 badala ya space-x-2 */}
          <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
            <Briefcase className="text-cyan-400 w-5 h-5 md:w-6 md:h-6" />
            <h3 className="text-lg md:text-xl font-bold text-slate-200">Professional Experience</h3>
          </div>
          
          {experiences.map((exp, idx) => (
            // 2. Tumerahisisha 'pl-4 sm:pl-6 ml-2 sm:ml-3' ili kupunguza mianya mikubwa kwenye simu
            <div key={idx} className="border-l-2 border-cyan-500 pl-4 sm:pl-6 ml-2 sm:ml-3 space-y-1">
              <span className="text-xs text-cyan-400 font-mono block">{exp.period}</span>
              <h4 className="text-base sm:text-lg font-bold text-white leading-tight">{exp.title}</h4>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">{exp.institution}</p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">{exp.desc}</p>
            </div>
          ))}
        </div>

        {/* EDUCATION SECTION */}
        <div>
          <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
            <GraduationCap className="text-cyan-400 w-5 h-5 md:w-6 md:h-6" />
            <h3 className="text-lg md:text-xl font-bold text-slate-200">Education & Certifications</h3>
          </div>
          
          {education.map((edu, idx) => (
            <div key={idx} className="border-l-2 border-cyan-500 pl-4 sm:pl-6 ml-2 sm:ml-3 space-y-1">
              <span className="text-xs text-cyan-400 font-mono block">{edu.period}</span>
              <h4 className="text-base sm:text-lg font-bold text-white leading-tight">{edu.degree}</h4>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">{edu.institution}</p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">{edu.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
