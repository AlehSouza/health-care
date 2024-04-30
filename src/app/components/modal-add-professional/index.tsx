
import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react"
import { FaFileImage, FaUserPlus } from "react-icons/fa"
import { useForm } from "react-hook-form"
import { Modal } from ".."
import { useProfessional } from "@/contexts/professionals.context"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import InputEnhanced from "../input-enhanced"
import SelectEnhanced from "../select-enhanced"
import zipCode from "@/services/zipcode.service"
import Image from "next/image"

type IModalAddProfessional = {
    fileImage: string | undefined | any,
    setFileImage: (file: string) => void | any,
    onCloseAdd: () => void | any,
    isOpenAdd: boolean | any,
}

const ModalAddProfessional = ({ fileImage, setFileImage, onCloseAdd, isOpenAdd }: IModalAddProfessional) => {
    const { professionals, filteredProfessionals, addProfessional, removeProfessional, updateProfessional, getProfessionalsFiltered, getProfessionalByCpf } = useProfessional()
    const toast = useToast()

    const handleFileChange = (event: any) => {
        const fileList = event.target.files
        if (fileList && fileList.length > 0) {
            const file = fileList[0]
            setFileImage(URL.createObjectURL(file))
        }
    }

    const schema = yup.object().shape({
        name: yup.string().required("O campo nome é obrigatório"),
        image: yup.string(),
        cpf: yup.string().required("O campo CPF é obrigatório"),
        service: yup.string().required("O campo Modalidade de Atendimento é obrigatório"),
        currencyHour: yup.string().required("O campo Valor por hora é obrigatório"),
        registerCfmCrm: yup.string().required("O campo CFM / CRM é obrigatório"),
        regionActing: yup.string().required("O campo Area de atuação é obrigatório"),
        rg: yup.string().required("O campo RG é obrigatório"),
        birthDate: yup.string().required("O campo Data de Nascimento é obrigatório"),
        email: yup.string().test('emailOrPhoneRequired', 'Preencha o Email caso não possuir nenhum telefone', function (value) {
            const { phone } = this.parent
            return !!(value || phone)
        }).email('O Email deve ser válido'),
        phone: yup.string().test('emailOrPhoneRequired', 'Preencha o telefone caso não possua nenhum email', function (value) {
            const { email } = this.parent
            return !!(value || email)
        }),
        cep: yup.string().required("O campo CEP é obrigatório"),
        street: yup.string().required("O campo Rua é obrigatório"),
        number: yup.string().required("O campo Número é obrigatório"),
        neighborhood: yup.string().required("O campo Número é obrigatório"),
        uf: yup.string().required("O campo EStado é obrigatório"),
        city: yup.string().required("O campo Cidade é obrigatório"),
        specialty: yup.string().required("O campo Especialidade é obrigatório"),
        status: yup.string().required("O campo Status é obrigatório"),
    }).required()

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) })

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
            image: fileImage
        }

        if (getProfessionalByCpf(e.cpf)) {
            toast({
                title: "Ops",
                description: "Parece que o CPF que você tentou cadastrar já existe na plataforma.",
                status: "error",
                duration: 9000,
                isClosable: true,
                position: "top-right"
            })
            return
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
            location={'inside'}
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
                <Flex flexDir={"column"} pt={2}>
                    <Flex width={"100%"} justifyContent={"left"} alignItems="center" flexDirection={'row'} bgColor={'#1A936F'} borderRadius={'lg'} p={6}>
                        <Box width={'150px'} height={'150px'} pos={'relative'} borderRadius={'100px'} overflow={'hidden'} property="true" border={'5px solid white'}>
                            <Image src={fileImage ? fileImage : 'https://firebasestorage.googleapis.com/v0/b/projects-cd0f3.appspot.com/o/umbaraco%2Fprofile_pic_man.png?alt=media&token=2a1c1256-c7d6-46ac-8488-28207f2bc760'} fill alt={`example icon`} />
                        </Box>
                        <Text color={'white'} fontWeight={'bold'} p={4} fontSize={'22px'}>
                            Umbaraco <br />
                            Profissional da Saúde 🥼
                        </Text>
                    </Flex>

                    <Text width={'auto'} fontWeight={'bold'} pt={4}>
                        Dados da conta
                    </Text>
                    <Flex width={"100%"} gap={4}>
                        <Flex flexDir={"column"} width={"100%"}>
                            <InputEnhanced
                                {...register("name")}
                                isReq={true}
                                label={"Nome"}
                                placeholder="João da Silva"
                                textTransform={"capitalize"}
                                mask="defaultValue"
                            />
                        </Flex>
                        <Flex flexDir={"column"} width={"20%"}>
                            <InputEnhanced
                                {...register("image")}
                                label={"Foto"}
                                pos={'absolute'}
                                top={'-1000px'}
                                left={'-1000px'}
                                mask="defaultValue"
                                type="file"
                                id="image"
                                onChange={(e) => { handleFileChange(e) }}
                            />
                            <Button type="button" my={1} bgColor={'#1A936F'} width={'100%'} zIndex={0} p={0} _hover={{ bgColor: "#10644B" }}>
                                <label htmlFor="image" style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    display: 'flex',
                                    width: '100%',
                                    padding: '8px',
                                    cursor: 'pointer',
                                }}>
                                    <FaFileImage color="white" />
                                </label>
                            </Button>
                        </Flex>
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
                    </Flex>
                    <Flex gap={4}>
                        <Flex flexDir={"column"} width={"100%"}>
                            <InputEnhanced
                                label={"CFM / CRM"}
                                {...register("registerCfmCrm")}
                                isReq={true}
                                error={errors.registerCfmCrm}
                                placeholder="ABL23984"
                                mask="defaultValue"
                                maxLength={8}
                            />
                        </Flex>
                        <Flex flexDir={"column"} width={"100%"}>
                            <InputEnhanced
                                label={"Data de Nascimento"}
                                {...register("birthDate")}
                                isReq={true}
                                error={errors.birthDate}
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

                    <Text width={'auto'} fontWeight={'bold'} pt={4}>
                        Endereço
                    </Text>
                    <Flex gap={4}>
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

                    <Text width={'auto'} fontWeight={'bold'} pt={4}>
                        Informações de Serviço
                    </Text>
                    <Flex gap={4}>
                        <Flex flexDir={"column"} width={"100%"}>
                            <InputEnhanced
                                isReq={true}
                                {...register("currencyHour")}
                                error={errors.currencyHour}
                                label={"Valor por hora"}
                                placeholder="R$ 2,99"
                                mask="currency"
                                maxLength={8}
                            />
                        </Flex>
                        <Flex flexDir={"column"} width={"100%"}>
                            <SelectEnhanced
                                isReq={true}
                                {...register("service")}
                                error={errors.service}
                                label={"Modalidade de Atendimento"}
                                placeholder="Selecione..."
                            >
                                <option value="Presencial">Presencial</option>
                                <option value="Consulta Online">Consulta Online</option>
                            </SelectEnhanced>
                        </Flex>
                    </Flex>
                    <Flex gap={4}>
                        <Flex flexDir={"column"} width={"100%"}>
                            <SelectEnhanced
                                isReq={true}
                                {...register("specialty")}
                                error={errors.specialty}
                                label={"Especialidade"}
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
                    <Flex flexDir={"column"} width={"100%"}>
                        <InputEnhanced
                            label={"Região de Atuação"}
                            {...register("regionActing")}
                            isReq={true}
                            error={errors.street}
                            placeholder="Ex: Zona Leste de São Paulo"
                            mask="defaultValue"
                        />
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
export default ModalAddProfessional