export default function About(){
  return (
    <section id="about" className="relative my-24">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 rounded-3xl transform -skew-y-2"></div>
      <div className="relative flex flex-col md:flex-row items-center gap-12 p-8 md:p-12">
        <div className="flex-1 text-base md:text-lg">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            À Propos
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Bonjour, je suis <strong className="text-indigo-600 dark:text-indigo-400">Adam Poussi</strong>, 
            un développeur passionné par la technologie et l'innovation. J'aime relever des défis et 
            apprendre de nouvelles compétences.
          </p>
          <div className="space-y-3 text-gray-600 dark:text-gray-400">
            <p className="flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span><strong>Ferkessédougou, Côte d'Ivoire</strong></span>
            </p>
            <p className="flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <a href="mailto:roskyadam7@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline transition-colors">
                roskyadam7@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-lg opacity-30 group-hover:opacity-40 transition-opacity"></div>
          <img 
            src="/assets/2.jpg" 
            alt="Adam Poussi" 
            className="relative w-40 h-40 md:w-56 md:h-56 rounded-full shadow-xl object-cover border-4 border-white dark:border-gray-800 transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}