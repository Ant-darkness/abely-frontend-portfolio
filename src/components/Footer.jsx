import { FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-6 px-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">

        <p className="text-sm text-slate-500 text-center md:text-left">
          © 2026 Abely J. Ntandu. All rights reserved.
        </p>

        <div className="flex items-center space-x-6 mt-4 md:mt-0">

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
