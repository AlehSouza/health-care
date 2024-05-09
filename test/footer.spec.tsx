import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../src/app/components/footer'

describe('Footer Component', () => {
  test('renders footer text correctly', () => {
    render(<Footer />)
    const footerTextElement = screen.getByText(/HealthCare Company. All rights reserved/)
    expect(footerTextElement).toBeInTheDocument()
  })
})
