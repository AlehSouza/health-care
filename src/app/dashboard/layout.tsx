import { Box, Flex } from "@chakra-ui/react"
import { Footer, NavigationBar } from "../components"

type IDashboardLayout = {
    children: React.ReactNode
}

import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "HealthCare | Dashboard",
    description: "Dashboard with all professional data",
}

const DashboardLayout = ({ children }: IDashboardLayout) => {
    return (
        <Flex
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
        >
            <NavigationBar />
            <Box width={"100%"}>
                {children}
            </Box>
            <Footer />
        </Flex>
    )
}

export default DashboardLayout
