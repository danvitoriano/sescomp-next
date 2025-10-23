import { Speaker } from '@/types'

interface SpeakerCardProps {
  speaker: Speaker
}

export default function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-200 hover:border-secondary">
      {/* Icon/Image Section */}
      <div
        className={`h-64 flex items-center justify-center text-8xl ${
          speaker.featured
            ? 'bg-gradient-to-br from-pink-400 to-red-400'
            : 'bg-gradient-to-br from-purple-400 to-indigo-500'
        } relative`}
      >
        <span>{speaker.icon}</span>
        {speaker.featured && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-primary px-4 py-2 rounded-full text-sm font-bold">
            ⭐ PRESENCIAL
          </div>
        )}
      </div>
      
      {/* Info Section */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-primary mb-2">{speaker.name}</h3>
        <p className="text-secondary font-semibold mb-1 text-sm">{speaker.role}</p>
        <p className="text-gray-600 text-sm mb-4">{speaker.company}</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">{speaker.bio}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {speaker.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-50 text-secondary px-3 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

