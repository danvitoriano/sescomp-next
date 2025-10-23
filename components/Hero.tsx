import Countdown from './Countdown'
import { eventInfo } from '@/lib/data'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-secondary via-secondary-dark to-[#06495c] overflow-hidden min-h-[600px] flex items-center">
      {/* Geometric Background Shapes */}
      <div className="absolute top-[-50%] left-[-10%] w-[80%] h-[120%] bg-white/5 rotate-[-15deg] rounded-[50px]" />
      <div className="absolute bottom-[-30%] right-[-15%] w-[70%] h-[100%] bg-black/10 rotate-[25deg] rounded-[50px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
              O <span className="text-red-400 underline decoration-red-400">maior</span> evento de tecnologia do vale jaguaribe
            </h1>
            
            <p className="text-xl mb-8 text-white/95">
              Venha se reinventar e transformar o amanhã -
            </p>
            
            {/* Event Info */}
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📅</span>
                <div>
                  <div className="font-bold">{eventInfo.date}</div>
                  <div className="text-sm text-white/80">Aguarde a data oficial de 2026</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <div className="font-bold">Universidade Federal do Ceará</div>
                  <div className="text-sm text-white/80">Campus Russas</div>
                </div>
              </div>
            </div>
            
            <Link
              href="#inscricoes"
              className="inline-block bg-accent text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-green-600 transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Participar do Evento
            </Link>
            
            <Countdown targetDate={eventInfo.eventDate} />
          </div>
          
          {/* Image Placeholder */}
          <div className="hidden md:block">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-2xl font-bold mb-2">UFC Campus Russas</div>
                  <div className="text-sm">Imagem do Campus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

