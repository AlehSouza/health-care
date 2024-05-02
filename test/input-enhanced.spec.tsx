import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import InputEnhanced from '../src/app/components/input-enhanced'

describe('InputEnhanced Component', () => {
    const mockProps = {
        name: 'testName',
        label: 'Test Label',
        error: { message: 'Test Error Message' },
        mask: 'phone',
        isReq: true,
    }

    test('renders label correctly', () => {
        render(<InputEnhanced {...mockProps} />)
        const labelElement = screen.getByText('Test Label')
        expect(labelElement).toBeInTheDocument()
    })

    test('renders error message correctly', () => {
        render(<InputEnhanced {...mockProps} />)
        const errorMessageElement = screen.getByText('Test Error Message')
        expect(errorMessageElement).toBeInTheDocument()
    })
})
