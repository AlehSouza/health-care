"use client"

import { Flex, Text } from "@chakra-ui/react"
import { Breadcrumb, ChartProfessionals, DashboardCard, TableProfessionals } from "../components"
import { FaCalendarDay, FaCapsules, FaCheck, FaTimes } from "react-icons/fa"
import { useProfessional } from "@/contexts/professionals.context"
import { useCallback } from "react"

// Static, dont change
const BreadcrumbPath = [
  {
    label: "HealthCare",
    path: "#"
  },
  {
    label: "Dashboard",
    path: "/dashboard"
  }
]

const Dashboard = () => {
  const { professionals, getProfessionalsAll, getProfessionalsByStatus, getProfessionalsByCurrentMonth, } = useProfessional()

  const DashboardCards = useCallback(() => {

    const dashboardsInfos = [
      {
        title: "Profissionais",
        tooltip: "Quantidade de profissionais cadastrados na plataforma.",
        color: "#1A936F",
        quantity: getProfessionalsAll(),
        icon: <FaCapsules color="white" />
      },
      {
        title: "Registros Mensais",
        tooltip: "Quantidade de Profissionais cadastrados na plataforma este mês.",
        color: "#FFBBBE",
        quantity: getProfessionalsByCurrentMonth(),
        icon: <FaCalendarDay color="white" />
      },
      {
        title: "Ativos",
        tooltip: "Quantidade de Profissionais cadastrados na plataforma com status igual a Ativo.",
        color: "#0EBDFF",
        quantity: getProfessionalsByStatus(true),
        icon: <FaCheck color="white" />
      },
      {
        title: "Inativos",
        tooltip: "Quantidade de Profissionais cadastrados na plataforma com status igual a Inativo.",
        color: "#F06D57",
        quantity: getProfessionalsByStatus(false),
        icon: <FaTimes color="white" />
      },
    ]

    return (
      <Flex gap={8} py={8} width={"65%"} userSelect={"none"} flexWrap={"wrap"} justifyContent={"space-between"}>
        {
          dashboardsInfos.map((dashboardItem, index: number) => {
            return (
              <DashboardCard
                quantity={dashboardItem.quantity}
                tooltip={dashboardItem.tooltip}
                title={dashboardItem.title}
                color={dashboardItem.color}
                icon={dashboardItem.icon}
                key={index}
              />
            )
          })
        }
      </Flex >
    )
  }, [professionals])

  return (
    <Flex
      backgroundColor={"#ECE2D6"}
      alignItems={"center"}
      flexDir={"column"}
      w={"100%"}
      h={"auto"}
      p={16}
      pt={8}
    >
      <Breadcrumb breadcrumbpath={BreadcrumbPath} />
      <Text width={"100%"} pt={8} fontWeight={"bold"} color={"#301E1A"}>
        Overview
      </Text>
      <Flex width={"100%"} gap={8} justifyContent={"space-between"}>
        <DashboardCards />
        <Flex gap={8} py={8} width={"35%"} userSelect={"none"}>
          <ChartProfessionals />
        </Flex>
      </Flex>
      <TableProfessionals />
    </Flex >
  )
}

export default Dashboard