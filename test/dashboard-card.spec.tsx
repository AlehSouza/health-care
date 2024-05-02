import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import DashboardCard from './../src/app/components/dashboard-card'

describe('DashboardCard Component', () => {
    const mockData = {
        title: 'Test Title',
        color: '#FF9900',
        icon: <div>Test Icon</div>,
        quantity: 10,
        tooltip: 'Test Tooltip',
    }

    test('renders card title correctly', () => {
        render(<DashboardCard {...mockData} />)
        const titleElement = screen.getByText('Test Title')
        expect(titleElement).toBeInTheDocument()
    })

    test('renders card icon correctly', () => {
        render(<DashboardCard {...mockData} />)
        const iconElement = screen.getByText('Test Icon')
        expect(iconElement).toBeInTheDocument()
    })

    test('renders card quantity correctly', () => {
        render(<DashboardCard {...mockData} />)
        const quantityElement = screen.getByText('10')
        expect(quantityElement).toBeInTheDocument()
    })
})
