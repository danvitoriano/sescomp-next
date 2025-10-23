import { Speaker, ProgramDay, EventInfo } from '@/types'

export const eventInfo: EventInfo = {
  name: 'SESCOMP',
  year: 2026,
  date: '20 a 25 de Outubro',
  location: 'Universidade Federal do Ceará - Campus Russas',
  eventDate: new Date('2026-10-20T09:00:00'),
}

export const speakers: Speaker[] = [
  {
    id: '1',
    name: 'Dan Vitoriano',
    role: 'Engenheiro de Software & Tech Lead',
    company: 'Especialista em Desenvolvimento Full Stack',
    bio: 'Palestrante confirmado para a SESCOMP 2026. Especialista em arquitetura de software, desenvolvimento web moderno e boas práticas de engenharia.',
    tags: ['Full Stack', 'Arquitetura', 'DevOps'],
    icon: '👨‍💻',
    featured: true,
  },
  {
    id: '2',
    name: 'Dr. Ana Silva',
    role: 'Pesquisadora em Inteligência Artificial',
    company: 'Universidade de São Paulo',
    bio: 'Doutora em Ciência da Computação com foco em Machine Learning e Deep Learning aplicados.',
    tags: ['IA', 'ML', 'Pesquisa'],
    icon: '🧠',
  },
  {
    id: '3',
    name: 'Carlos Mendes',
    role: 'CTO & Co-founder',
    company: 'TechStartup Brasil',
    bio: 'Empreendedor com mais de 15 anos de experiência em startups de tecnologia e inovação digital.',
    tags: ['Startups', 'Inovação', 'Liderança'],
    icon: '🚀',
  },
  {
    id: '4',
    name: 'Marina Costa',
    role: 'Security Engineer',
    company: 'Microsoft Brasil',
    bio: 'Especialista em segurança da informação, ethical hacking e proteção de dados em ambientes cloud.',
    tags: ['Segurança', 'Cloud', 'DevSecOps'],
    icon: '🔐',
  },
  {
    id: '5',
    name: 'Rafael Santos',
    role: 'Mobile Development Lead',
    company: 'Nubank',
    bio: 'Líder de desenvolvimento mobile com expertise em React Native, Flutter e arquiteturas escaláveis.',
    tags: ['Mobile', 'React Native', 'Flutter'],
    icon: '📱',
  },
  {
    id: '6',
    name: 'Juliana Oliveira',
    role: 'Cloud Solutions Architect',
    company: 'Amazon Web Services',
    bio: 'Arquiteta de soluções cloud com certificações AWS, especializada em infraestrutura e migração para nuvem.',
    tags: ['AWS', 'Cloud', 'Infraestrutura'],
    icon: '☁️',
  },
]

export const program: ProgramDay[] = [
  {
    day: 'Segunda-feira',
    title: '📅 Segunda-feira',
    activities: ['Cerimônia de Abertura', 'Palestra Magna'],
  },
  {
    day: 'Terça-feira',
    title: '📅 Terça-feira',
    activities: ['Workshops de Desenvolvimento', 'Minicursos Técnicos'],
  },
  {
    day: 'Quarta-feira',
    title: '📅 Quarta-feira',
    activities: ['Palestras sobre IA e Machine Learning', 'Mesa Redonda'],
  },
  {
    day: 'Quinta-feira',
    title: '📅 Quinta-feira',
    activities: ['Hackathon', 'Competições de Programação'],
  },
  {
    day: 'Sexta-feira',
    title: '📅 Sexta-feira',
    activities: ['Apresentação de Projetos', 'Cerimônia de Encerramento'],
  },
]

export const stats = [
  { value: '500+', label: 'Participantes Esperados' },
  { value: '20+', label: 'Palestras e Workshops' },
  { value: '15+', label: 'Palestrantes Especialistas' },
  { value: '5', label: 'Dias de Conteúdo' },
]

