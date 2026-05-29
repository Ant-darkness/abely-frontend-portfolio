import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto py-12 flex flex-col md:flex-row items-center gap-12">
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cyan-500 shadow-lg shadow-cyan-500/20 flex-shrink-0">
        <img 
          src="/kaka.jpg" 
          alt="Abely J. Ntandu" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-grow text-center md:text-left">
        <span className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">Data Scientist</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-4">Abely Ntandu</h1>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          I am a passionate Data Scientist specializing in architecting clean data warehouses, running rigorous data analytics, and building predictive machine learning models. I transform raw data patterns into strategic operational intelligence.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <Link to="/projects" className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-6 py-3 rounded transition-colors flex items-center space-x-2">
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/contacts" className="border border-slate-700 hover:border-slate-500 text-slate-300 px-6 py-3 rounded transition-colors">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
