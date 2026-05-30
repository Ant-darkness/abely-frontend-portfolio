import { Layers, ShieldCheck, Cpu, Code } from 'lucide-react';

export default function Skills() {
  const skillSets = [
    { icon: <Layers className="w-4 h-4 text-cyan-400" />, title: "Databases & Warehousing", items: ["SQL", "PostgreSQL","SQL SERVER", "MySQL", "Star Schema", "ETL/ELT Pipelines", "dbt"] },
    { icon: <Cpu className="w-4 h-4 text-cyan-400" />, title: "Machine & Deep Learning", items: ["Python", "Scikit-Learn", "TensorFlow / Keras", "LSTM Networks", "Time Series Models"] },
    { icon: <ShieldCheck className="w-4 h-4 text-cyan-400" />, title: "Data Engineering Architecture", items: ["Pandas", "NumPy", "Data Cleansing Structures", "Exploratory Analytics", "Statistical Modeling"] },
    { icon: <Code className="w-4 h-4 text-cyan-400" />, title: "Development Infrastructure", items: ["FastAPI", "Vite", "Git / GitHub Versioning", "VS Code Mastery", "Tailwind CSS Configuration"] }
  ];

  return (
    // 1. Tumeongeza 'px-4' kwa ajili ya simu na 'py-8' kwa uwiano wa nafasi
    <div className="max-w-4xl mx-auto py-8 px-4">
      
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-2xl font-black tracking-wide text-white uppercase">Technical Core Matrix</h2>
        <p className="text-xs font-mono text-slate-500 mt-1">Granular breakdown of production engineering proficiencies.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {skillSets.map((set, idx) => (
          <div 
            key={idx} 
            // 2. Tumeongeza 'h-full' hapa ili kadi zilingane urefu wa mistari kwenye PC
            className="h-full bg-slate-950 border border-slate-900 rounded-lg p-5 hover:border-cyan-500/30 transition-all group"
          >
            {/* Tumeondoa space-x-2.5 tukatumia gap-2.5 */}
            <div className="flex items-center gap-2.5 mb-4 border-b border-slate-900 pb-2">
              {set.icon}
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200">{set.title}</h3>
            </div>
            
            {/* 3. 'gap-x-2 gap-y-2.5' inasaidia nafasi thabiti kwa upande na kwa wima (zikitokea mistari miwili) */}
            <div className="flex flex-wrap gap-x-2 gap-y-2.5">
              {set.items.map((item, iIdx) => (
                <span 
                  key={iIdx} 
                  // 4. 'whitespace-nowrap' inalazimisha jina la skill libaki zima bila kukatika herufi nusu
                  className="bg-slate-900 border border-slate-800 text-slate-300 px-2.5 py-1 rounded text-xs font-mono whitespace-nowrap"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
