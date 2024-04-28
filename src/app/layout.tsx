// app/layout.tsx

import { ProviderChakra } from '@/providers/chakra'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <head>
        <title>Umbaraco</title>
      </head>
      <body>
        <ProviderChakra>
          {children}
        </ProviderChakra>
      </body>
    </html>
  )
}