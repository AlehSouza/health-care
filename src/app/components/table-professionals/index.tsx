"use client"

import { Box, Button, Card, Flex, FormControl, FormLabel, Input, Select, Table, TableCaption, Tbody, Td, Text, Th, Thead, Tooltip, Tr, useDisclosure, useToast } from "@chakra-ui/react"
import { FaExclamationTriangle, FaPen, FaPlus, FaSearch, FaTrash, FaUserEdit, FaUserPlus } from "react-icons/fa"
import { useForm } from "react-hook-form";
import { Modal } from "..";
import { useCallback, useState } from "react";
import { useProfessional } from "@/contexts/professionalsContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import InputEnhanced from "../input-enhanced";
import SelectEnhanced from "../select-enhanced";
import zipCode from "@/app/helpers/zipCode";

interface Professional {
    id?: number,
    name?: string,
    status?: boolean | string,
    cpf?: string,
    rg?: string,
    birth_date?: string,
    email?: string,
    phone?: string,
    address?: string,
    street?: string,
    number?: string,
    neighborhood?: string,
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

        const schema = yup.object().shape({
            name: yup.string().required("O campo nome é obrigatório"),
            cpf: yup.string().required("O campo CPF é obrigatório"),
            cfm: yup.string().max(7).required("O campo CFM é obrigatório"),
            rg: yup.string().max(8).required("O campo RG é obrigatório"),
            birth_date: yup.string().required("O campo Data de Nascimento é obrigatório"),
            email: yup.string().test('emailOrPhoneRequired', 'Preencha o Email caso não possuir nenhum telefone', function (value) {
                const { phone } = this.parent;
                return !!(value || phone);
            }).email('O Email deve ser válido'),
            phone: yup.string().test('emailOrPhoneRequired', 'Preencha o telefone caso não possua nenhum email', function (value) {
                const { email } = this.parent;
                return !!(value || email);
            }),
            cep: yup.string().required("O campo CEP é obrigatório"),
            street: yup.string().required("O campo Rua é obrigatório"),
            number: yup.string().required("O campo Número é obrigatório"),
            neighborhood: yup.string().required("O campo Número é obrigatório"),
            uf: yup.string().required("O campo EStado é obrigatório"),
            city: yup.string().required("O campo Cidade é obrigatório"),
            occupation: yup.string().required("O campo Ocupação é obrigatório"),
            status: yup.string().required("O campo Status é obrigatório"),
        }).required();

        const {
            register,
            handleSubmit,
            setValue,
            formState: { errors },
        } = useForm({ resolver: yupResolver(schema) });

        const handleZipCode = async ({ target }: any) => {
            if (target.value.length < 9) return
            try {
                const res = await zipCode(target)
                setValue('street', res.logradouro)
                setValue('neighborhood', res.bairro)
                setValue('city', res.localidade)
                setValue('uf', res.uf)
            } catch (err) {
                console.error(err)
            }
        }

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
            <Modal
                color={"#1A936F"}
                onClose={onCloseAdd}
                isOpen={isOpenAdd}
                title={
                    <Flex alignItems={'center'} gap={4}>
                        <FaUserPlus fontSize={'32px'} color="#1A936F" />
                        <Text noOfLines={1}>
                            Adicionando novo usuário
                        </Text>
                    </Flex>
                }
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Flex flexDir={"column"}>
                        <Flex flexDir={"column"}>
                            <InputEnhanced
                                {...register("name")}
                                error={errors.name}
                                isReq={true}
                                label={"Nome"}
                                placeholder="João da Silva"
                                textTransform={"capitalize"}
                                mask="defaultValue"
                            />
                        </Flex>

                        <Flex gap={4}>
                            <Flex flexDir={"column"} width={"100%"}>
                                <InputEnhanced
                                    label={"CPF"}
                                    {...register("cpf")}
                                    isReq={true}
                                    error={errors.cpf}
                                    placeholder="000.000.000-00"
                                    mask="cpf"
                                />
                            </Flex>
                            <Flex flexDir={"column"} width={"100%"}>
                                <InputEnhanced
                                    label={"RG"}
                                    {...register("rg")}
                                    isReq={true}
                                    error={errors.rg}
                                    placeholder="0000-0000-0"
                                    mask="defaultValue"
                                    maxLength={9}
                                />
                            </Flex>
                        </Flex>

