# 🏗️ Arquitetura do Projeto SESCOMP 2026

## Visão Geral

Projeto desenvolvido com **Next.js 14** utilizando **App Router**, **TypeScript** e **Tailwind CSS**. Arquitetura componentizada e escalável seguindo as melhores práticas de React e Next.js.

## 🎯 Princípios de Design

### 1. Componentização
- Cada componente tem uma única responsabilidade
- Componentes são reutilizáveis e independentes
- Props tipadas com TypeScript

### 2. Separação de Responsabilidades
```
📂 app/          → Rotas e páginas (Next.js App Router)
📂 components/   → Componentes React reutilizáveis
📂 lib/          → Utilitários e dados
📂 types/        → Definições TypeScript
📂 public/       → Assets estáticos
```

### 3. Type Safety
- TypeScript em todo o projeto
- Interfaces para todos os dados
- Props tipadas em todos os componentes

## 📦 Componentes

### Layout Components

#### `Header.tsx`
**Responsabilidade:** Cabeçalho do site com logo e branding
- Logo "sescomp" estilizado
- Logo da UFC
- Design responsivo

#### `Navigation.tsx`
**Responsabilidade:** Menu de navegação principal
- Client Component ('use client')
- Scroll suave para seções
- Botão de inscrição destacado
- Sticky no topo

#### `Footer.tsx`
**Responsabilidade:** Rodapé com informações de copyright
- Informações institucionais
- Links sociais

### Feature Components

#### `Hero.tsx`
**Responsabilidade:** Seção principal de destaque
- Título com palavra destacada ("maior")
- Informações do evento (data, local)
- Botão CTA principal
- Integração com Countdown
- Background com formas geométricas
- Layout duas colunas (texto + imagem)

#### `Countdown.tsx`
**Responsabilidade:** Contador regressivo para o evento
- Client Component com React hooks
- useState para gerenciar tempo
- useEffect para atualização a cada segundo
- Calcula dias, horas, minutos, segundos
- Auto-cleanup do setInterval
- Formatação de números com padding

**Hooks utilizados:**
```typescript
const [timeLeft, setTimeLeft] = useState<CountdownTime>()
useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft(calculateTimeLeft())
  }, 1000)
  return () => clearInterval(timer)
}, [targetDate])
```

#### `Speakers.tsx`
**Responsabilidade:** Lista de palestrantes
- Itera sobre array de speakers
- Renderiza SpeakerCard para cada palestrante
- Grid responsivo

#### `SpeakerCard.tsx`
**Responsabilidade:** Card individual de palestrante
- Recebe props do tipo Speaker
- Badge para palestrantes em destaque
- Tags de especialidade
- Hover effects

#### `Program.tsx`
**Responsabilidade:** Programação do evento
- Lista de dias e atividades
- Grid responsivo
- Dados dinâmicos de lib/data.ts

#### `Inscricoes.tsx`
**Responsabilidade:** Tipos de ingressos e inscrições
- Cards de diferentes categorias
- Botões de ação
- Preços formatados

#### `Stats.tsx`
**Responsabilidade:** Estatísticas do evento
- Números impactantes
- Background gradiente
- Grid responsivo

## 📊 Gerenciamento de Dados

### `lib/data.ts`
Centralização de todos os dados estáticos:

```typescript
// Informações do evento
export const eventInfo: EventInfo

// Lista de palestrantes
export const speakers: Speaker[]

// Programação por dia
export const program: ProgramDay[]

// Estatísticas
export const stats = [...]
```

### `types/index.ts`
Definições de tipos TypeScript:

```typescript
interface Speaker {
  id: string
  name: string
  role: string
  company: string
  bio: string
  tags: string[]
  icon: string
  featured?: boolean
}

interface ProgramDay {
  day: string
  title: string
  activities: string[]
}

interface CountdownTime {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface EventInfo {
  name: string
  year: number
  date: string
  location: string
  eventDate: Date
}
```

## 🎨 Estilização

### Tailwind CSS
- Utility-first CSS framework
- Configuração customizada em `tailwind.config.ts`
- Tema personalizado com cores da UFC

### Cores Personalizadas
```typescript
colors: {
  primary: {
    DEFAULT: '#1e3c72',
    light: '#2a5298',
    dark: '#1a2f5a',
  },
  secondary: {
    DEFAULT: '#17a2b8',
    light: '#20c9e0',
    dark: '#0d7a8a',
  },
  accent: '#28a745',
}
```

### Classes Reutilizáveis
- Botões: `bg-accent text-white px-6 py-3 rounded-md`
- Títulos de seção: `text-4xl font-bold text-primary border-b-4 border-secondary`
- Cards: `bg-white rounded-xl shadow-md hover:shadow-2xl`

## 🔄 Fluxo de Dados

```
lib/data.ts (dados estáticos)
    ↓
types/index.ts (tipagem)
    ↓
components/*.tsx (componentes)
    ↓
app/page.tsx (página principal)
    ↓
app/layout.tsx (layout wrapper)
    ↓
Browser (renderização)
```

## 🚀 Performance

### Server-Side Rendering (SSR)
- Componentes são renderizados no servidor por padrão
- Apenas Countdown e Navigation são Client Components

### Code Splitting
- Next.js automaticamente divide o código
- Cada componente é um chunk separado
- Carregamento sob demanda

### Otimizações
- Imagens otimizadas automaticamente (Next.js Image)
- CSS inlining automático
- Tree-shaking do Tailwind

## 📱 Responsividade

### Breakpoints Tailwind
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px

### Grid Adaptativo
```css
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

## 🔐 Type Safety

### Benefícios do TypeScript
1. **Autocomplete** - IntelliSense completo
2. **Type checking** - Erros em tempo de desenvolvimento
3. **Refactoring seguro** - Mudanças propagam corretamente
4. **Documentação viva** - Interfaces documentam o código

### Exemplo de Type Safety
```typescript
// ❌ Erro em tempo de desenvolvimento
<SpeakerCard speaker={{ name: "João" }} />
// Falta propriedades obrigatórias!

// ✅ Correto
<SpeakerCard speaker={{
  id: '1',
  name: "João",
  role: "Dev",
  company: "Tech",
  bio: "...",
  tags: [],
  icon: "👨‍💻"
}} />
```

## 🧪 Estrutura para Testes (Futuro)

```
📂 __tests__/
  ├── components/
  │   ├── Header.test.tsx
  │   ├── Countdown.test.tsx
  │   └── ...
  └── lib/
      └── data.test.ts
```

## 🔄 Possíveis Extensões

### Backend Integration
1. **API Routes** (`app/api/`)
   - POST /api/inscricoes
   - GET /api/palestrantes
   - POST /api/newsletter

2. **Database**
   - Prisma ORM
   - PostgreSQL / MongoDB
   - Schema de dados

3. **Autenticação**
   - NextAuth.js
   - Login social
   - JWT tokens

### Features Avançadas
1. **CMS Integration**
   - Sanity.io / Contentful
   - Admin panel
   - Preview mode

2. **Analytics**
   - Google Analytics
   - Vercel Analytics
   - Tracking de conversões

3. **Internacionalização**
   - next-intl
   - Múltiplos idiomas
   - Tradução dinâmica

## 📚 Referências

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

**Desenvolvido seguindo as melhores práticas de 2024/2025**

