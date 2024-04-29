"use client"

import { ReactNode } from "react";
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    Stack,
    Text,
} from "@chakra-ui/react";
import { FaBars, FaCapsules, FaTimes } from "react-icons/fa";

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={4}
        py={3}
        rounded={"md"}
        _hover={{
            textDecoration: "none",
            bg: "rgba(255,255,255,0.5)",
        }}
        href={"#"}>
        {children}
    </Link>
);

const NavigationBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box
            width={"100%"}
            boxShadow={"lg"}
            p={1}
            px={16}
            bg={"#301E1A"}
            color={"#ffffff"}
        >
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"} >
                <Button
                    size={"md"}
                    bgColor={"#D2B89F"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    aria-label={"Open Menu"}
                    display={{ md: "none" }}
                    onClick={isOpen ? onClose : onOpen}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </Button>
                <HStack spacing={8} alignItems={"center"}>
                    <Flex width={"40px"} height={"40px"} borderRadius={"100%"} bgColor={"#1A936F"} justifyContent={"center"} alignItems={"center"}>
                        <FaCapsules fontSize={"18px"} color="white" />
                    </Flex>
                    <HStack
                        as={"nav"}
                        spacing={4}
                        display={{ base: "none", md: "flex" }}>
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                    </HStack>
                </HStack>
                <Flex alignItems={"center"}>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rounded={"full"}
                            variant={"link"}
                            cursor={"pointer"}
                            minW={0}>
                            <Avatar
                                size={"sm"}
                                src={"https://avatars.githubusercontent.com/u/43255955?v=4"}
                            />
                        </MenuButton>
                        <MenuList color={"#301E1A"} fontWeight={"bold"} border={"0px"} pb={0} overflow={"hidden"} boxShadow={"lg"}>
                            <MenuItem color={"#301E1A"} fontWeight={"bold"}>Configurações</MenuItem>
                            <MenuDivider mb={0} />
                            <Link href="/" style={{ textDecoration: "none" }}>
                                <MenuItem bgColor={"#e64b40"} fontWeight={"bold"} p={3} color={"white"}>
                                    <Text textDecoration={"none"}>Sair</Text>
                                </MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{ md: "none" }}>
                    <Stack as={"nav"} spacing={4}>
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
}

export default NavigationBar