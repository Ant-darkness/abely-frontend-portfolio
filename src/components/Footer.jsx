import { FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 py-6 px-4 md:px-8 mt-12">
      {/* 1. Tumeongeza 'px-4' hapa ndani pia ili maudhui yasiguse kioo kabisa kwenye simu */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4 md:gap-0">

        <p className="text-sm text-slate-500 text-center md:text-left">
          © 2026 Abely J. Ntandu. All rights reserved.
        </p>

        {/* 2. Tumeondoa space-x-6 tukatumia 'gap-6' ambayo ni bora zaidi kwa flexbox ya kisasa */}
        <div className="flex items-center gap-6">

          {/* GitHub */}
          <a
            href="https://github.com/Ant-Darkness"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={22} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/255714131519"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-green-400 transition-colors duration-300"
          >
            <FaWhatsapp size={22} />
          </a>

          {/* Email */}
          <a
            href="mailto:codewithabel1@gmail.com"
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <FaEnvelope size={22} />
          </a>

        </div>
      </div>
    </footer>
  );
}
