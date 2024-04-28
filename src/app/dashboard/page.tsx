'use client'

import { Flex, Text } from '@chakra-ui/react'
import { Breadcrumb, DashboardCard, TableDoctors } from '../components'
import { FaCalendarDay, FaCapsules, FaCheck, FaChevronUp, FaTimes } from 'react-icons/fa'

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
      <Flex gap={8} py={8} width={'100%'} userSelect={'none'}>
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
      <TableDoctors />
    </Flex >
  )
}

export default Dashboard