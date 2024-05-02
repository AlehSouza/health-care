import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import BreadcrumbComponent from '../src/app/components/breadcrumb'

const breadcrumbData = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' }
]

describe('BreadcrumbComponent', () => {
  test('renders breadcrumb links correctly', () => {
    render(<BreadcrumbComponent breadcrumbpath={breadcrumbData} />)

    breadcrumbData.forEach(({ label }) => {
      const linkElement = screen.getByText(label)
      expect(linkElement).toBeInTheDocument()
    })
  })

  test('renders correct number of breadcrumb links', () => {
    render(<BreadcrumbComponent breadcrumbpath={breadcrumbData} />)
    const breadcrumbLinks = screen.getAllByRole('link')
    expect(breadcrumbLinks.length).toBe(breadcrumbData.length)
  })
})
