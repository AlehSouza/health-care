import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
} from "@chakra-ui/react"
import { ReactNode } from "react"

type IModal = {
    onClose: () => void
    isOpen: boolean
    color?: string,
    children: ReactNode
    title?: string | ReactNode,
    size?: string
}

function Index({ onClose, isOpen, title, children, size = "xl", color }: IModal) {

    return (
        <>
            <Modal onClose={onClose} isOpen={isOpen} size={size} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader style={{ letterSpacing: "1px" }}>{title && title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody borderTop={`5px solid ${color}`}>
                        {children}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Index