                        <Flex gap={4}>
                            <Flex flexDir={"column"} width={"100%"}>
                                <InputEnhanced
                                    label={"CFM"}
                                    {...register("cfm")}
                                    isReq={true}
                                    error={errors.cfm}
                                    placeholder="ABL23984"
                                    mask="defaultValue"
                                    maxLength={8}
                                />
                            </Flex>
                            <Flex flexDir={"column"} width={"100%"}>
                                <InputEnhanced
                                    label={"Data de Nascimento"}
                                    {...register("birth_date")}
                                    isReq={true}
                                    error={errors.birth_date}
                                    placeholder="00/00/00"
                                    type="date"
                                    mask="defaultValue"
                                />
                            </Flex>
                        </Flex>

                        <Flex flexDir={"column"}>
                            <InputEnhanced
                                label={"Email"}
                                {...register("email")}
                                isReq={false}
                                error={errors.email}
                                placeholder="example@umbaraco.com.br"
                                width={"100%"}
                                mask="defaultValue"
                            />
                        </Flex>

                        <Flex gap={4}>
                            <Flex flexDir={"column"} width={"100%"}>
                                <InputEnhanced
                                    label={"Telefone"}
                                    {...register("phone")}
                                    isReq={false}
                                    error={errors.phone}
                                    placeholder="(11) 99999-9999"
                                    mask="phone"
                                />
                            </Flex>
                            <Flex flexDir={"column"} width={"100%"}>
                                <InputEnhanced
                                    label={"CEP"}
                                    mask="cep"
                                    isReq={true}
                                    {...register("cep")}
                                    error={errors.cep}
                                    placeholder="00000-000"
                                    onChange={(e) => {
                                        handleZipCode(e)
                                    }}
                                />
                            </Flex>
                        </Flex>

                        <Flex gap={4}>
                            <Flex flexDir={"column"} width={"100%"}>
                                <InputEnhanced
                                    label={"Bairro"}
                                    {...register("neighborhood")}
                                    isReq={true}
                                    error={errors.neighborhood}
                                    placeholder="Pq. Lorem Ipsum"
                                    mask="defaultValue"
                                />
                            </Flex>
                            <Flex flexDir={"column"} width={"100%"}>
                                <InputEnhanced
                                    label={"Número"}
                                    {...register("number")}
                                    isReq={true}
                                    error={errors.number}
                                    placeholder="123"
                                    mask="defaultValue"
                                />
                            </Flex>
                        </Flex>

                        <Flex gap={4}>
                            <Flex flexDir={"column"} width={"100%"}>
                                <InputEnhanced
                                    label={"Rua"}
                                    {...register("street")}
                                    isReq={true}
                                    error={errors.street}
                                    placeholder="Av. Paulista"
                                    mask="defaultValue"
                                />
                            </Flex>
                        </Flex>

                        <Flex gap={4}>
                            <Flex flexDir={"column"} width={"35%"}>
                                <SelectEnhanced
                                    isReq={true}
                                    {...register("uf")}
                                    error={errors.uf}
                                    label="Estado"
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
                                </SelectEnhanced>
                            </Flex>
                            <Flex flexDir={"column"} width={"100%"}>
                                <InputEnhanced
                                    label={"Cidade"}
                                    {...register("city")}
                                    isReq={true}
                                    error={errors.city}
                                    placeholder="São Paulo"
                                    mask="defaultValue"
                                />
                            </Flex>

                        </Flex>

