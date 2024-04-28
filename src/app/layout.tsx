// app/layout.tsx

import { ProviderProfessional } from '@/contexts/professionalsContext'
import { ProviderChakra } from '@/providers/chakra'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='pt-BR'>
      <head>
        <title>Umbaraco</title>
      </head>
      <body>
        <ProviderChakra>
          <ProviderProfessional>
            {children}
          </ProviderProfessional>
        </ProviderChakra>
      </body>
    </html>
  )
}