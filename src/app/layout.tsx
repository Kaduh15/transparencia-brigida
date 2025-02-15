import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Transparência Brigida',
  description:
    'Sistema de arrecadação para sistemas hídrico do projeto Brigida',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