                        <Flex gap={4}>
                            <Flex flexDir={"column"} width={"100%"}>
                                <SelectEnhanced
                                    isReq={true}
                                    {...register("occupation")}
                                    error={errors.occupation}
                                    label={"Ocupação"}
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
                                </SelectEnhanced>
                            </Flex>
                            <Flex flexDir={"column"} width={"35%"}>
                                <SelectEnhanced
                                    isReq={true}
                                    {...register("status")}
                                    error={errors.status}
                                    label={"Status"}
                                    placeholder="Selecione..."
                                >
                                    <option value="true">Ativo</option>
                                    <option value="false">Inativo</option>
                                </SelectEnhanced>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex justifyContent={"flex-end"} gap={4} py={4}>
                        <Button onClick={() => { onCloseAdd() }} colorScheme="red">Cancelar</Button>
                        <Button type="submit" colorScheme="green">Cadastrar</Button>
                    </Flex>
                </form>
            </Modal >
        )
    }

    // Modal Update
    const ModalUpdateProfessional = () => {
        const schema = yup.object().shape({
            name: yup.string().required("O campo nome é obrigatório"),
            cpf: yup.string().required("O campo CPF é obrigatório"),
            cfm: yup.string().required("O campo CFM é obrigatório"),
            rg: yup.string().required("O campo RG é obrigatório"),
            birth_date: yup.string().required("O campo Data de Nascimento é obrigatório"),
            email: yup.string().test('emailOrPhoneRequired', 'Preencha o Email caso não possuir nenhum telefone', function (value) {
                const { phone } = this.parent;
                return !!(value || phone);
            }).email('O Email deve ser válido'),
            phone: yup.string().test('emailOrPhoneRequired', 'Preencha o telefone caso não possua nenhum email', function (value) {
                const { email } = this.parent;
                return !!(value || email);
            }),
            cep: yup.string().required("O campo CEP é obrigatório"),
            street: yup.string().required("O campo Rua é obrigatório"),
            number: yup.string().required("O campo Número é obrigatório"),
            neighborhood: yup.string().required("O campo Número é obrigatório"),
            uf: yup.string().required("O campo EStado é obrigatório"),
            city: yup.string().required("O campo Cidade é obrigatório"),
            occupation: yup.string().required("O campo Ocupação é obrigatório"),
            status: yup.string().required("O campo Status é obrigatório"),
        }).required();

        const {
            register,
            handleSubmit,
            setValue,
            formState: { errors },
        } = useForm({ resolver: yupResolver(schema) });

        const handleZipCode = async ({ target }: any) => {
            if (target.value.length < 9) return
            try {
                const res = await zipCode(target)
                setValue('street', res.logradouro)
                setValue('neighborhood', res.bairro)
                setValue('city', res.localidade)
                setValue('uf', res.uf)
            } catch (err) {
                console.error(err)
            }
        }

        const handleUpdateProfessional = (e: Professional) => {
            const professionalToUpdate = professionals.find(professional => professional.id === selectedProfessional?.id);
            const draft = { ...e, status: e?.status?.toString() === "true" ? true : false }
            if (professionalToUpdate) {
                updateProfessional({ ...professionalToUpdate, ...draft });
            }
            onCloseUpdate()
        }

        return (
            <Modal
                color={"#FF9900"}
                onClose={onCloseUpdate}
                isOpen={isOpenUpdate}
                title={
                    <Flex alignItems={'center'} gap={4}>
                        <FaUserEdit fontSize={'32px'} color="#FF9900" />
                        <Text noOfLines={1}>
                            Editando profissional: {selectedProfessional?.name}
                        </Text>
                    </Flex>
                }
            >
                <form onSubmit={handleSubmit(handleUpdateProfessional)}>
                    <Flex flexDir={"column"}>
                        <Flex flexDir={"column"}>
                            <InputEnhanced
                                {...register("name")}
                                defaultValue={selectedProfessional?.name}
                                error={errors.name}
                                isReq={true}
                                label={"Nome"}
                                placeholder="João da Silva"
                                textTransform={"capitalize"}
                                mask="defaultValue"
                            />
                        </Flex>

                        <Flex gap={4}>
                            <Flex flexDir={"column"} width={"100%"}>
                                <InputEnhanced
                                    label={"CPF"}
                                    {...register("cpf")}
                                    defaultValue={selectedProfessional?.cpf}
                                    isReq={true}
                                    error={errors.cpf}
                                    placeholder="000.000.000-00"
                                    mask="cpf"
                                />
                            </Flex>
                            <Flex flexDir={"column"} width={"100%"}>
                                <InputEnhanced
                                    label={"RG"}
                                    {...register("rg")}
                                    defaultValue={selectedProfessional?.rg}
                                    isReq={true}
                                    error={errors.rg}
                                    placeholder="0000-0000-0"
                                    mask="defaultValue"
                                    maxLength={9}
                                />
                            </Flex>
                        </Flex>

                        <Flex gap={4}>
                            <Flex flexDir={"column"} width={"100%"}>
                                <InputEnhanced
                                    label={"CFM"}
                                    {...register("cfm")}
                                    defaultValue={selectedProfessional?.cfm}
                                    isReq={true}
                                    error={errors.cfm}
                                    placeholder="ABL23984"
                                    mask="defaultValue"
                                    maxLength={8}
                                />
                            </Flex>
                            <Flex flexDir={"column"} width={"100%"}>
                                <InputEnhanced
                                    label={"Data de Nascimento"}
                                    {...register("birth_date")}
                                    defaultValue={selectedProfessional?.birth_date}
                                    isReq={true}
                                    error={errors.birth_date}
                                    placeholder="00/00/00"
                                    type="date"
                                    mask="defaultValue"
                                />
                            </Flex>
                        </Flex>

                        <Flex flexDir={"column"}>
                            <InputEnhanced
                                label={"Email"}
                                {...register("email")}
                                defaultValue={selectedProfessional?.email}
                                isReq={false}
                                error={errors.email}
                                placeholder="example@umbaraco.com.br"
                                width={"100%"}
                                mask="defaultValue"
                            />
                        </Flex>

                        <Flex gap={4}>
                            <Flex flexDir={"column"} width={"100%"}>
                                <InputEnhanced
                                    label={"Telefone"}
                                    {...register("phone")}
                                    defaultValue={selectedProfessional?.phone}
                                    isReq={false}
                                    error={errors.phone}
                                    placeholder="(11) 99999-9999"
                                    mask="phone"
                                />
                            </Flex>
                            <Flex flexDir={"column"} width={"100%"}>
                                <InputEnhanced
                                    label={"CEP"}
                                    mask="cep"
                                    isReq={true}
                                    {...register("cep")}
                                    defaultValue={selectedProfessional?.cep}
                                    error={errors.cep}
                                    placeholder="00000-000"
                                    onChange={(e) => {
                                        handleZipCode(e)
                                    }}
                                />
                            </Flex>
                        </Flex>

                        <Flex gap={4}>
                            <Flex flexDir={"column"} width={"100%"}>
                                <InputEnhanced
                                    label={"Bairro"}
                                    {...register("neighborhood")}
                                    defaultValue={selectedProfessional?.neighborhood}
                                    isReq={true}
                                    error={errors.neighborhood}
                                    placeholder="Pq. Lorem Ipsum"
                                    mask="defaultValue"
                                />
                            </Flex>
                            <Flex flexDir={"column"} width={"100%"}>
                                <InputEnhanced
                                    label={"Número"}
                                    {...register("number")}
                                    defaultValue={selectedProfessional?.number}
                                    isReq={true}
                                    error={errors.number}
                                    placeholder="123"
                                    mask="defaultValue"
                                />
                            </Flex>
                        </Flex>

                        <Flex gap={4}>
                            <Flex flexDir={"column"} width={"100%"}>
                                <InputEnhanced
                                    label={"Rua"}
                                    {...register("street")}
                                    defaultValue={selectedProfessional?.street}
                                    isReq={true}
                                    error={errors.street}
                                    placeholder="Av. Paulista"
                                    mask="defaultValue"
                                />
                            </Flex>
                        </Flex>

                        <Flex gap={4}>
                            <Flex flexDir={"column"} width={"35%"}>
                                <SelectEnhanced
                                    isReq={true}
                                    {...register("uf")}
                                    defaultValue={selectedProfessional?.uf}
                                    error={errors.uf}
                                    label="Estado"
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
                                </SelectEnhanced>
                            </Flex>
                            <Flex flexDir={"column"} width={"100%"}>
                                <InputEnhanced
                                    label={"Cidade"}
                                    {...register("city")}
                                    defaultValue={selectedProfessional?.city}
                                    isReq={true}
                                    error={errors.city}
                                    placeholder="São Paulo"
                                    mask="defaultValue"
                                />
                            </Flex>

                        </Flex>

                        <Flex gap={4}>
                            <Flex flexDir={"column"} width={"100%"}>
                                <SelectEnhanced
                                    isReq={true}
                                    {...register("occupation")}
                                    defaultValue={selectedProfessional?.occupation}
                                    error={errors.occupation}
                                    label={"Ocupação"}
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
                                </SelectEnhanced>
                            </Flex>
                            <Flex flexDir={"column"} width={"35%"}>
                                <SelectEnhanced
                                    defaultValue={selectedProfessional?.status?.toString()}
                                    {...register("status")}
                                    placeholder="Selecione..."
                                    error={errors.status}
                                    label={"Status"}
                                    isReq={true}
                                >
                                    <option value="true">Ativo</option>
                                    <option value="false">Inativo</option>
                                </SelectEnhanced>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex justifyContent={"flex-end"} gap={4} py={4}>
                        <Button onClick={() => { onCloseUpdate() }} colorScheme="red">Cancelar</Button>
                        <Button type="submit" colorScheme="linkedin">Atualizar</Button>
                    </Flex>
                </form>
            </Modal >
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
                            <Text fontWeight={"bold"}>Tem certeza que deseja deletar {selectedProfessional?.name} ?</Text>
                            <Text py={4} fontSize={'14px'}>Tenha em mente que uma vez <b>deletado</b> os registros não retornaram a tabela, será necessário re-cadastrar o profissional no futuro.</Text>
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
                                        <Td>{professional.name || 'Não Cadastrado'}</Td>
                                        <Td>{professional.cfm || 'Não Cadastrado'}</Td>
                                        <Td>{professional.cpf || 'Não Cadastrado'}</Td>
                                        <Td>{professional.email || 'Não Cadastrado'}</Td>
                                        <Td>{professional.phone || 'Não Cadastrado'}</Td>
                                        <Td>{professional.occupation || 'Não Cadastrado'}</Td>
                                        <Td>{applyIsActive(professional.status) || 'Não Cadastrado'}</Td>
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