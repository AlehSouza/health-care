"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box, Card, CardHeader, Flex, Heading, IconButton, Tooltip as TooltipChakra, Text } from "@chakra-ui/react"
import { FaCapsules, FaInfoCircle } from "react-icons/fa";
import { useProfessional } from "@/contexts/professionalsContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const Index = () => {

    const { professionals, getByStatus } = useProfessional()

    let data = [
        {
            label: "Ativos",
            value: getByStatus(true),
            color: "#0EBDFF",
            cutout: "50%",
        },
        {
            label: "Inativos",
            value: getByStatus(false),
            color: "#F06D57",
            cutout: "50%",
        },
    ]

    const options: any = {
        plugins: {
            responsive: true,
        },
        cutout: data.map((item) => item.cutout),
    };

    const finalData = {
        labels: data.map((item) => item.label),
        datasets: [
            {
                data: data.map((item) => Math.round(item.value)),
                backgroundColor: data.map((item) => item.color),
                borderColor: data.map((item) => item.color),
                borderWidth: 1,
                dataVisibility: new Array(data.length).fill(true),
            },
        ],
    };

    return (
        <Card w={'100%'} borderTop={'5px solid #FF9900'}>
            <CardHeader>
                <Flex alignItems={'center'}>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Box
                            borderRadius={"100%"}
                            bgColor={'#FF9900'}
                            p={4}
                        >
                            <FaCapsules color="white" />
                        </Box>
                        <Box>
                            <Heading size='md'>Profissionais Ativos e Inativos</Heading>
                        </Box>
                    </Flex>
                    <TooltipChakra label={'Gráfico mostrando % de profissionais ativos e inativos na plataforma'} placement={'top'} textAlign={'center'} p={2} bgColor={'black'} borderRadius={'lg'}>
                        <IconButton
                            variant='ghost'
                            colorScheme='gray'
                            aria-label='See menu'
                            icon={<FaInfoCircle color={'#FF9900'} fontSize={'16px'} />}
                        />
                    </TooltipChakra>
                </Flex>
            </CardHeader>
            <Flex w={'100%'} h={'100%'} alignItems={'center'} justifyContent={'center'} flexDir={'column'} >
                <Flex h={'320px'} pb={8}>
                    <Doughnut data={finalData} options={options}/>
                </Flex>
            </Flex>
        </Card>
    )
}

export default Index