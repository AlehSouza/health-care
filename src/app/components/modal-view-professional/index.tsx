
import { Flex } from "@chakra-ui/react"
import { Modal } from ".."


type IModalViewProfessional = {
    selectedProfessional: any,
    onCloseView: () => void | any,
    isOpenView: boolean | any,
}

const ModalViewProfessional = ({ selectedProfessional, onCloseView, isOpenView }: IModalViewProfessional) => {
    return (
        <Modal color={"#FFFFFF"} onClose={onCloseView} isOpen={isOpenView} closeButton={false}>
            <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} p={16}>
                Em construção
                {/* {selectedProfessional?.name} */}
            </Flex>
        </Modal>
    )
}

export default ModalViewProfessional