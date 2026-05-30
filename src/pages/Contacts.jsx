import { FaEnvelope, FaWhatsapp, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

export default function Contacts() {
  const contactMethods = [
    {
      icon: <FaEnvelope className="w-5 h-5 text-emerald-400" />, // Tumerahisisha size kidogo hapa
      title: "Email Address",
      value: "codewithabel1@gmail.com",
      actionText: "Send an Email",
      link: "mailto:codewithabel1@gmail.com"
    },
    {
      icon: <FaWhatsapp className="w-5 h-5 text-green-500" />,
      title: "WhatsApp",
      value: "+255 714 131 519",
      actionText: "Open Chat",
      link: "https://wa.me/255714131519"
    },
    {
      icon: <FaPhoneAlt className="w-5 h-5 text-cyan-400" />,
      title: "Direct Mobile",
      value: "+255 794 174 480",
      actionText: "Call Now",
      link: "tel:+255794174480"
    },
    {
      icon: <FaLinkedin className="w-5 h-5 text-blue-500" />,
      title: "LinkedIn Profile",
      value: "Abely Ntandu", 
      actionText: "Connect on LinkedIn",
      link: "https://linkedin.com/in/abely-ntandu"
    }
  ];

  return (
    // 1. Tumeongeza 'px-4' ili kadi zisiguse kingo za simu kabisa
    <div className="max-w-4xl mx-auto py-8 px-4">
      
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
            // 2. Tumeondoa space-x-4 tukatumia 'gap-4' ambayo ni salama zaidi
            className="bg-slate-950 border border-slate-900 rounded-xl p-5 md:p-6 flex items-start gap-4 hover:border-cyan-500/30 transition-all duration-300"
          >
            <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg flex-shrink-0">
              {method.icon}
            </div>
            {/* 3. 'min-w-0' inazuia flex-item isipanuke kupita kiasi kwenye simu */}
            <div className="flex-grow min-w-0">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500">{method.title}</h3>
              {/* 4. 'break-all' au 'break-words' inalazimisha email ndefu isivunje kadi kwenye screen ndogo */}
              <p className="text-sm md:text-base font-bold text-white mt-1 mb-3 select-all break-all md:break-normal">
                {method.value}
              </p>
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
        {/* Tusemtumia gap-2 badala ya space-x-2 */}
        <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-3 py-1 mb-2">
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
