import { Box, Button, Card, Flex, FormControl, FormLabel, Input, Select, Table, TableCaption, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { FaPlus } from "react-icons/fa"


const health_professionals = [
    {
        name: "Ana Silva",
        status: false,
        cpf: "123.456.789-00",
        rg: "1234567-8",
        birth_date: "1985-03-15",
        email: "ana.silva@example.com",
        phone: "(11) 98765-4321",
        address: "Rua das Flores, 123, São Paulo, SP",
        cfm: "ABC12345",
        created_at: '',
        updated_at: ''
    },
    {
        name: "Carlos Oliveira",
        status: true,
        cpf: "987.654.321-00",
        rg: "9876543-2",
        birth_date: "1978-09-25",
        email: "carlos.oliveira@example.com",
        phone: "(21) 99999-8888",
        address: "Av. Principal, 456, Rio de Janeiro, RJ",
        cfm: "DEF67890",
        created_at: '',
        updated_at: ''
    },
    {
        name: "Maria Souza",
        status: true,
        cpf: "456.789.123-00",
        rg: "4567891-0",
        birth_date: "1990-07-10",
        email: "maria.souza@example.com",
        phone: "(31) 1234-5678",
        address: "Rua das Palmeiras, 789, Belo Horizonte, MG",
        cfm: "GHI54321",
        created_at: '',
        updated_at: ''
    },
    {
        name: "João Santos",
        status: false,
        cpf: "321.654.987-00",
        rg: "3216549-4",
        birth_date: "1982-05-20",
        email: "joao.santos@example.com",
        phone: "(41) 8765-4321",
        address: "Av. das Árvores, 101, Curitiba, PR",
        cfm: "JKL98765",
        created_at: '',
        updated_at: ''
    },
    {
        name: "Aline Ferreira",
        status: false,
        cpf: "654.321.987-00",
        rg: "6543219-8",
        birth_date: "1987-11-30",
        email: "aline.ferreira@example.com",
        phone: "(51) 3333-4444",
        address: "R. Principal, 789, Porto Alegre, RS",
        cfm: "MNO54321",
        created_at: '',
        updated_at: ''
    },
    {
        name: "Carlos Oliveira",
        status: true,
        cpf: "987.654.321-00",
        rg: "9876543-2",
        birth_date: "1978-09-25",
        email: "carlos.oliveira@example.com",
        phone: "(21) 99999-8888",
        address: "Av. Principal, 456, Rio de Janeiro, RJ",
        cfm: "DEF67890",
        created_at: '',
        updated_at: ''
    },
    {
        name: "Maria Souza",
        status: true,
        cpf: "456.789.123-00",
        rg: "4567891-0",
        birth_date: "1990-07-10",
        email: "maria.souza@example.com",
        phone: "(31) 1234-5678",
        address: "Rua das Palmeiras, 789, Belo Horizonte, MG",
        cfm: "GHI54321",
        created_at: '',
        updated_at: ''
    },
    {
        name: "João Santos",
        status: true,
        cpf: "321.654.987-00",
        rg: "3216549-4",
        birth_date: "1982-05-20",
        email: "joao.santos@example.com",
        phone: "(41) 8765-4321",
        address: "Av. das Árvores, 101, Curitiba, PR",
        cfm: "JKL98765",
        created_at: '',
        updated_at: ''
    },
    {
        name: "Aline Ferreira",
        status: false,
        cpf: "654.321.987-00",
        rg: "6543219-8",
        birth_date: "1987-11-30",
        email: "aline.ferreira@example.com",
        phone: "(51) 3333-4444",
        address: "R. Principal, 789, Porto Alegre, RS",
        cfm: "MNO54321",
        created_at: '',
        updated_at: ''
    },
    {
        name: "Pedro Almeida",
        status: true,
        cpf: "789.123.456-00",
        rg: "7891234-5",
        birth_date: "1983-08-05",
        email: "pedro.almeida@example.com",
        phone: "(62) 5555-6666",
        address: "Av. Central, 456, Goiânia, GO",
        cfm: "PQR12345",
        created_at: '',
        updated_at: ''
    },
    // more than 10
    // {
    //     name: "Luciana Lima",
    //     status: true,
    //     cpf: "135.246.789-00",
    //     rg: "1352467-8",
    //     birth_date: "1989-12-10",
    //     email: "luciana.lima@example.com",
    //     phone: "(32) 1111-2222",
    //     address: "Rua das Acácias, 456, Salvador, BA",
    //     cfm: "STU45678",
    //     created_at: '',
    //     updated_at: ''
    // },
    // {
    //     name: "Fernando Santos",
    //     status: true,
    //     cpf: "246.357.890-00",
    //     rg: "2463578-9",
    //     birth_date: "1976-04-20",
    //     email: "fernando.santos@example.com",
    //     phone: "(85) 4444-5555",
    //     address: "Av. dos Coqueiros, 789, Fortaleza, CE",
    //     cfm: "VWX98765",
    //     created_at: '',
    //     updated_at: ''
    // },
    // {
    //     name: "Juliana Oliveira",
    //     status: true,
    //     cpf: "357.468.901-00",
    //     rg: "3574689-0",
    //     birth_date: "1995-09-15",
    //     email: "juliana.oliveira@example.com",
    //     phone: "(62) 3333-2222",
    //     address: "Rua das Rosas, 101, Brasília, DF",
    //     cfm: "YZA12345",
    //     created_at: '',
    //     updated_at: ''
    // },
    // {
    //     name: "Rafaela Martins",
    //     status: true,
    //     cpf: "468.579.012-00",
    //     rg: "4685790-1",
    //     birth_date: "1980-11-25",
    //     email: "rafaela.martins@example.com",
    //     phone: "(91) 6666-7777",
    //     address: "R. das Oliveiras, 321, Belém, PA",
    //     cfm: "BCD23456",
    //     created_at: '',
    //     updated_at: ''
    // },
    // {
    //     name: "Daniel Pereira",
    //     status: false,
    //     cpf: "579.680.123-00",
    //     rg: "5796801-2",
    //     birth_date: "1987-07-05",
    //     email: "daniel.pereira@example.com",
    //     phone: "(67) 8888-9999",
    //     address: "Av. das Palmeiras, 987, Campo Grande, MS",
    //     cfm: "EFG34567",
    //     created_at: '',
    //     updated_at: ''
    // }
];

const Index = () => {

    const applyIsActive = (status: boolean) => {
        return (
            status
                ?
                <Box borderRadius={'100px'} p={'0.5px'} px={2} bgColor={'#b1e9d0'} border={'1px solid #25a47c'} >
                    <Text textAlign={'center'} fontSize={'12px'} color={'#25a47c'} fontWeight={'bold'} letterSpacing={'1.2px'}>Ativo</Text>
                </Box>
                :
                <Box borderRadius={'100px'} p={'0.5px'} px={2} bgColor={'#ffc9c9'} border={'1px solid #e01f1f'} >
                    <Text textAlign={'center'} fontSize={'12px'} color={'#e01f1f'} fontWeight={'bold'} letterSpacing={'1.2px'}>Inativo</Text>
                </Box>
        )
    }


    return (
        <Flex gap={8} width={"100%"} flexDir={"column"} pt={5}>
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
                    <Button leftIcon={<FaPlus />} bgColor={"#1A936F"} color={"white"} _hover={{ bgColor: "#10644B" }} variant="solid">
                        Novo Profissional
                    </Button>
                </Flex>
            </Flex>
            {/* List */}
            <Card
                width={"100%"}
                backgroundColor={"white"}
                borderRadius={"lg"}
                overflow={"hidden"}
            >
                {/* Search */}
                <Flex width={"100%"} p={4} alignItems={"flex-end"} justifyContent={"space-between"} bgColor={"#1A936F"}>
                    <Flex width={"80%"} gap={4}>
                        <Flex
                            flexDir={"column"}
                            w={"60%"}
                        >
                            <FormControl isRequired>
                                <FormLabel fontSize={"14px"} color={"white"}>Dados do usuário cadastrado</FormLabel>
                                <Input placeholder="Example: Eleonor Rigby" bgColor={"white"} />
                            </FormControl>
                        </Flex>
                        <Flex
                            flexDir={"column"}
                            w={"20%"}
                        >
                            <FormControl isRequired>
                                <FormLabel fontSize={"14px"} color={"white"}>Status</FormLabel>
                                <Select placeholder="Selecione..." bgColor={"white"} >
                                    <option value={"true"}>Ativo</option>
                                    <option value={"false"}>Inativo</option>
                                </Select>
                            </FormControl>
                        </Flex>
                        <Flex
                            flexDir={"column"}
                            w={"20%"}
                        >
                            <FormControl isRequired>
                                <FormLabel fontSize={"14px"} color={"white"}>Categoria</FormLabel>
                                <Select placeholder="Selecione..." bgColor={"white"}>
                                    <option value="Cirurgia Geral">Cirurgia Geral</option>
                                    <option value="Clínica Médica">Clínica Médica</option>
                                    <option value="Ginecologia e Obstetrícia">Ginecologia e Obstetrícia</option>
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
                        <Button>Limpar</Button>
                        <Button colorScheme="linkedin">Buscar</Button>
                    </Flex>
                </Flex>
                {/* Tabela */}
                <Table>
                    <TableCaption>
                        Usuários cadastrados no sistema de <b>Umbaraco</b>
                    </TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Nome</Th>
                            <Th>Status</Th>
                            <Th>CPF</Th>
                            <Th>RG</Th>
                            <Th>Data de nascimento</Th>
                            <Th>Email</Th>
                            <Th>Telefone</Th>
                            <Th>Endereço</Th>
                            <Th>CFM</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            health_professionals.map((professional, index) => {
                                return (
                                    <Tr key={index}>
                                        <Td>{professional.name}</Td>
                                        <Td>{applyIsActive(professional.status)}</Td>
                                        <Td>{professional.cpf}</Td>
                                        <Td>{professional.rg}</Td>
                                        <Td>{professional.birth_date}</Td>
                                        <Td>{professional.email}</Td>
                                        <Td>{professional.phone}</Td>
                                        <Td>{professional.address}</Td>
                                        <Td>{professional.cfm}</Td>
                                    </Tr>
                                )
                            })
                        }
                    </Tbody>
                </Table>
                <Box w={'100%'} h={'5px'} bgColor={"#1A936F"}></Box>
            </Card>
        </Flex>
    )
}

export default Index