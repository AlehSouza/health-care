"use client"

import { ProviderProfessional } from "@/contexts/professionals.context"
import { ChakraProvider } from "@chakra-ui/react"
import React from "react"

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ChakraProvider>
            <ProviderProfessional>
                {children}
            </ProviderProfessional>
        </ChakraProvider>
    )
}