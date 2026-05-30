import { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_ENDPOINT = `${import.meta.env.VITE_API_URL}/api/projects`;

  useEffect(() => {
    fetch(API_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Infrastructure fetch error: ", err);
        setLoading(false);
      });
  }, []);

  return (
    // 1. Tumeongeza 'px-4' kwa ajili ya simu na 'py-8' kwa uwiano mzuri
    <div className="max-w-5xl mx-auto py-8 px-4">
      
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-2xl font-black tracking-wide text-white uppercase">Production Repositories</h2>
        <p className="text-xs font-mono text-slate-500 mt-1">Live data pipelines, infrastructure scripts, and predictive core configurations.</p>
      </div>

      {loading ? (
        // Tumeondoa space-x-2 tukatumia gap-2
        <div className="flex items-center gap-2 text-sm font-mono text-slate-400 py-12 justify-center">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>Synchronizing remote portfolio entities...</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {projects.map((proj, idx) => (
            <div 
              key={idx} 
              // 2. Tumeongeza 'h-full' hapa ili kadi zote zilingane urefu kwenye PC hata kama maelezo yanatofautiana urefu
              className="h-full bg-slate-950 border border-slate-900 rounded-xl p-5 md:p-6 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-cyan-400 transition-colors">{proj.title}</h3>
                {/* 'break-words' inazuia maandishi marefu yasiyokatika kuvunja muundo wa kadi */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5 break-words">{proj.description}</p>
              </div>
              
              <div>
                {/* 3. 'gap-x-1.5 gap-y-2' inahakikisha teknolojia zikishuka chini hazigandani kwa wima */}
                <div className="flex flex-wrap gap-x-1.5 gap-y-2 mb-5">
                  {proj.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="bg-slate-900 border border-slate-800 text-slate-400 px-2 py-0.5 rounded text-[11px] font-mono whitespace-nowrap">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Tumeondoa space-x-2 tukatumia gap-2 */}
                <a 
                  href={proj.github_url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 text-xs font-mono px-3 py-2 rounded transition-all"
                >
                  <span>SOURCE_CODE</span>
                  <ExternalLink className="w-3 h-3 text-cyan-400" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
