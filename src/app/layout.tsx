import { Providers } from "./providers"
import "./global.css"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "HealthCare | Login",
  description: "Log in to our platform right now",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}