import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SESCOMP 2026 - UFC Russas',
  description: 'Semana de Engenharia de Software e Ciência da Computação - Universidade Federal do Ceará, Campus Russas',
  keywords: ['SESCOMP', 'UFC', 'Russas', 'Tecnologia', 'Computação', 'Engenharia de Software'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

