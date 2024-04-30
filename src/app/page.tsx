"use client"

import { Flex } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { LoginForm } from "./components"

const Home = () => {
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