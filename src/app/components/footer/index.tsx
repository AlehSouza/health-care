import {
    Box,
    Text,
    Flex,
} from "@chakra-ui/react";
import { FaCapsules } from "react-icons/fa";

const Logo = () => {
    return (
        <Flex>
            <Flex width={"45px"} height={"45px"} borderRadius={"100%"} bgColor={"#1A936F"} justifyContent={"center"} alignItems={"center"}>
                <FaCapsules fontSize={"18px"} color="white" />
            </Flex>
        </Flex>
    );
};

const Index = () => {
    const currentYear = new Date().getFullYear();
    return (
        <Box
            bg={"#10644B"}
            color={"white"}
            width={"100%"}
        >
            <Box py={10}>
                <Flex
                    align={"center"}
                    _before={{
                        content: '""',
                        borderBottom: "1px solid",
                        borderColor: "#1A936F",
                        flexGrow: 1,
                        mr: 8,
                    }}
                    _after={{
                        content: '""',
                        borderBottom: "1px solid",
                        borderColor: "#1A936F",
                        flexGrow: 1,
                        ml: 8,
                    }}>
                    <Logo />
                </Flex>
                <Text pt={6} fontSize={"sm"} textAlign={"center"}>
                    © {currentYear} Umbaraco Company. All rights reserved
                </Text>
            </Box>
        </Box>
    );
}

export default Index