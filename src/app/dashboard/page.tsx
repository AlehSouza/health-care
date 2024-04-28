'use client'

import { Flex, Text } from '@chakra-ui/react'
import { Breadcrumb, ChartProfessionals, DashboardCard, TableDoctors } from '../components'
import { FaCalendarDay, FaCapsules, FaCheck, FaTimes } from 'react-icons/fa'

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

const DashboardsCards = [
  {
    title: 'Profissionais',
    tooltip: 'Quantidade de profissionais cadastrados na plataforma.',
    color: '#1A936F',
    quantity: 40,
    icon: <FaCapsules color="white" />
  },
  {
    title: 'Ativos',
    tooltip: 'Quantidade de Profissionais cadastrados na plataforma com status igual a Ativo.',
    color: '#0EBDFF',
    quantity: 20,
    icon: <FaCheck color="white" />
  },
  {
    title: 'Inativos',
    tooltip: 'Quantidade de Profissionais cadastrados na plataforma com status igual a Inativo.',
    color: '#F06D57',
    quantity: 20,
    icon: <FaTimes color="white" />
  },
  {
    title: 'Registros Mensal',
    tooltip: 'Quantidade de Profissionais cadastrados na plataforma este mês.',
    color: '#FFBBBE',
    quantity: 5,
    icon: <FaCalendarDay color="white" />
  },
]

const Dashboard = () => {
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
        <Flex gap={8} py={8} width={'60%'} userSelect={'none'} flexWrap={'wrap'}>
          {
            DashboardsCards.map((dashboardItem, index: number) => {
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
        </Flex>
        <Flex gap={8} py={8} width={'40%'} userSelect={'none'}>
          <ChartProfessionals />
        </Flex>
      </Flex>
      <TableDoctors />
    </Flex >
  )
}

export default Dashboard