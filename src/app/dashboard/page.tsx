'use client'

import { Flex, Text } from '@chakra-ui/react'
import { Breadcrumb, ChartProfessionals, DashboardCard, TableDoctors } from '../components'
import { FaCalendarDay, FaCapsules, FaCheck, FaTimes } from 'react-icons/fa'
import { useProfessional } from '@/contexts/professionalsContext'
import { useCallback } from 'react'

// Static, dont change
const BreadcrumbPath = [
  {
    label: 'Umbaraco',
    path: '#'
  },
  {
    label: 'Dashboard',
    path: '/dashboard'
  }
]

const Dashboard = () => {
  const { professionals, getAllProfessionals, getByStatus, getByActualMonth, } = useProfessional()

  const DashboardCards = useCallback(() => {

    const dashboardsInfos = [
      {
        title: 'Profissionais',
        tooltip: 'Quantidade de profissionais cadastrados na plataforma.',
        color: '#1A936F',
        quantity: getAllProfessionals(),
        icon: <FaCapsules color="white" />
      },
      {
        title: 'Registros Mensal',
        tooltip: 'Quantidade de Profissionais cadastrados na plataforma este mês.',
        color: '#FFBBBE',
        quantity: getByActualMonth(),
        icon: <FaCalendarDay color="white" />
      },
      {
        title: 'Ativos',
        tooltip: 'Quantidade de Profissionais cadastrados na plataforma com status igual a Ativo.',
        color: '#0EBDFF',
        quantity: getByStatus(true),
        icon: <FaCheck color="white" />
      },
      {
        title: 'Inativos',
        tooltip: 'Quantidade de Profissionais cadastrados na plataforma com status igual a Inativo.',
        color: '#F06D57',
        quantity: getByStatus(false),
        icon: <FaTimes color="white" />
      },
    ]

    return (
      <Flex gap={8} py={8} width={'60%'} userSelect={'none'} flexWrap={'wrap'} justifyContent={'space-between'}>
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
      backgroundColor={'#ECE2D6'}
      alignItems={'center'}
      flexDir={'column'}
      w={'100%'}
      h={'auto'}
      p={16}
      pt={8}
    >
      <Breadcrumb breadcrumbpath={BreadcrumbPath} />
      <Text width={'100%'} pt={8} fontWeight={'bold'} color={'#301E1A'}>
        Overview
      </Text>
      <Flex width={'100%'} gap={8}>
        <DashboardCards />
        <Flex gap={8} py={8} width={'40%'} userSelect={'none'}>
          <ChartProfessionals />
        </Flex>
      </Flex>
      <TableDoctors />
    </Flex >
  )
}

export default Dashboard