import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Program from '@/components/Program'
import Speakers from '@/components/Speakers'
import Inscricoes from '@/components/Inscricoes'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="sobre" className="py-16">
          <h2 className="text-4xl font-bold text-primary mb-8 border-b-4 border-secondary inline-block pb-2">
            Sobre o Evento
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            A SESCOMP 2026 é o maior evento de tecnologia da UFC Campus Russas, reunindo estudantes, 
            profissionais e entusiastas da área de computação. Durante uma semana inteira, oferecemos 
            palestras, workshops, minicursos e competições que abordam as mais recentes tendências e 
            inovações em Engenharia de Software e Ciência da Computação.
          </p>
          <p className="text-gray-700 text-lg">
            Este é um espaço para networking, aprendizado e troca de experiências com profissionais 
            renomados do mercado e da academia.
          </p>
          
          <Stats />
        </section>
        
        <Program />
        <Speakers />
        <Inscricoes />
        
        <section id="local" className="py-16">
          <h2 className="text-4xl font-bold text-primary mb-8 border-b-4 border-secondary inline-block pb-2">
            Local
          </h2>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">
              📍 Universidade Federal do Ceará - Campus Russas
            </h3>
            <p className="text-gray-700 mb-2">Rua Felipe Santiago, 411 - Derby Clube</p>
            <p className="text-gray-700 mb-2">Russas - CE, 62900-000</p>
            <p className="text-gray-700">
              <strong>Data:</strong> 20 a 25 de Outubro de 2026
            </p>
          </div>
        </section>
        
        <section id="contato" className="py-16">
          <h2 className="text-4xl font-bold text-primary mb-8 border-b-4 border-secondary inline-block pb-2">
            Contato
          </h2>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">📧 Entre em Contato</h3>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> sescomp@russas.ufc.br
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Instagram:</strong> @sescomp.russas
            </p>
            <p className="text-gray-700">
              <strong>Telefone:</strong> (88) XXXX-XXXX
            </p>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  )
}

