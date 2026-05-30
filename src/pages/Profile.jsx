import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    // 1. Tumeongeza px-4 (kwa simu) na md:px-0 (kwenye PC) pamoja na py-8 kwa uwiano mzuri wa nafasi
    <div className="max-w-4xl mx-auto py-8 md:py-16 px-4 md:px-0 flex flex-col md:flex-row items-center gap-8 md:gap-12">
      
      {/* IMAGE SECTION */}
      <div className="w-44 h-44 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cyan-500 shadow-lg shadow-cyan-500/20 flex-shrink-0 bg-slate-900">
        <img 
          src="/kaka.jpg" 
          alt="Abely J. Ntandu" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* TEXT SECTION */}
      <div className="flex-grow text-center md:text-left min-w-0">
        <span className="text-cyan-400 font-semibold uppercase tracking-wider text-xs sm:text-sm">
          Data Scientist
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 mb-4">
          Abely Ntandu
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
          I am a passionate Data Scientist specializing in architecting clean data warehouses, running rigorous data analytics, and building predictive machine learning models. I transform raw data patterns into strategic operational intelligence.
        </p>

        {/* BUTTONS SECTION - Inakuwa flex-col kwenye simu ndogo na flex-row kuanzia vioo vidogo vya sm (640px) */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <Link 
            to="/projects" 
            className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            to="/contacts" 
            className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            Contact Me
          </Link>
        </div>

      </div>
    </div>
  );
}
