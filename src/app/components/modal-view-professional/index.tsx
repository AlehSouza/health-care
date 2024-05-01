
import { Box, Button, Card, Flex, Text } from "@chakra-ui/react"
import { FaArrowRight, FaEnvelope, FaPhoneAlt } from "react-icons/fa"
import { Modal } from ".."
import Image from "next/image"
import Link from "next/link"


type IModalViewProfessional = {
    selectedProfessional: any,
    onCloseView: () => void | any,
    isOpenView: boolean | any,
}

const ModalViewProfessional = ({ selectedProfessional, onCloseView, isOpenView }: IModalViewProfessional) => {
    return (
        <Modal
            color={"#FFFFFF"}
            onClose={onCloseView}
            isOpen={isOpenView}
            closeButton={false}
        >
            <Flex
                justifyContent={'center'}
                flexDir={'column'}
                py={3}
                gap={4}
            >
                <Flex
                    width={"100%"}
                    justifyContent={"left"} alignItems="center"
                    flexDirection={'row'}
                    bgColor={'#1A936F'}
                    borderRadius={'lg'}
                    p={6}
                >
                    <Box
                        width={'150px'}
                        height={'150px'}
                        pos={'relative'}
                        borderRadius={'100px'}
                        overflow={'hidden'} property="true"
                        border={'5px solid white'}
                    >
                        <Image
                            src={selectedProfessional?.image || 'https://firebasestorage.googleapis.com/v0/b/projects-cd0f3.appspot.com/o/umbaraco%2Fprofile_pic_man.png?alt=media&token=2a1c1256-c7d6-46ac-8488-28207f2bc760'}
                            sizes="(max-width: 150px) 150px"
                            fill
                            alt={`example icon`}
                        />
                    </Box>
                    <Flex
                        flexDir={'column'}
                        px={4}
                        margin={'0 auto'}
                    >
                        <Text
                            color={'white'}
                            fontWeight={'bold'}
                            py={2}
                            fontSize={'22px'}
                            noOfLines={1}
                        >
                            {selectedProfessional?.name} 🥼
                        </Text>
                        <Text
                            color={'white'}
                            fontWeight={'bold'}
                            py={2}
                            fontSize={'16px'}
                            noOfLines={1}
                        >
                            {selectedProfessional?.specialty}
                        </Text>
                        <Text
                            color={'white'}
                            fontWeight={'bold'}
                            py={2}
                            fontSize={'14px'}
                            noOfLines={1}
                        >
                            Identificação: {selectedProfessional?.registerCfmCrm}
                        </Text>
                    </Flex>
                </Flex>
                <Flex
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    width={'100%'}
                    bgColor={selectedProfessional?.status === true ? '#1A936F' : '#EB3535'}
                    color={'white'}
                    py={2}
                    px={8}
                    borderRadius={'lg'}
                >
                    <Text
                        fontWeight={'bold'}
                        py={2}
                        fontSize={'20px'}
                        noOfLines={1}
                    >
                        Situação
                    </Text>
                    <Text
                        fontSize={'20px'}
                    >
                        {selectedProfessional?.status === true ? 'Operando ✅' : 'Inativo 😵'}
                    </Text>
                </Flex>
                <Flex
                    width={"100%"}
                    justifyContent={"space-between"}
                    border={'5px solid #1A936F'}
                    borderRadius={'lg'}
                    p={6}
                    gap={4}
                >
                    <Flex
                        flexDir={'column'}
                        width={'50%'}
                    >
                        <Text
                            py={2}
                            fontSize={'16px'}
                        >
                            <b>CPF:</b>
                            <br />
                            {selectedProfessional?.cpf}
                        </Text>
                        <Text
                            py={2}
                            fontSize={'16px'}
                        >
                            <b>RG:</b>
                            <br />
                            {selectedProfessional?.rg}
                        </Text>
                        <Text
                            py={2}
                            fontSize={'16px'}
                        >
                            <b>Cidade:</b>
                            <br />
                            {selectedProfessional?.city}
                        </Text>
                        <Text
                            py={2}
                            fontSize={'16px'}
                        >
                            <b>Endereço:</b>
                            <br />
                            {selectedProfessional?.street}, {selectedProfessional?.number}, {selectedProfessional?.neighborhood} - {selectedProfessional?.cep}, {selectedProfessional?.uf}
                        </Text>
                    </Flex>
                    {/* kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk */}
                    <Flex
                        flexDir={'column'}
                        width={'50%'}
                    >

                        <Text
                            py={2}
                            fontSize={'16px'}
                        >
                            <b>Atendimento:</b>
                            <br />
                            {selectedProfessional?.service}
                        </Text>
                        <Text
                            py={2}
                            fontSize={'16px'}
                        >
                            <b>Região de Atuação:</b>
                            <br />
                            {selectedProfessional?.regionActing}
                        </Text>
                        <Text
                            py={2}
                            fontSize={'16px'}
                        >
                            <b>Valor por hora:</b>
                            <br />
                            R$ {selectedProfessional?.currencyHour}
                        </Text>
                        <Text
                            py={2}
                            fontSize={'16px'}
                        >
                            <b>Valor por hora:</b>
                            <br />
                            R$ {selectedProfessional?.currencyHour}
                        </Text>
                    </Flex>

                </Flex>
                <Link
                    href={`https://www.google.com.br/maps?q=${selectedProfessional?.regionActing},%20Brasil`} target="_blank" >
                    <Card
                        px={4}
                        alignItems={'center'}
                        justifyContent={'flex-end'}
                        borderRadius={'lg'}
                        flexDir={'row'}
                        variant={'outline'}
                        cursor={'pointer'}
                        width={'100%'}
                    >
                        <Box
                            color={'#0F101E'}
                            fontWeight={'bold'}
                            p={4}
                            display={'flex'}
                            gap={1}
                            fontSize={'20px'}
                            cursor={'pointer'}
                        >
                            Região de Atuação, Agora no
                            <Flex
                                cursor={'pointer'}
                            >
                                <label
                                    style={{ color: '#4285f4' }}
                                >G</label>
                                <label
                                    style={{ color: '#ea4335' }}
                                >o</label>
                                <label
                                    style={{ color: '#fbbc05' }}
                                >o</label>
                                <label
                                    style={{ color: '#4285f4' }}
                                >g</label>
                                <label
                                    style={{ color: '#34a853' }}
                                >l</label>
                                <label
                                    style={{ color: '#ea4335' }}
                                >e</label>
                            </Flex>
                            Maps
                        </Box>
                        <FaArrowRight color="#4285f4" />
                    </Card>
                </Link>
                <Flex
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    width={'100%'}
                    bgColor={'#10644B'}
                    color={'white'}
                    py={2}
                    px={8}
                    borderRadius={'lg'}
                >
                    <Text
                        fontWeight={'bold'}
                        py={2}
                        fontSize={'20px'}
                        noOfLines={1}
                    >
                        Entrar em contato
                    </Text>
                    <Flex
                        gap={4}
                        justifyContent={'flex-end'}
                    >
                        <Button
                            bgColor={'#0EBDFF'}
                            color={'white'}
                            _hover={{ bgColor: '#127AA1' }}
                        >
                            <FaPhoneAlt />
                        </Button>
                        <Button
                            bgColor={'#0EBDFF'}
                            color={'white'}
                            _hover={{ bgColor: '#127AA1' }}
                        >
                            <FaEnvelope />
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Modal>
    )
}

export default ModalViewProfessional