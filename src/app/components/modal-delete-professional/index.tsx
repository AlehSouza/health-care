import { Button, Flex, FormControl, Text, useToast } from "@chakra-ui/react"
import { FaExclamationTriangle } from "react-icons/fa"
import { useForm } from "react-hook-form" 
import { Modal } from ".." 
import { useProfessional } from "@/contexts/professionals.context" 

type IModalRemoveProfessional = {
    selectedProfessional: any,
    onCloseRemove: () => void | any,
    isOpenRemove: boolean | any,
}

// Modal Remove
const ModalRemoveProfessional = ({ selectedProfessional, onCloseRemove, isOpenRemove }: IModalRemoveProfessional) => {
    const { removeProfessional, } = useProfessional()
    const toast = useToast()

    const {
        handleSubmit,
        formState: { errors },
    } = useForm() 

    const handleRemoveProfessional = () => {
        try {
            removeProfessional(selectedProfessional?.id!)
            toast({
                title: "Sucesso",
                description: "O profissional foi deletado.",
                status: "info",
                duration: 9000,
                isClosable: true,
                position: "top-right"
            })
        } catch (e) {
            console.error(e)
            toast({
                title: "Erro",
                description: "Sentimos muito, não foi possível concluir a sua ação, já estamos trabalhando nisso",
                status: "error",
                duration: 9000,
                isClosable: true,
                position: "top-right"
            })
        } finally {
            onCloseRemove()
        }
    }

    return (
        <Modal color={"#FF9900"} onClose={onCloseRemove} isOpen={isOpenRemove} title="Atenção">
            <form onSubmit={handleSubmit(handleRemoveProfessional)}>
                <FormControl isRequired>
                    <Flex flexDir={"column"} textAlign={"center"} py={6} fontSize={"18px"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                        <FaExclamationTriangle fontSize={"38px"} style={{ margin: "18px 0px" }} color="#FF9900" />
                        <Text fontWeight={"bold"}>Tem certeza que deseja deletar {selectedProfessional?.name} ?</Text>
                        <Text py={4} fontSize={'14px'}>Tenha em mente que uma vez <b>deletado</b> os registros não retornaram a tabela, será necessário re-cadastrar o profissional no futuro.</Text>
                    </Flex>
                    <Flex justifyContent={"flex-end"} gap={4} py={4}>
                        <Button colorScheme="red" onClick={() => { onCloseRemove() }}>Cancelar</Button>
                        <Button type="submit" color={'white'} bgColor={"#1A936F"} _hover={{ bgColor: "#10644B" }}>Confirmar</Button>
                    </Flex>
                </FormControl>
            </form>
        </Modal>
    )
}

export default ModalRemoveProfessional