import { FaEnvelope, FaWhatsapp, FaPhoneAlt, FaLinkedin, FaGlobe } from 'react-icons/fa';

export default function Contacts() {
  const contactMethods = [
    {
      icon: <FaEnvelope className="w-6 h-6 text-emerald-400" />,
      title: "Email Address",
      value: "codewithabel1@gmail.com", // Weka email yako hapa
      actionText: "Send an Email",
      link: "mailto:codewithabel1@gmail.com"
    },
    {
      icon: <FaWhatsapp className="w-6 h-6 text-green-500" />,
      title: "WhatsApp",
      value: "+255 714 131 519", // Weka namba yako ya WhatsApp hapa
      actionText: "Open Chat",
      link: "https://wa.me/255714131519" // Badilisha XXXXXXXX na namba yako kuanzia na 255
    },
    {
      icon: <FaPhoneAlt className="w-6 h-6 text-cyan-400" />,
      title: "Direct Mobile",
      value: "+255 794 174 480", // Weka namba yako ya simu hapa
      actionText: "Call Now",
      link: "tel:+255794174480"
    },
    {
      icon: <FaLinkedin className="w-6 h-6 text-blue-500" />,
      title: "LinkedIn Profile",
      value: "linkedin", // Weka username yako ya LinkedIn
      actionText: "Connect on LinkedIn",
      link: "https://linkedin.com/in/abely-ntandu" // Weka full URL ya LinkedIn yako
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-4">
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-2xl font-black tracking-wide text-white uppercase">Communications Hub</h2>
        <p className="text-xs font-mono text-slate-500 mt-1">
          Direct endpoints to establish professional connection, collaboration, or data consulting inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {contactMethods.map((method, idx) => (
          <div 
            key={idx} 
            className="bg-slate-950 border border-slate-900 rounded-xl p-6 flex items-start space-x-4 hover:border-cyan-500/30 transition-all duration-300"
          >
            <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg flex-shrink-0">
              {method.icon}
            </div>
            <div className="flex-grow">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500">{method.title}</h3>
              <p className="text-base font-bold text-white mt-1 mb-3 select-all">{method.value}</p>
              <a 
                href={method.link} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center text-xs font-mono text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
              >
                <span>{method.actionText}</span>
                <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Sehemu ya chini ya maelezo ya upatikanaji (Availability status) */}
      <div className="mt-12 bg-slate-950/50 border border-slate-900 rounded-xl p-5 text-center">
        <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 rounded-full px-3 py-1 mb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider">Current Availability</span>
        </div>
        <p className="text-sm text-slate-400 max-w-md mx-auto">
          Active and open for new Data Science roles, production pipeline architectural designs, and automated solution developments. Response latency is typically under 12 hours.
        </p>
      </div>
    </div>
  );
}
