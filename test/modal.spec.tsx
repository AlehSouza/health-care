import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Modal from '../src/app/components/modal'
import '@testing-library/jest-dom'

describe('Modal Component', () => {
    test('renders modal with title correctly', () => {
        render(<Modal onClose={() => { }} isOpen={true} title="Test Title" >teste</Modal>)
        const titleElement = screen.getByText('Test Title')
        expect(titleElement).toBeInTheDocument()
    })

    test('renders modal without title correctly', () => {
        render(<Modal onClose={() => { }} isOpen={true}>teste</Modal>)
        const modalHeaderElement = screen.queryByRole('heading')
        expect(modalHeaderElement).not.toBeInTheDocument()
    })

    test('renders modal with children correctly', () => {
        render(
            <Modal onClose={() => { }} isOpen={true}>
                <div>Test Children</div>
            </Modal>
        )
        const childrenElement = screen.getByText('Test Children')
        expect(childrenElement).toBeInTheDocument()
    })

    test('renders modal with close button by default', () => {
        render(<Modal onClose={() => { }} isOpen={true} >teste</Modal>)
        const closeButtonElement = screen.getByRole('button', { name: 'Close' })
        expect(closeButtonElement).toBeInTheDocument()
    })

    test('renders modal without close button when closeButton prop is false', () => {
        render(<Modal onClose={() => { }} isOpen={true} closeButton={false} >teste</Modal>)
        const closeButtonElement = screen.queryByRole('button', { name: 'Close' })
        expect(closeButtonElement).not.toBeInTheDocument()
    })

    test('calls onClose callback when close button is clicked', () => {
        const onCloseMock = jest.fn()
        render(<Modal onClose={onCloseMock} isOpen={true} >teste</Modal>)
        const closeButtonElement = screen.getByRole('button', { name: 'Close' })
        fireEvent.click(closeButtonElement)
        expect(onCloseMock).toHaveBeenCalled()
    })
})
