"use client"

import { Box, Button, Card, Flex, FormControl, FormLabel, Input, Select, Table, TableCaption, Tbody, Td, Text, Th, Thead, Tooltip, Tr, useDisclosure, useToast } from "@chakra-ui/react"
import { FaExclamationTriangle, FaPen, FaPlus, FaSearch, FaTrash } from "react-icons/fa"
import { useForm } from "react-hook-form";
import { Modal } from "..";
import { useCallback, useState } from "react";
import { useProfessional } from "@/contexts/professionalsContext";

interface Professional {
    id?: number,
    name?: string,
    status?: boolean,
    cpf?: string,
    rg?: string,
    birth_date?: string,
    email?: string,
    phone?: string,
    address?: string,
    street?: string,
    number?: string,
    cep?: string,
    uf?: string,
    city?: string,
    cfm?: string,
    occupation?: string,
    created_at?: string,
}

const Index = () => {
    const { professionals, filteredProfessionals, addProfessional, removeProfessional, updateProfessional, getFilteredProfessionas } = useProfessional()
    const [selectedProfessional, setSelectedProfessional] = useState<Professional>()
    const toast = useToast()

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

    // Modal Add
    const ModalAddProfessional = () => {

        const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm();

        const onSubmit = (e: any) => {
            const today = new Date()
            const year = today.getFullYear()
            const month = today.getMonth() + 1
            const day = today.getDate()

            const created_at = `${year}-${month}-${day}`
            const address = `${e.street}, ${e.number} - ${e.cep}`
            const id = professionals.length

            const draft = {
                ...e,
                address,
                created_at,
                id,
            }

            try {
                addProfessional(draft)
                toast({
                    title: "Sucesso",
                    description: "Um novo Profissional foi cadastrado.",
                    status: "success",
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
                onCloseAdd()
            }

        }

        return (
            <Modal color={"#1A936F"} onClose={onCloseAdd} isOpen={isOpenAdd} title="Cadastrar novo profissional">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl isRequired>
                        <Flex flexDir={"column"}>
                            <Flex flexDir={"column"}>
                                <FormLabel fontSize={"14px"} pt={2}>Nome</FormLabel>
                                <Input
                                    {...register("name")}
                                    placeholder="Examplo: João da Silva"
                                    width={"100%"}
                                    textTransform={"capitalize"}
                                />
                            </Flex>

                            <Flex gap={4}>
                                <Flex flexDir={"column"} width={"100%"}>
                                    <FormLabel fontSize={"14px"} pt={2}>CPF</FormLabel>
                                    <Input
                                        {...register("cpf")}
                                        placeholder="000.000.000-00"
                                    />
                                </Flex>
                                <Flex flexDir={"column"} width={"100%"}>
                                    <FormLabel fontSize={"14px"} pt={2}>CFM</FormLabel>
                                    <Input
                                        {...register("cfm")}
                                        placeholder="000000"
                                    />
                                </Flex>
                            </Flex>

                            <Flex gap={4}>
                                <Flex flexDir={"column"} width={"100%"}>
                                    <FormLabel fontSize={"14px"} pt={2}>RG</FormLabel>
                                    <Input
                                        {...register("rg")}
                                        placeholder="0000-0000-0"
                                    />
                                </Flex>
                                <Flex flexDir={"column"} width={"100%"}>
                                    <FormLabel fontSize={"14px"} pt={2}>Data de nascimento</FormLabel>
                                    <Input
                                        {...register("birth_date")}
                                        placeholder="00/00/00"
                                        type="date"
                                    />
                                </Flex>
                            </Flex>

                            <Flex flexDir={"column"}>
                                <FormLabel fontSize={"14px"} pt={2}>Email</FormLabel>
                                <Input
                                    {...register("email")}
                                    placeholder="example@umbaraco.com.br"
                                    width={"100%"}
                                />
                            </Flex>

                            <Flex gap={4}>
                                <Flex flexDir={"column"} width={"100%"}>
                                    <FormLabel fontSize={"14px"} pt={2}>Telefone</FormLabel>
                                    <Input
                                        {...register("phone")}
                                        placeholder="(11) 99999-9999"
                                    />
                                </Flex>
                                <Flex flexDir={"column"} width={"100%"}>
                                    <FormLabel fontSize={"14px"} pt={2}>CEP</FormLabel>
                                    <Input
                                        {...register("cep")}
                                        placeholder="00000-000"
                                    />
                                </Flex>
                            </Flex>

                            <Flex gap={4}>
                                <Flex flexDir={"column"} width={"100%"}>
                                    <FormLabel fontSize={"14px"} pt={2}>Rua</FormLabel>
                                    <Input
                                        {...register("street")}
                                        placeholder="Av. Paulista"
                                    />
                                </Flex>
                            </Flex>

                            <Flex gap={4}>
                                <Flex flexDir={"column"} width={"100%"}>
                                    <FormLabel fontSize={"14px"} pt={2}>Número</FormLabel>
                                    <Input
                                        {...register("number")}
                                        placeholder="123"
                                    />
                                </Flex>
                                <Flex flexDir={"column"} width={"100%"}>
                                    <FormLabel fontSize={"14px"} pt={2}>UF</FormLabel>
                                    <Select {...register("uf")} id="estado" name="estado">
                                        <option value="AC">Acre</option>
                                        <option value="AL">Alagoas</option>
                                        <option value="AP">Amapá</option>
                                        <option value="AM">Amazonas</option>
                                        <option value="BA">Bahia</option>
                                        <option value="CE">Ceará</option>
                                        <option value="DF">Distrito Federal</option>
                                        <option value="ES">Espírito Santo</option>
                                        <option value="GO">Goiás</option>
                                        <option value="MA">Maranhão</option>
                                        <option value="MT">Mato Grosso</option>
                                        <option value="MS">Mato Grosso do Sul</option>
                                        <option value="MG">Minas Gerais</option>
                                        <option value="PA">Pará</option>
                                        <option value="PB">Paraíba</option>
                                        <option value="PR">Paraná</option>
                                        <option value="PE">Pernambuco</option>
                                        <option value="PI">Piauí</option>
                                        <option value="RJ">Rio de Janeiro</option>
                                        <option value="RN">Rio Grande do Norte</option>
                                        <option value="RS">Rio Grande do Sul</option>
                                        <option value="RO">Rondônia</option>
                                        <option value="RR">Roraima</option>
                                        <option value="SC">Santa Catarina</option>
                                        <option value="SP">São Paulo</option>
                                        <option value="SE">Sergipe</option>
                                        <option value="TO">Tocantins</option>
                                        <option value="EX">Estrangeiro</option>
                                    </Select>
                                </Flex>
                                <Flex flexDir={"column"} width={"100%"}>
                                    <FormLabel fontSize={"14px"} pt={2}>Cidade</FormLabel>
                                    <Input
                                        {...register("city")}
                                        placeholder="São Paulo"
                                    />
                                </Flex>
                            </Flex>

                            <Flex gap={4}>
                                <Flex flexDir={"column"} width={"100%"}>
                                    <FormLabel fontSize={"14px"} pt={2}>Ocupação</FormLabel>
                                    <Select
                                        {...register("occupation")}
                                        placeholder="Selecione..."
                                    >
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
                                </Flex>
                                <Flex flexDir={"column"} width={"100%"}>
                                    <FormLabel fontSize={"14px"} pt={2}>Status</FormLabel>
                                    <Select
                                        {...register("status")}
                                        placeholder="Selecione..."
                                    >
                                        <option value="true">Ativo</option>
                                        <option value="false">Inativo</option>
                                    </Select>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex justifyContent={"flex-end"} gap={4} py={4}>
                            <Button onClick={() => { onCloseAdd() }}>Cancelar</Button>
                            <Button type="submit">Cadastrar</Button>
                        </Flex>
                    </FormControl>
                </form>
            </Modal>
        )
    }

    // Modal Delete
    const ModalDeleteProfessional = () => {
        const {
            handleSubmit,
            formState: { errors },
        } = useForm();

        const handleRemoveProfessional = () => {
            try {
                removeProfessional(selectedProfessional?.id!)
            } catch (e) {
                console.error(e)
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
                            <Text fontWeight={"bold"}>Tem certeza que deseja deletar este usuário?</Text>
                        </Flex>
                        <Flex justifyContent={"flex-end"} gap={4} py={4}>
                            <Button colorScheme="red" onClick={() => { onCloseRemove() }}>Cancelar</Button>
                            <Button type="submit" colorScheme="whatsapp">Confirmar</Button>
                        </Flex>
                    </FormControl>
                </form>
            </Modal>
        )
    }

    // Modal Update
    const ModalUpdateProfessional = () => {
        const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm();

        const handleUpdateProfessional = (e: Professional) => {
            const professionalToUpdate = professionals.find(professional => professional.id === selectedProfessional?.id);
            const draft = { ...e, status: e?.status?.toString() === "true" ? true : false }
            if (professionalToUpdate) {
                updateProfessional({ ...professionalToUpdate, ...draft });
            }
            onCloseUpdate()
        }

        return (
            <Modal color={"#1A936F"} onClose={onCloseUpdate} isOpen={isOpenUpdate} title="Editando um profissional">
                <form onSubmit={handleSubmit(handleUpdateProfessional)}>
                    <FormControl isRequired>
                        <Flex flexDir={"column"}>
                            <Flex flexDir={"column"}>
                                <FormLabel fontSize={"14px"} pt={2}>Nome</FormLabel>
                                <Input
                                    {...register("name")}
                                    defaultValue={selectedProfessional?.name}
                                    placeholder="Examplo: João da Silva"
                                    width={"100%"}
                                    textTransform={"capitalize"}
                                />
                            </Flex>

                            <Flex gap={4}>
                                <Flex flexDir={"column"} width={"100%"}>
                                    <FormLabel fontSize={"14px"} pt={2}>CPF</FormLabel>
                                    <Input
                                        {...register("cpf")}
                                        defaultValue={selectedProfessional?.cpf}
                                        placeholder="000.000.000-00"
                                    />
                                </Flex>
                                <Flex flexDir={"column"} width={"100%"}>
                                    <FormLabel fontSize={"14px"} pt={2}>CFM</FormLabel>
                                    <Input
                                        {...register("cfm")}
                                        defaultValue={selectedProfessional?.cfm}
                                        placeholder="000000"
                                    />
                                </Flex>
                            </Flex>

                            <Flex gap={4}>
                                <Flex flexDir={"column"} width={"100%"}>
                                    <FormLabel fontSize={"14px"} pt={2}>RG</FormLabel>
                                    <Input
                                        {...register("rg")}
                                        defaultValue={selectedProfessional?.rg}
                                        placeholder="0000-0000-0"
                                    />
                                </Flex>
                                <Flex flexDir={"column"} width={"100%"}>
                                    <FormLabel fontSize={"14px"} pt={2}>Data de nascimento</FormLabel>
                                    <Input
                                        {...register("birth_date")}
                                        defaultValue={selectedProfessional?.birth_date}
                                        placeholder="00/00/00"
                                        type="date"
                                    />
                                </Flex>
                            </Flex>

                            <Flex flexDir={"column"}>
                                <FormLabel fontSize={"14px"} pt={2}>Email</FormLabel>
                                <Input
                                    {...register("email")}
                                    defaultValue={selectedProfessional?.email}
                                    placeholder="example@umbaraco.com.br"
                                    width={"100%"}
                                />
                            </Flex>

                            <Flex gap={4}>
                                <Flex flexDir={"column"} width={"100%"}>
                                    <FormLabel fontSize={"14px"} pt={2}>Telefone</FormLabel>
                                    <Input
                                        {...register("phone")}
                                        defaultValue={selectedProfessional?.phone}
                                        placeholder="(11) 99999-9999"
                                    />
                                </Flex>
                                <Flex flexDir={"column"} width={"100%"}>
                                    <FormLabel fontSize={"14px"} pt={2}>CEP</FormLabel>
                                    <Input
                                        {...register("cep")}
                                        defaultValue={selectedProfessional?.cep}
                                        placeholder="00000-000"
                                    />
                                </Flex>
                            </Flex>

                            <Flex gap={4}>
                                <Flex flexDir={"column"} width={"100%"}>
                                    <FormLabel fontSize={"14px"} pt={2}>Rua</FormLabel>
                                    <Input
                                        {...register("street")}
                                        defaultValue={selectedProfessional?.street}
                                        placeholder="Av. Paulista"
                                    />
                                </Flex>
                            </Flex>

                            <Flex gap={4}>
                                <Flex flexDir={"column"} width={"100%"}>
                                    <FormLabel fontSize={"14px"} pt={2}>Número</FormLabel>
                                    <Input
                                        {...register("number")}
                                        defaultValue={selectedProfessional?.number}
                                        placeholder="123"
                                    />
                                </Flex>
                                <Flex flexDir={"column"} width={"100%"}>
                                    <FormLabel fontSize={"14px"} pt={2}>UF</FormLabel>
                                    <Select
                                        {...register("uf")}
                                        defaultValue={selectedProfessional?.uf}
                                        placeholder="Selecione..."
                                    >
                                        <option value="AC">Acre</option>
                                        <option value="AL">Alagoas</option>
                                        <option value="AP">Amapá</option>
                                        <option value="AM">Amazonas</option>
                                        <option value="BA">Bahia</option>
                                        <option value="CE">Ceará</option>
                                        <option value="DF">Distrito Federal</option>
                                        <option value="ES">Espírito Santo</option>
                                        <option value="GO">Goiás</option>
                                        <option value="MA">Maranhão</option>
                                        <option value="MT">Mato Grosso</option>
                                        <option value="MS">Mato Grosso do Sul</option>
                                        <option value="MG">Minas Gerais</option>
                                        <option value="PA">Pará</option>
                                        <option value="PB">Paraíba</option>
                                        <option value="PR">Paraná</option>
                                        <option value="PE">Pernambuco</option>
                                        <option value="PI">Piauí</option>
                                        <option value="RJ">Rio de Janeiro</option>
                                        <option value="RN">Rio Grande do Norte</option>
                                        <option value="RS">Rio Grande do Sul</option>
                                        <option value="RO">Rondônia</option>
                                        <option value="RR">Roraima</option>
                                        <option value="SC">Santa Catarina</option>
                                        <option value="SP">São Paulo</option>
                                        <option value="SE">Sergipe</option>
                                        <option value="TO">Tocantins</option>
                                        <option value="EX">Estrangeiro</option>
                                    </Select>
                                </Flex>
                                <Flex flexDir={"column"} width={"100%"}>
                                    <FormLabel fontSize={"14px"} pt={2}>Cidade</FormLabel>
                                    <Input
                                        {...register("city")}
                                        defaultValue={selectedProfessional?.city}
                                        placeholder="São Paulo"
                                    />
                                </Flex>
                            </Flex>

                            <Flex gap={4}>
                                <Flex flexDir={"column"} width={"100%"}>
                                    <FormLabel fontSize={"14px"} pt={2}>Ocupação</FormLabel>
                                    <Select
                                        {...register("occupation")}
                                        defaultValue={selectedProfessional?.occupation}
                                        placeholder="Selecione..."
                                    >
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
                                </Flex>
                                <Flex flexDir={"column"} width={"100%"}>
                                    <FormLabel fontSize={"14px"} pt={2}>Status</FormLabel>
                                    <Select
                                        {...register("status")}
                                        defaultValue={`${selectedProfessional?.status}`}
                                        placeholder="Selecione..."
                                    >
                                        <option value="true">Ativo</option>
                                        <option value="false">Inativo</option>
                                    </Select>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex justifyContent={"flex-end"} gap={4} py={4}>
                            <Button onClick={() => { onCloseUpdate() }} colorScheme="red">Cancelar</Button>
                            <Button type="submit" colorScheme="whatsapp">Atualizar Dados</Button>
                        </Flex>
                    </FormControl>
                </form>
            </Modal>
        )
    }

    // Search
    const TableSearchProfessionals = () => {
        const {
            register,
            reset,
            handleSubmit,
            formState: { errors },
        } = useForm({ mode: "onChange" })

        const onSubmit = (e?: { name?: string; }) => {
            try {
                const draft = {
                    ...e,
                    name: e?.name?.trim()
                }
                // @ts-ignore
                getFilteredProfessionas(draft)
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
                                <FormLabel fontSize={"14px"} color={"white"}>Ocupação</FormLabel>
                                <Select {...register("occupation")} placeholder="Selecione..." bgColor={"white"}>
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

    // List
    const TableListProfessionals = useCallback(() => {

        const applyIsActive = (status: boolean) => {
            return (
                status
                    ?
                    <Box borderRadius={"100px"} p={1} bgColor={"#b1e9d0"} border={"1px solid #25a47c"} >
                        <Text textAlign={"center"} fontSize={"12px"} color={"greenbrown"} fontWeight={"bold"} letterSpacing={"1.2px"}>Ativo</Text>
                    </Box>
                    :
                    <Box borderRadius={"100px"} p={1} bgColor={"#ffc9c9"} border={"1px solid #e01f1f"} >
                        <Text textAlign={"center"} fontSize={"12px"} color={"#e01f1f"} fontWeight={"bold"} letterSpacing={"1.2px"}>Inativo</Text>
                    </Box>
            )
        }

        return (
            filteredProfessionals.length > 0
                ?
                <Table>
                    <TableCaption>
                        Usuários cadastrados no sistema de <b>Umbaraco</b>
                    </TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Nome</Th>
                            <Th>CFM</Th>
                            <Th>CPF</Th>
                            <Th>Email</Th>
                            <Th>Telefone</Th>
                            <Th>Ocupação</Th>
                            <Th>Status</Th>
                            <Th>Ações</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            filteredProfessionals?.map((professional: any, index: number) => {
                                const name = professional.name.split(" ")

                                return (
                                    <Tr key={index}>
                                        <Td>{professional.name}</Td>
                                        <Td>{professional.cfm}</Td>
                                        <Td>{professional.cpf}</Td>
                                        <Td>{professional.email}</Td>
                                        <Td>{professional.phone}</Td>
                                        <Td>{professional.occupation}</Td>
                                        <Td>{applyIsActive(professional.status)}</Td>
                                        <Td>
                                            <Flex gap={4}>
                                                <Tooltip placement="left" label={`Clique para editar o registro de ${name[0]}`} textAlign={"center"} p={2} bgColor={"black"} borderRadius={"lg"}>
                                                    <Button colorScheme="linkedin" onClick={() => {
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
                :
                <Flex p={"200px"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} width={"100%"}>
                    <Text>Nenhum dado correspondente.</Text>
                    <Text cursor={"pointer"} onClick={() => onOpenAdd()}>Tente cadastrar um novo <b>Profissional</b></Text>
                </Flex>
        )
    }, [filteredProfessionals])

    // Index
    return (
        <Flex gap={8} width={"100%"} flexDir={"column"} pt={5}>
            <ModalAddProfessional />
            <ModalDeleteProfessional />
            <ModalUpdateProfessional />
            {/* Actions */}
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
                        <Button leftIcon={<FaPlus />} bgColor={"#1A936F"} color={"white"} _hover={{ bgColor: "#10644B" }} variant="solid" onClick={() => { onOpenAdd() }}>
                            Novo Profissional
                        </Button>
                    </Tooltip>
                </Flex>
            </Flex>
            <Card
                width={"100%"}
                backgroundColor={"white"}
                borderRadius={"lg"}
                overflow={"hidden"}
            >
                <TableSearchProfessionals />
                <TableListProfessionals />
                <Box w={"100%"} h={"5px"} bgColor={"#1A936F"}></Box>
            </Card>
        </Flex>
    )
}

export default Index