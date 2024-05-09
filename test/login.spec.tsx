import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Login from '../src/app/components/login'

describe('Login Component', () => {
    test('renders HealthCare title correctly', () => {
        render(<Login />)
        const titleElement = screen.getByText('HealthCare')
        expect(titleElement).toBeInTheDocument()
    })

    test('renders inputs correctly', () => {
        render(<Login />)
        const nameInput = screen.getByPlaceholderText('Nome')
        const passwordInput = screen.getByPlaceholderText('Senha')
        expect(nameInput).toBeInTheDocument()
        expect(passwordInput).toBeInTheDocument()
    })

    test('renders login button correctly', () => {
        render(<Login />)
        const loginButton = screen.getByRole('button', { name: 'Entrar' })
        expect(loginButton).toBeInTheDocument()
    })

    test('renders sign up link correctly', () => {
        render(<Login />)
        const signUpLink = screen.getByText('Cadastre-se')
        expect(signUpLink).toBeInTheDocument()
    })
})
