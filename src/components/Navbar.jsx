import { Link, useLocation } from 'react-router-dom';
import { Database } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  
  const navItems = [
    { name: 'Profile', path: '/profile' },
    { name: 'Qualifications', path: '/qualifications' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contacts', path: '/contacts' }
  ];

  return (
    <nav className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 sticky top-0 z-50 px-6 py-4">
      <div className="container mx-auto flex justify-between items-center max-w-6xl">
        <Link to="/profile" className="flex items-center space-x-2.5 text-cyan-400 font-bold text-xl tracking-wider">
          <Database className="w-5 h-5 text-cyan-400" />
          <span className="text-white font-black">ABELY NTANDU</span>
        </Link>
        <div className="flex space-x-8">
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
    </nav>
  );
}
