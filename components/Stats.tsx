import { stats } from '@/lib/data'

export default function Stats() {
  return (
    <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-12 my-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        {stats.map((stat, index) => (
          <div key={index}>
            <h3 className="text-5xl font-bold mb-2">{stat.value}</h3>
            <p className="text-lg opacity-90">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

