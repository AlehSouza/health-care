"use client"

import { Box, Button, Card, Flex, FormControl, FormLabel, Input, Select, Table, TableCaption, Tbody, Td, Text, Th, Thead, Tooltip, Tr, useDisclosure, useToast } from "@chakra-ui/react"
import { useCallback, useEffect, useState } from "react"
import { useProfessional } from "@/contexts/professionals.context"
import { FaArrowLeft, FaArrowRight, FaEye, FaPen, FaPlus, FaSearch, FaTrash } from "react-icons/fa"
import { useForm } from "react-hook-form"
import ModalUpdateProfessional from "../modal-update-professional"
import ModalDeleteProfessional from "../modal-delete-professional"
import ModalAddProfessional from "../modal-add-professional"
import ModalViewProfessional from "../modal-view-professional"

const TableProfessionals = () => {
    const { filteredProfessionals, getProfessionalsFiltered, selectedProfessional, setSelectedProfessional } = useProfessional()
    const [fileImage, setFileImage] = useState<string | null>(null)

    const {
        isOpen: isOpenAdd,
        onOpen: onOpenAdd,
        onClose: onCloseAdd,
    } = useDisclosure()

    const {
        isOpen: isOpenRemove,
        onOpen: onOpenRemove,
        onClose: onCloseRemove
    } = useDisclosure()

    const {
        isOpen: isOpenUpdate,
        onOpen: onOpenUpdate,
        onClose: onCloseUpdate
    } = useDisclosure()

    const {
        isOpen: isOpenView,
        onOpen: onOpenView,
        onClose: onCloseView
    } = useDisclosure()

    const TableSearchProfessionals = () => {
        const {
            register,
            reset,
            handleSubmit,
            formState: { errors },
        } = useForm({ mode: "onChange" })

        const onSubmit = (e?: { name?: string }) => {
            try {
                const draft = {
                    ...e,
                    name: e?.name?.trim()
                }
                // @ts-ignore
                getProfessionalsFiltered(draft)
            } catch (e) {
                console.error(e)
            }
        }

        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <Flex width={"100%"} p={4} alignItems={"flex-end"} justifyContent={"space-between"} bgColor={"#1A936F"}>
                    <Flex width={"80%"} gap={4}>
                        <Flex
                            flexDir={"column"}
                            w={"60%"}
                        >
                            <FormControl>
                                <FormLabel fontSize={"14px"} color={"white"}>Dados do usuário cadastrado</FormLabel>
                                <Input {...register("name")} placeholder="John Doe" bgColor={"white"} />
                            </FormControl>
                        </Flex>
                        <Flex
                            flexDir={"column"}
                            w={"20%"}
                        >
                            <FormControl>
                                <FormLabel fontSize={"14px"} color={"white"}>Status</FormLabel>
                                <Select {...register("status")} placeholder="Selecione..." bgColor={"white"} >
                                    <option value={"true"}>Ativo</option>
                                    <option value={"false"}>Inativo</option>
                                </Select>
                            </FormControl>
                        </Flex>
                        <Flex
                            flexDir={"column"}
                            w={"20%"}
                        >
                            <FormControl>
                                <FormLabel fontSize={"14px"} color={"white"}>Especialidade</FormLabel>
                                <Select {...register("specialty")} placeholder="Selecione..." bgColor={"white"}>
                                    <option value="Cirurgia Geral">Cirurgia Geral</option>
                                    <option value="Clínica Médica">Clínica Médica</option>
                                    <option value="Ginecologia e Obstetrícia">Ginecologia e Obstetrícia</option>
                                    <option value="Ortopedista">Ortopedista</option>
                                    <option value="Pediatria">Pediatria</option>
                                    <option value="Dermatologia">Dermatologia</option>
                                    <option value="Psiquiatria">Psiquiatria</option>
                                    <option value="Endocrinologia">Endocrinologia</option>
                                    <option value="Gastroenterologia">Gastroenterologia</option>
                                    <option value="Medicina de Emergência">Medicina de Emergência</option>
                                </Select>
                            </FormControl>
                        </Flex>
                    </Flex>
                    <Flex gap={4}>
                        <Tooltip label={"Limpar parametros da pesquisa"} placement={"left"} textAlign={"center"} p={2} bgColor={"black"} borderRadius={"lg"}>
                            <Button onClick={() => {
                                reset()
                                onSubmit()
                            }}>
                                Limpar
                            </Button>
                        </Tooltip>
                        <Tooltip label={"Efetuar a busca"} placement={"left"} textAlign={"center"} p={2} bgColor={"black"} borderRadius={"lg"}>
                            <Button type="submit" colorScheme="linkedin">
                                <FaSearch color="white" />
                            </Button>
                        </Tooltip>
                    </Flex>
                </Flex>
            </form>
        )
    }

    const TableListProfessionals = () => {

        const [selectedPage, setSelectedPage] = useState<any>(0)
        const [tableItems, setTableItems] = useState<any>()
        const [pagesQuantity, setPagesQuantity] = useState<any>()

        const sliceFilteredProfessionals = () => {
            const draft = []
            for (var i = 0; i < filteredProfessionals.length; i = i + 5) {
                draft.push(filteredProfessionals.slice(i, i + 5));
            }
            setPagesQuantity(draft.length)
            setTableItems(draft)
        }

        const handleClick = (type: any) => {
            if (type === 'prev') {
                if (selectedPage <= 0) return
                setSelectedPage(selectedPage - 1);
            } else if (type === 'next') {
                if (selectedPage >= (pagesQuantity - 1)) return
                setSelectedPage(selectedPage + 1);
            } else {
                setSelectedPage(type);
            }
        }

        const renderpagesQuantity = () => {
            const quantityButtons = []
            for (let i = 0; i < pagesQuantity; i++) {
                quantityButtons.push(i)
            }

            return (
                <Flex>
                    <Button
                        variant={'solid'}
                        onClick={() => handleClick('prev')}
                        mx={1}
                    >
                        <FaArrowLeft />
                    </Button>
                    {
                        quantityButtons.map((number) => (
                            <Button
                                key={number}
                                variant={number === selectedPage ? 'solid' : 'outline'}
                                onClick={() => handleClick(number)}
                                mx={1}
                            >
                                {number + 1}
                            </Button>
                        ))
                    }
                    <Button
                        variant={'solid'}
                        onClick={() => handleClick('next')}
                        mx={1}
                    >
                        <FaArrowRight />
                    </Button>
                </Flex>
            )
        };

        useEffect(() => {
            sliceFilteredProfessionals()
        }, [filteredProfessionals])

        const applyIsActive = (status: boolean) => {
            return (
                status
                    ?
                    <Box borderRadius={"100px"} p={1} bgColor={"#b1e9d0"} border={"1px solid #25a47c"} >
                        <Text textAlign={"center"} fontSize={"12px"} color={"greenbrown"} fontWeight={"bold"}>Ativo</Text>
                    </Box>
                    :
                    <Box borderRadius={"100px"} p={1} bgColor={"#ffc9c9"} border={"1px solid #e01f1f"} >
                        <Text textAlign={"center"} fontSize={"12px"} color={"#762311"} fontWeight={"bold"}>Inativo</Text>
                    </Box>
            )
        }
        const applySpecialtyLayout = (specialty: string) => {
            switch (specialty) {
                case "Ortopedista":
                    return "#C52907";
                case "Cirurgia Geral":
                    return "#0EBDFF";
                case "Clínica Médica":
                    return "#F06D57";
                case "Ginecologia e Obstetrícia":
                    return "#FFBBBE";
                case "Pediatria":
                    return "#23D355";
                case "Dermatologia":
                    return "#FF9900";
                case "Psiquiatria":
                    return "#BA35E9";
                case "Endocrinologia":
                    return "#2B65F8";
                case "Gastroenterologia":
                    return "#80F847";
                case "Medicina de Emergência":
                    return "#F06D57";
                default:
                    return "Cor não encontrada";
            }
        }

        return (
            tableItems != undefined &&
            tableItems.length > 0
                ?
                <Flex flexDir={'column'}>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Nome</Th>
                                <Th>Status</Th>
                                <Th>CFM / CRM</Th>
                                <Th>Região</Th>
                                <Th>Especialidade</Th>
                                <Th>Email</Th>
                                <Th>Telefone</Th>
                                <Th>Ações</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                tableItems[selectedPage]?.map((professional: any) => {
                                    const name = professional.name.split(" ")
                                    return (
                                        <Tr key={professional.id}>
                                            <Td>{professional.name}</Td>
                                            <Td>{applyIsActive(professional.status)}</Td>
                                            <Td>{professional.registerCfmCrm}</Td>
                                            <Td>{professional.regionActing}</Td>
                                            <Td>
                                                <Flex alignItems={'center'} gap={2}>
                                                    <Box
                                                        height={'4px'}
                                                        width={'4px'}
                                                        border={`4px solid ${applySpecialtyLayout(professional.specialty)}`}
                                                        p={1}
                                                        borderRadius={'lg'}
                                                    />
                                                    <Text>
                                                        {professional.specialty}
                                                    </Text>
                                                </Flex>
                                            </Td>
                                            <Td>{professional.email || 'Email não Cadastrado'}</Td>
                                            <Td>{professional.phone || 'Telefone não Cadastrado'}</Td>
                                            <Td>
                                                <Flex gap={4}>
                                                    <Tooltip placement="left" label={`Clique para visualizar o registro de ${name[0]}`} textAlign={"center"} p={2} bgColor={"black"} borderRadius={"lg"}>
                                                        <Button bgColor={"#1A936F"} _hover={{ bgColor: "#10644B" }} onClick={() => {
                                                            setSelectedProfessional(professional)
                                                            onOpenView()
                                                        }}>
                                                            <FaEye color="white" />
                                                        </Button>
                                                    </Tooltip>
                                                    <Tooltip placement="left" label={`Clique para editar o registro de ${name[0]}`} textAlign={"center"} p={2} bgColor={"black"} borderRadius={"lg"}>
                                                        <Button colorScheme="linkedin" onClick={() => {
                                                            setFileImage('')
                                                            setSelectedProfessional(professional)
                                                            onOpenUpdate()
                                                        }}>
                                                            <FaPen />
                                                        </Button>
                                                    </Tooltip>
                                                    <Tooltip placement="left" label={`Clique para Apagar o registro de ${name[0]}`} textAlign={"center"} p={2} bgColor={"black"} borderRadius={"lg"}>
                                                        <Button colorScheme="red" onClick={() => {
                                                            setSelectedProfessional(professional)
                                                            onOpenRemove()
                                                        }}>
                                                            <FaTrash />
                                                        </Button>
                                                    </Tooltip>
                                                </Flex>
                                            </Td>
                                        </Tr>
                                    )
                                })
                            }
                        </Tbody>
                    </Table >
                    <Flex justifyContent={'center'} alignItems={'center'} width={'100%'} p={4} pb={2}>
                        {renderpagesQuantity()}
                    </Flex>
                    <Flex justifyContent={'center'} alignItems={'center'} width={'100%'} p={2} pb={4}>
                        Usuários cadastrados no sistema de <b style={{ paddingLeft: '5px'}}>Umbaraco</b>
                    </Flex>
                </Flex>
                :
                <Flex p={"200px"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} width={"100%"}>
                    <Text>Nenhum dado correspondente.</Text>
                    <Text cursor={"pointer"} onClick={() => onOpenAdd()}>Tente cadastrar um novo <b>Profissional</b></Text>
                </Flex>
        )
    }

    return (
        <Flex gap={8} width={"100%"} flexDir={"column"} pt={5}>
            {
                selectedProfessional &&
                <ModalViewProfessional
                    selectedProfessional={selectedProfessional}
                    onCloseView={onCloseView}
                    isOpenView={isOpenView}
                />
            }

            <ModalAddProfessional
                fileImage={fileImage}
                setFileImage={setFileImage}
                onCloseAdd={onCloseAdd}
                isOpenAdd={isOpenAdd}
            />

            {
                selectedProfessional &&
                <ModalUpdateProfessional
                    fileImage={fileImage}
                    setFileImage={setFileImage}
                    onCloseUpdate={onCloseUpdate}
                    isOpenUpdate={isOpenUpdate}
                />
            }

            <ModalDeleteProfessional
                selectedProfessional={selectedProfessional}
                onCloseRemove={onCloseRemove}
                isOpenRemove={isOpenRemove}
            />

            <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Flex flexDir={"column"}>
                    <Text width={"100%"} fontWeight={"bold"} color={"#301E1A"}>
                        Profissionais da Saúde
                    </Text>
                    <Text width={"100%"} color={"#5A3C34"} fontSize={"14px"}>
                        Profissionais da Saúde cadastrado no sistema
                    </Text>
                </Flex>
                <Flex>
                    <Tooltip label={"Adicionar um novo profissional a plataforma"} placement={"left"} textAlign={"center"} p={2} bgColor={"black"} borderRadius={"lg"}>
                        <Button leftIcon={<FaPlus />} color={"white"} bgColor={"#1A936F"} _hover={{ bgColor: "#10644B" }} variant="solid" onClick={() => {
                            setFileImage('')
                            onOpenAdd()
                        }}>
                            Novo Profissional
                        </Button>
                    </Tooltip>
                </Flex>
            </Flex>

            <Card
                backgroundColor={"white"}
                borderRadius={"lg"}
                overflow={"hidden"}
                width={"100%"}
            >
                <TableSearchProfessionals />
                <TableListProfessionals />
                <Box w={"100%"} h={"5px"} bgColor={"#1A936F"} />
            </Card>
        </Flex>
    )
}

export default TableProfessionals