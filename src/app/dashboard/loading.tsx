"use client"

import { Flex, Spinner, Text } from "@chakra-ui/react"

const DashboardLoading = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      w={"100%"}
      minH={"90vh"}
      p={20}
    >
      <Text pb={4}> Loading </Text>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="#301E1A"
        size="xl"
      />
    </Flex>
  )
}

export default DashboardLoading