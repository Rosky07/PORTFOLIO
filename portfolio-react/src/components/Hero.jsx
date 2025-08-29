export default function Hero(){
  return (
    <section id="hero" className="min-h-[80vh] flex flex-col justify-center items-center relative overflow-hidden py-16 px-4 mt-[72px]">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-transparent dark:from-indigo-900/20 dark:to-transparent"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent animate-fadeIn">
          Bienvenue sur mon Portfolio
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fadeIn" style={{animationDelay: '0.2s'}}>
          Explorez mes compétences, formations et projets
        </p>
        <div className="relative mt-8">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
          <img 
            src="/assets/img5.JPG" 
            alt="Profil" 
            className="relative mx-auto w-40 h-40 md:w-48 md:h-48 rounded-full shadow-xl object-cover border-4 border-white dark:border-gray-800 transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}