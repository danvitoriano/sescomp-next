import { program } from '@/lib/data'

export default function Program() {
  return (
    <section id="programacao" className="py-16">
      <h2 className="text-4xl font-bold text-primary mb-8 border-b-4 border-secondary inline-block pb-2">
        Programação
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {program.map((day, index) => (
          <div
            key={index}
            className="bg-gray-100 p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold text-primary mb-4">{day.title}</h3>
            {day.activities.map((activity, actIndex) => (
              <p key={actIndex} className="text-gray-700 mb-2">
                {activity}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

