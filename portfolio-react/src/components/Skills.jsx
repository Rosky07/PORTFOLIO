import { useEffect, useState } from 'react'

function SkillBar({ name, value, colors, icon }){
  const [width, setWidth] = useState(0)
  useEffect(()=>{
    const t = setTimeout(()=> setWidth(value), 400)
    return ()=> clearTimeout(t)
  }, [value])
  return (
    <div className="mb-6 group">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">{icon}</span>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-800 dark:text-gray-200">{name}</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">{width}%</span>
          </div>
          <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mt-2">
            <div 
              style={{ width: width + '%', background: colors }}
              className="h-full rounded-full shadow-inner transition-all duration-1000 ease-out relative group-hover:opacity-90"
            >
              <div className="absolute inset-0 bg-white opacity-20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Skills(){
  return (
    <section id="skills" className="my-24 px-6">
      <div className="max-w-4xl mx-auto"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-12">
          Mes Compétences
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <SkillBar 
            name="HTML" 
            value={60} 
            colors="linear-gradient(90deg, #e44d26, #f16529)" 
            icon="🌐"
          />
          <SkillBar 
            name="CSS" 
            value={55} 
            colors="linear-gradient(90deg, #2965f1, #264de4)" 
            icon="🎨"
          />
          <SkillBar 
            name="MongoDB" 
            value={70} 
            colors="linear-gradient(90deg, #13aa52, #27ae60)" 
            icon="🗄️"
          />
          <SkillBar 
            name="Python" 
            value={65} 
            colors="linear-gradient(90deg, #3776ab, #ffd43b)" 
            icon="🐍"
          />
      </div>
    </section>
  )
}