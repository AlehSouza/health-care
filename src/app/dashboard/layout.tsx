import { Box, Flex } from "@chakra-ui/react"
import { Footer, NavigationBar } from "../components"

type IProps = {
    children: React.ReactNode
}

const DashboardLayout = ({ children }: IProps) => {
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
