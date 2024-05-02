import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import NavigationBar from '../src/app/components/navigation-bar'

describe('NavigationBar Component', () => {

    test('renders menu button correctly', () => {
        render(<NavigationBar />)
        const menuButtonElement = screen.getByLabelText('Open Menu')
        expect(menuButtonElement).toBeInTheDocument()
    })

    test('opens menu when menu button is clicked', () => {
        render(<NavigationBar />)
        const menuButtonElement = screen.getByLabelText('Open Menu')
        userEvent.click(menuButtonElement)
    })
})
