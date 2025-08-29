export default function Formations(){
  const items = [
    "Bachelor en Informatique",
    "Certification en Développement Web",
    "Cours de Data Science",
    "Baccalauréat Série D",
    "Formations en Développement Web à Panel Consulting",
  ]
  return (
    <section id="formations" className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 shadow-soft p-6 rounded-2xl my-12">
      <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">Mes Formations</h2>
      <ul className="grid md:grid-cols-2 gap-3">
        {items.map((txt,i)=> (
          <li key={i} className="p-3 rounded-lg border hover:bg-indigo-600 hover:text-white">
            {txt}
          </li>
        ))}
      </ul>
    </section>
  )
}