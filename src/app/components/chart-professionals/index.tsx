"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box, Card, CardHeader, Flex, Heading, IconButton, Tooltip as TooltipChakra, Text } from "@chakra-ui/react"
import { FaChartPie, FaInfoCircle } from "react-icons/fa";
import { useProfessional } from "@/contexts/professionals.context";

ChartJS.register(ArcElement, Tooltip, Legend);

const Index = () => {
    const { getProfessionalsBySpecialty } = useProfessional()

    let data = [
        {
            label: "Ortopedista",
            value: getProfessionalsBySpecialty("Ortopedista"),
            color: "#C52907",
            cutout: "50%",
        },
        {
            label: "Cirurgia Geral",
            value: getProfessionalsBySpecialty("Cirurgia Geral"),
            color: "#0EBDFF",
            cutout: "50%",
        },
        {
            label: "Clínica Médica",
            value: getProfessionalsBySpecialty("Clínica Médica"),
            color: "#F06D57",
            cutout: "50%",
        },
        {
            label: "Ginecologia e Obstetrícia",
            value: getProfessionalsBySpecialty("Ginecologia e Obstetrícia"),
            color: "#FFBBBE",
            cutout: "50%",
        },
        {
            label: "Pediatria",
            value: getProfessionalsBySpecialty("Pediatria"),
            color: "#23D355",
            cutout: "50%",
        },
        {
            label: "Dermatologia",
            value: getProfessionalsBySpecialty("Dermatologia"),
            color: "#FF9900",
            cutout: "50%",
        },
        {
            label: "Psiquiatria",
            value: getProfessionalsBySpecialty("Psiquiatria"),
            color: "#BA35E9",
            cutout: "50%",
        },
        {
            label: "Endocrinologia",
            value: getProfessionalsBySpecialty("Endocrinologia"),
            color: "#2B65F8",
            cutout: "50%",
        },
        {
            label: "Gastroenterologia",
            value: getProfessionalsBySpecialty("Gastroenterologia"),
            color: "#80F847",
            cutout: "50%",
        },
        {
            label: "Medicina de Emergência",
            value: getProfessionalsBySpecialty("Medicina de Emergência"),
            color: "#F06D57",
            cutout: "50%",
        },
    ]

    const options: any = {
        plugins: {
            responsive: true,
            legend: {
                display: false,
            }
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
        <Card w={"100%"} borderTop={"5px solid #FF9900"}>
            <CardHeader>
                <Flex alignItems={"center"}>
                    <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                        <Box
                            borderRadius={"100%"}
                            bgColor={"#FF9900"}
                            p={4}
                        >
                            <FaChartPie color="white" />
                        </Box>
                        <Box>
                            <Heading size="md">Profissionais por especialidade</Heading>
                        </Box>
                    </Flex>
                    <TooltipChakra label={"Representação gráfica de Profissionais por área cadastrados na plataforma."} placement={"top"} textAlign={"center"} p={2} bgColor={"black"} borderRadius={"lg"}>
                        <IconButton
                            variant="ghost"
                            colorScheme="gray"
                            aria-label="See menu"
                            icon={<FaInfoCircle color={"#FF9900"} fontSize={"16px"} />}
                        />
                    </TooltipChakra>
                </Flex>
            </CardHeader>
            <Flex w={"100%"} h={"100%"} alignItems={"center"} justifyContent={"center"} flexDir={"column"} >
                <Flex h={"320px"} pb={8} alignItems={"center"}>
                    <Doughnut data={finalData} options={options} />
                    <Flex flexDir={"column"} pl={8}>
                        {
                            data.map((specialty, index) => {
                                return (
                                    <TooltipChakra key={index} label={`Cadastrados: ${specialty.value}`} placement={"bottom"} textAlign={"center"} p={2} bgColor={"black"} borderRadius={"lg"}>
                                        <Flex alignItems={"center"} gap={2} pb={1} >
                                            <Box width={"12px"} height={"12px"} bgColor={specialty.color} borderRadius={"100px"} />
                                            <Text fontSize={"14px"}>{specialty.label}</Text>
                                        </Flex>
                                    </TooltipChakra>
                                )
                            })
                        }
                    </Flex>
                </Flex>
            </Flex>
        </Card>
    )
}

export default Index