import { speakers } from '@/lib/data'
import SpeakerCard from './SpeakerCard'

export default function Speakers() {
  return (
    <section id="palestrantes" className="py-16">
      <h2 className="text-4xl font-bold text-primary mb-4 border-b-4 border-secondary inline-block pb-2">
        Palestrantes Confirmados
      </h2>
      <p className="text-gray-700 mb-12">
        Confira os especialistas que estarão presentes na SESCOMP 2026, compartilhando conhecimento e experiências.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </div>
    </section>
  )
}

