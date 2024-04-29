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
    title?: string | ReactNode
    size?: string
    location?: string | any
    footer?: ReactNode
    closeButton?: boolean
}

function Index({ onClose, isOpen, title, children, size = "xl", color, location = "", footer, closeButton = true }: IModal) {

    return (
        <>
            <Modal onClose={onClose} isOpen={isOpen} size={size} isCentered scrollBehavior={location}>
                <ModalOverlay />
                <ModalContent overflow={"hidden"}>
                    {
                        title &&
                        <ModalHeader style={{ letterSpacing: "1px" }}>{title && title}</ModalHeader>
                    }
                    {closeButton ? <ModalCloseButton /> : <></>}
                    <ModalBody borderTop={`5px solid ${color}`}>
                        {children}
                    </ModalBody>
                    {footer}
                </ModalContent>
            </Modal>
        </>
    )
}

export default Index