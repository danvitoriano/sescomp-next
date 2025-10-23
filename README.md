# SESCOMP 2026 - Site Oficial

Site oficial da **Semana de Engenharia de Software e Ciência da Computação (SESCOMP 2026)** da Universidade Federal do Ceará - Campus Russas.

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- **Next.js 14** - Framework React com App Router
- **React 18** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utility-first
- **PostCSS** - Ferramenta para transformação de CSS

## 📁 Estrutura do Projeto

```
sescomp-next/
├── app/                    # App Router do Next.js 14
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes React reutilizáveis
│   ├── Header.tsx         # Cabeçalho do site
│   ├── Navigation.tsx     # Menu de navegação
│   ├── Hero.tsx           # Seção hero com destaque
│   ├── Countdown.tsx      # Contador regressivo
│   ├── Speakers.tsx       # Lista de palestrantes
│   ├── SpeakerCard.tsx    # Card individual de palestrante
│   ├── Program.tsx        # Programação do evento
│   ├── Inscricoes.tsx     # Seção de inscrições
│   ├── Stats.tsx          # Estatísticas do evento
│   └── Footer.tsx         # Rodapé
├── lib/                   # Utilidades e dados
│   └── data.ts           # Dados estáticos (palestrantes, programação)
├── types/                 # Definições TypeScript
│   └── index.ts          # Interfaces e tipos
└── public/               # Arquivos estáticos
```

## 🎨 Características

### Componentização Profissional
- ✅ Componentes React isolados e reutilizáveis
- ✅ TypeScript para type-safety
- ✅ Separação clara de responsabilidades

### UI/UX Moderno
- ✅ Design responsivo (mobile-first)
- ✅ Animações e transições suaves
- ✅ Tema de cores personalizado (UFC)
- ✅ Gradientes e efeitos visuais modernos

### Features Interativas
- ✅ Contador regressivo em tempo real
- ✅ Navegação suave entre seções
- ✅ Cards com hover effects
- ✅ Destaque para palestrante principal

### Performance e SEO
- ✅ Server-Side Rendering (SSR)
- ✅ Otimização automática de imagens
- ✅ Metadata configurada para SEO
- ✅ Acessibilidade (a11y)

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install
# ou
yarn install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build para Produção

```bash
# Criar build otimizado
npm run build
# ou
yarn build

# Iniciar servidor de produção
npm start
# ou
yarn start
```

## 📝 Como Adicionar Conteúdo

### Adicionar Palestrante

Edite o arquivo `lib/data.ts` e adicione um novo objeto ao array `speakers`:

```typescript
{
  id: '7',
  name: 'Nome do Palestrante',
  role: 'Cargo',
  company: 'Empresa',
  bio: 'Biografia breve...',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  icon: '🎯',
  featured: false, // true para destaque
}
```

### Modificar Programação

Edite o arquivo `lib/data.ts` no array `program`:

```typescript
{
  day: 'Sábado',
  title: '📅 Sábado',
  activities: ['Atividade 1', 'Atividade 2'],
}
```

### Alterar Data do Evento

Edite o arquivo `lib/data.ts` no objeto `eventInfo`:

```typescript
eventDate: new Date('2026-10-20T09:00:00'),
```

## 🎯 Próximos Passos

- [ ] Integração com backend para inscrições
- [ ] Sistema de autenticação
- [ ] Painel administrativo
- [ ] Integração com APIs de pagamento
- [ ] Upload de imagens reais dos palestrantes
- [ ] Newsletter
- [ ] Chat ao vivo durante o evento

## 📄 Licença

Este projeto é desenvolvido pela UFC Campus Russas para a SESCOMP 2026.

## 👥 Equipe

Desenvolvido com ❤️ pela equipe da SESCOMP 2026

---

**SESCOMP 2026** - Conectando Ideias, Transformando o Futuro

