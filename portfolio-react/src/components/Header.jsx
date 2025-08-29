import { useEffect, useState } from 'react'

export default function Header(){
  const [dark, setDark] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(()=>{
    if(dark){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    const headerOffset = 80; // Hauteur approximative du header
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 gradient-header text-white shadow-xl backdrop-blur-sm bg-opacity-90 flex justify-between items-center px-4 md:px-6 py-4 z-50">
      <h2 className="font-bold text-lg md:text-xl animate-pulse">Ad@m-Poussi</h2>
      
      {/* Desktop nav */}
      <nav className="hidden md:block">
        <ul className="flex gap-6 text-sm md:text-base">
          {[
            { href: "#hero", label: "Accueil" },
            { href: "#skills", label: "Compétences" },
            { href: "#formations", label: "Formations" },
            { href: "#about", label: "À propos" },
            { href: "#contact", label: "Contacts" }
          ].map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollToSection(link.href)}
                className="hover:text-teal-300 py-2 px-3 rounded-lg transition-all duration-300 hover:bg-white/10"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={()=> setDark(!dark)}
          className="px-3 py-1 rounded-lg bg-white text-indigo-700 text-sm hover:scale-105 transition-transform">
          {dark ? '☀️' : '🌙'}
        </button>
        <button
          onClick={()=> setOpen(!open)}
          className="md:hidden px-2 py-1 text-xl focus:outline-none">
          {open ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile nav menu */}
      <div className={`fixed top-[72px] left-0 w-full bg-indigo-700/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-xl md:hidden transition-transform duration-300 ${open ? 'translate-y-0' : '-translate-y-full'}`}>
        <ul className="flex flex-col items-center gap-4 py-6">
          {[
            { href: "#hero", label: "Accueil" },
            { href: "#skills", label: "Compétences" },
            { href: "#formations", label: "Formations" },
            { href: "#about", label: "À propos" },
            { href: "#contact", label: "Contacts" }
          ].map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollToSection(link.href)}
                className="hover:text-teal-300 py-2 px-4 rounded-lg transition-all duration-300 hover:bg-white/10 text-lg"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}