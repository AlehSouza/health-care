import { ChakraProvider } from "@chakra-ui/react"
import "@fontsource/poppins"

import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    fonts: {
        heading: `'Poppins', sans-serif`,
        body: `'Poppins', sans-serif`,
    },
})

export function ProviderChakra({ children }: { children: React.ReactNode }) {
    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    )
}