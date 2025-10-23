const tickets = [
  {
    title: '🎓 Estudantes UFC',
    price: 'Gratuito',
    description: 'Inscrições abertas para todos os estudantes da UFC',
  },
  {
    title: '👨‍🎓 Estudantes Externos',
    price: 'R$ 50,00',
    description: 'Valor promocional para estudantes de outras instituições',
  },
  {
    title: '💼 Profissionais',
    price: 'R$ 100,00',
    description: 'Acesso completo a todas as atividades',
  },
]

export default function Inscricoes() {
  return (
    <section id="inscricoes" className="py-16">
      <h2 className="text-4xl font-bold text-primary mb-8 border-b-4 border-secondary inline-block pb-2">
        Inscrições
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {tickets.map((ticket, index) => (
          <div
            key={index}
            className="bg-gray-100 p-8 rounded-lg shadow-sm hover:shadow-md transition-all"
          >
            <h3 className="text-xl font-bold text-primary mb-2">{ticket.title}</h3>
            <p className="text-3xl font-bold text-secondary mb-4">{ticket.price}</p>
            <p className="text-gray-700 mb-6">{ticket.description}</p>
            <button className="w-full bg-secondary text-white px-6 py-3 rounded-md font-bold hover:bg-secondary-dark transition-colors">
              Inscrever-se
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

