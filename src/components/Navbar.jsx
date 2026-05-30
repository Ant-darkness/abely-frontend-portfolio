import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Database, Menu, X } from 'lucide-react'; // Tumeongeza Menu na X (kufunga)

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // State ya kufungua/kufunga menu kwenye simu
  
  const navItems = [
    { name: 'Profile', path: '/profile' },
    { name: 'Qualifications', path: '/qualifications' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contacts', path: '/contacts' }
  ];

  return (
    <nav className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 sticky top-0 z-50 px-4 md:px-6 py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        
        {/* LOGO SECHTION */}
        <Link 
          to="/profile" 
          onClick={() => setIsOpen(false)} // Inafunga menu kama ilikuwa wazi
          className="flex items-center gap-2.5 text-cyan-400 font-bold text-xl tracking-wider"
        >
          <Database className="w-5 h-5 text-cyan-400" />
          <span className="text-white font-black">ABELY NTANDU</span>
        </Link>

        {/* HAMBURGER BUTTON - Inaonekana kwenye SIMU tu (block), inafichika kwenye LAPTOP (md:hidden) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-400 hover:text-white md:hidden focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* DESKTOP MENU - Inaonekana kwenye Laptop tu (md:flex), inafichika kwenye simu (hidden) */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-all duration-200 text-sm tracking-wide relative pb-1 ${
                  isActive ? 'text-cyan-400 font-semibold' : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

      </div>

      {/* MOBILE MENU - Inashuka chini tu pale 'isOpen' inapokuwa TRUE (kwenye simu) */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-slate-800/60 flex flex-col gap-4 animate-fadeIn">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)} // Ikibofolewa, inafunga menu na kwenda kwenye page husika
                className={`font-medium transition-all duration-200 text-base py-2 px-2 rounded-lg ${
                  isActive ? 'text-cyan-400 bg-cyan-950/30 font-semibold' : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
