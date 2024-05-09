"use client"

import { Flex, useToast } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { LoginForm } from "./components"
import { useEffect } from "react"

const Home = () => {
  const toast = useToast()

  useEffect(() => {
    toast({
      title: 'Olá usuário!',
      description: "Você não precisa de credênciais para logar, apenas pressione sobre o botão de 'Entrar' 😎",
      status: 'success',
      duration: 8000,
      isClosable: true,
      position: 'top-right'
    })
  }, [])

  return (
    <Flex w={"100vw"} h={"100vh"} justifyContent={"center"} alignItems={"center"} bgColor={"#ECE2D6"} pos={"relative"}>
      <Image src={"/bg.svg"} alt="background" w={"100vw"} h={"100vh"} />
      <Flex w={"100vw"} h={"100vh"} pos={"absolute"} left={0} top={0} p={16}>
        <LoginForm />
      </Flex>
    </Flex>
  )
}

export default Home