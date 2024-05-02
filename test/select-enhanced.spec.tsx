import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SelectEnhanced from '../src/app/components/select-enhanced'

describe('SelectEnhanced Component', () => {
    test('renders label correctly', () => {
        render(<SelectEnhanced name="test" label="Test Label" isReq={true} />)
        const labelElement = screen.getByText('Test Label')
        expect(labelElement).toBeInTheDocument()
    })

    test('renders select options correctly', () => {
        render(
            <SelectEnhanced name="test" isReq={true}>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </SelectEnhanced>
        )
        const option1Element = screen.getByText('Option 1')
        const option2Element = screen.getByText('Option 2')
        expect(option1Element).toBeInTheDocument()
        expect(option2Element).toBeInTheDocument()
    })

    test('does not render error message when there is no error', () => {
        render(<SelectEnhanced name="test" isReq={true} />)
        const errorElement = screen.queryByRole('alert')
        expect(errorElement).not.toBeInTheDocument()
    })
})
