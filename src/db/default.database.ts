const defaultDatabase = [
    {
        "id": 0,
        "image": "https://firebasestorage.googleapis.com/v0/b/projects-cd0f3.appspot.com/o/umbaraco%2Fprofile_pic_man.png?alt=media&token=2a1c1256-c7d6-46ac-8488-28207f2bc760",
        "name": "Alexandre Souza",
        "cpf": "104.444.076-77",
        "registerCfmCrm": "BTC54321",
        "rg": "744",
        "birthDate": "2024-04-09",
        "email": "alexandrehg2001@gmail.com",
        "phone": "(11) 98367-4446",
        "cep": "08.150-020",
        "street": "Rua José pessota",
        "number": "593",
        "neighborhood": "Birimbinhas",
        "uf": "AC",
        "city": "SÃO PAULO",
        "specialty": "Ortopedista",
        "currencyHour": "1,99",
        "service": "Consulta Online",
        "regionActing": "Itaquera",
        "status": true,
        "address": "Rua José pessota, 593 - 08.150-020",
        "created_at": "2024-4-29",

    },
    {
        "id": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/projects-cd0f3.appspot.com/o/umbaraco%2Fprofile_pic_man.png?alt=media&token=2a1c1256-c7d6-46ac-8488-28207f2bc760",
        "name": "João Oliveira",
        "status": false,
        "cpf": "987.654.321-00",
        "rg": "9876543-2",
        "birthDate": "1990-10-20",
        "email": "joao.oliveira@example.com",
        "phone": "(21) 12345-6789",
        "address": "Avenida Principal, 456, Rio de Janeiro, RJ",
        "street": "Avenida Principal",
        "number": "456",
        "neighborhood": "Vizinhas",
        "cep": "22010-010",
        "uf": "RJ",
        "city": "Rio de Janeiro",
        "registerCfmCrm": "XYZ54321",
        "specialty": "Ginecologia e Obstetrícia",
        "currencyHour": "1,99",
        "service": "Consulta Online",
        "regionActing": "Estudantes",
        "created_at": "2024-03-28",
    },
    {
        "id": 2,
        "image": "https://firebasestorage.googleapis.com/v0/b/projects-cd0f3.appspot.com/o/umbaraco%2Fprofile_pic_woman.png?alt=media&token=7b2826e0-2319-41c4-b05b-62274855d793",
        "name": "Maria Santos",
        "status": true,
        "cpf": "555.444.333-22",
        "rg": "5554443-4",
        "birthDate": "1976-07-25",
        "email": "maria.santos@example.com",
        "phone": "(31) 98765-4321",
        "address": "Rua das Palmeiras, 789, Belo Horizonte, MG",
        "street": "Rua das Palmeiras",
        "number": "789",
        "neighborhood": "Bombinhas",
        "cep": "30140-040",
        "uf": "MG",
        "city": "Belo Horizonte",
        "registerCfmCrm": "DEF67890",
        "specialty": "Clínica Médica",
        "currencyHour": "1,99",
        "service": "Consulta Online",
        "regionActing": "Mogi das Cruzes",
        "created_at": "2024-03-28",
    },

    {
        "id": 3,
        "image": "https://firebasestorage.googleapis.com/v0/b/projects-cd0f3.appspot.com/o/umbaraco%2Fprofile_pic_man.png?alt=media&token=2a1c1256-c7d6-46ac-8488-28207f2bc760",
        "name": "Fernanda Lima",
        "status": true,
        "cpf": "999.888.777-66",
        "rg": "9998887-6",
        "birthDate": "1988-12-05",
        "email": "fernanda.lima@example.com",
        "phone": "(41) 12345-6789",
        "address": "Avenida das Águas, 321, Curitiba, PR",
        "street": "Avenida das Águas",
        "number": "321",
        "neighborhood": "Limeirinhas",
        "cep": "80010-010",
        "uf": "PR",
        "city": "Curitiba",
        "registerCfmCrm": "JKL54321",
        "specialty": "Pediatria",
        "currencyHour": "1,99",
        "service": "Consulta Online",
        "regionActing": "Itaim Bibi",
        "created_at": "2024-03-28",
    },
    {
        "id": 4,
        "image": "https://firebasestorage.googleapis.com/v0/b/projects-cd0f3.appspot.com/o/umbaraco%2Fprofile_pic_woman.png?alt=media&token=7b2826e0-2319-41c4-b05b-62274855d793",
        "name": "Carlos Souza",
        "status": false,
        "cpf": "111.222.333-44",
        "rg": "1112223-4",
        "birthDate": "1980-05-10",
        "email": "carlos.souza@example.com",
        "phone": "(51) 98765-4321",
        "address": "Rua dos Pinheiros, 567, Porto Alegre, RS",
        "street": "Rua dos Pinheiros",
        "number": "567",
        "neighborhood": "Cajuzinhos",
        "cep": "90035-001",
        "uf": "RS",
        "city": "Porto Alegre",
        "registerCfmCrm": "GHI67890",
        "specialty": "Dermatologia",
        "currencyHour": "1,99",
        "service": "Consulta Online",
        "regionActing": "Capão Redondo",
        "created_at": "2024-03-28",
    },
    {
        "id": 5,
        "image": "https://firebasestorage.googleapis.com/v0/b/projects-cd0f3.appspot.com/o/umbaraco%2Fprofile_pic_woman.png?alt=media&token=7b2826e0-2319-41c4-b05b-62274855d793",
        "name": "Pedro Oliveira",
        "status": false,
        "cpf": "777.888.999-00",
        "rg": "7778889-0",
        "birthDate": "1975-08-22",
        "email": "pedro.oliveira@example.com",
        "phone": "(81) 98765-4321",
        "address": "Rua das Oliveiras, 789, Recife, PE",
        "street": "Rua das Oliveiras",
        "number": "789",
        "neighborhood": "Baratinho",
        "cep": "50050-100",
        "uf": "PE",
        "city": "Recife",
        "registerCfmCrm": "MNO12345",
        "specialty": "Psiquiatria",
        "currencyHour": "1,99",
        "service": "Consulta Online",
        "regionActing": "Sacomã",
        "created_at": "2024-03-28",
    },
    {
        "id": 6,
        "image": "https://firebasestorage.googleapis.com/v0/b/projects-cd0f3.appspot.com/o/umbaraco%2Fprofile_pic_woman.png?alt=media&token=7b2826e0-2319-41c4-b05b-62274855d793",
        "name": "Amanda Ferreira",
        "status": true,
        "cpf": "666.555.444-33",
        "rg": "6665554-3",
        "birthDate": "1992-04-18",
        "email": "amanda.ferreira@example.com",
        "phone": "(62) 12345-6789",
        "address": "Rua dos Coqueiros, 456, Goiânia, GO",
        "street": "Rua dos Coqueiros",
        "number": "456",
        "neighborhood": "Cocazero",
        "cep": "74000-010",
        "uf": "GO",
        "city": "Goiânia",
        "registerCfmCrm": "PQR56789",
        "specialty": "Endocrinologia",
        "currencyHour": "1,99",
        "service": "Consulta Online",
        "regionActing": "Alphaville",
        "created_at": "2024-03-28",
    },
    {
        "id": 7,
        "image": "https://firebasestorage.googleapis.com/v0/b/projects-cd0f3.appspot.com/o/umbaraco%2Fprofile_pic_woman.png?alt=media&token=7b2826e0-2319-41c4-b05b-62274855d793",
        "name": "Lucas Oliveira",
        "status": true,
        "cpf": "222.333.444-55",
        "rg": "2223334-5",
        "birthDate": "1987-11-25",
        "email": "lucas.oliveira@example.com",
        "phone": "(85) 98765-4321",
        "address": "Rua das Palmeiras, 123, Fortaleza, CE",
        "street": "Rua das Palmeiras",
        "number": "123",
        "neighborhood": "Panamericano",
        "cep": "60010-010",
        "uf": "CE",
        "city": "Fortaleza",
        "registerCfmCrm": "STU67890",
        "specialty": "Gastroenterologia",
        "currencyHour": "1,99",
        "service": "Consulta Online",
        "regionActing": "Jd. Robru",
        "created_at": "2024-03-28",
    },
    {
        "id": 8,
        "image": "https://firebasestorage.googleapis.com/v0/b/projects-cd0f3.appspot.com/o/umbaraco%2Fprofile_pic_woman.png?alt=media&token=7b2826e0-2319-41c4-b05b-62274855d793",
        "name": "Juliana Costa",
        "status": false,
        "cpf": "888.777.666-55",
        "rg": "8887776-5",
        "birthDate": "1984-06-30",
        "email": "juliana.costa@example.com",
        "phone": "(67) 12345-6789",
        "address": "Avenida Central, 789, Campo Grande, MS",
        "street": "Avenida Central",
        "number": "789",
        "neighborhood": "Ayknowyou",
        "cep": "79000-010",
        "uf": "MS",
        "city": "Campo Grande",
        "registerCfmCrm": "UVW12345",
        "specialty": "Medicina de Emergência",
        "currencyHour": "1,99",
        "service": "Consulta Online",
        "regionActing": "Tatuapé",
        "created_at": "2024-03-28",
    },
    {
        "id": 9,
        "image": "https://firebasestorage.googleapis.com/v0/b/projects-cd0f3.appspot.com/o/umbaraco%2Fprofile_pic_man.png?alt=media&token=2a1c1256-c7d6-46ac-8488-28207f2bc760",
        "name": "Ana Silva",
        "status": false,
        "cpf": "123.456.789-00",
        "rg": "1234567-8",
        "birthDate": "1985-03-15",
        "email": "ana.silva@example.com",
        "phone": "(11) 98765-4321",
        "address": "Rua das Flores, 123, São Paulo, SP",
        "street": "Rua das Flores",
        "number": "123",
        "neighborhood": "Star Wars",
        "cep": "17450-081",
        "uf": "SP",
        "city": "São Paulo",
        "registerCfmCrm": "ABC12345",
        "specialty": "Cirurgia Geral",
        "currencyHour": "1,99",
        "service": "Consulta Online",
        "regionActing": "Guarulhos",
        "created_at": "2024-03-28",
    },
    {
        "id": 10,
        "image": "https://firebasestorage.googleapis.com/v0/b/projects-cd0f3.appspot.com/o/umbaraco%2Fprofile_pic_man.png?alt=media&token=2a1c1256-c7d6-46ac-8488-28207f2bc760",
        "name": "Rafael Silva",
        "status": true,
        "cpf": "222.333.444-55",
        "rg": "2223334-5",
        "birthDate": "1990-05-12",
        "email": "rafael.silva@example.com",
        "phone": "(47) 98765-4321",
        "address": "Avenida das Palmeiras, 789, Florianópolis, SC",
        "street": "Avenida das Palmeiras",
        "number": "789",
        "neighborhood": "Paradiso",
        "cep": "88010-010",
        "uf": "SC",
        "city": "Florianópolis",
        "registerCfmCrm": "FGH12345",
        "specialty": "Psiquiatria",
        "currencyHour": "1,99",
        "service": "Consulta Online",
        "regionActing": "Centro",
        "created_at": "2024-03-30"
    },
    {
        "id": 11,
        "image": "https://firebasestorage.googleapis.com/v0/b/projects-cd0f3.appspot.com/o/umbaraco%2Fprofile_pic_woman.png?alt=media&token=7b2826e0-2319-41c4-b05b-62274855d793",
        "name": "Camila Santos",
        "status": false,
        "cpf": "333.444.555-66",
        "rg": "3334445-6",
        "birthDate": "1983-08-20",
        "email": "camila.santos@example.com",
        "phone": "(21) 98765-4321",
        "address": "Rua dos Girassóis, 456, Niterói, RJ",
        "street": "Rua dos Girassóis",
        "number": "456",
        "neighborhood": "Jardim das Flores",
        "cep": "24000-010",
        "uf": "RJ",
        "city": "Niterói",
        "registerCfmCrm": "IJK67890",
        "specialty": "Psiquiatria",
        "currencyHour": "1,99",
        "service": "Consulta Online",
        "regionActing": "Ipanema",
        "created_at": "2024-03-30"
    },
    {
        "id": 12,
        "image": "https://firebasestorage.googleapis.com/v0/b/projects-cd0f3.appspot.com/o/umbaraco%2Fprofile_pic_man.png?alt=media&token=2a1c1256-c7d6-46ac-8488-28207f2bc760",
        "name": "Marcelo Oliveira",
        "status": true,
        "cpf": "444.555.666-77",
        "rg": "4445556-7",
        "birthDate": "1970-12-30",
        "email": "marcelo.oliveira@example.com",
        "phone": "(61) 98765-4321",
        "address": "Rua das Castanheiras, 789, Brasília, DF",
        "street": "Rua das Castanheiras",
        "number": "789",
        "neighborhood": "Vila Planalto",
        "cep": "70000-010",
        "uf": "DF",
        "city": "Brasília",
        "registerCfmCrm": "LMN12345",
        "specialty": "Psiquiatria",
        "currencyHour": "1,99",
        "service": "Consulta Online",
        "regionActing": "Asa Norte",
        "created_at": "2024-03-30"
    },
    {
        "id": 13,
        "image": "https://firebasestorage.googleapis.com/v0/b/projects-cd0f3.appspot.com/o/umbaraco%2Fprofile_pic_woman.png?alt=media&token=7b2826e0-2319-41c4-b05b-62274855d793",
        "name": "Carolina Fernandes",
        "status": false,
        "cpf": "555.666.777-88",
        "rg": "5556667-8",
        "birthDate": "1982-04-15",
        "email": "carolina.fernandes@example.com",
        "phone": "(81) 98765-4321",
        "address": "Avenida dos Coqueiros, 456, Recife, PE",
        "street": "Avenida dos Coqueiros",
        "number": "456",
        "neighborhood": "Coqueiral",
        "cep": "50000-010",
        "uf": "PE",
        "city": "Recife",
        "registerCfmCrm": "OPQ67890",
        "specialty": "Psiquiatria",
        "currencyHour": "1,99",
        "service": "Consulta Online",
        "regionActing": "Boa Viagem",
        "created_at": "2024-03-30"
    },
    {
        "id": 14,
        "image": "https://firebasestorage.googleapis.com/v0/b/projects-cd0f3.appspot.com/o/umbaraco%2Fprofile_pic_man.png?alt=media&token=2a1c1256-c7d6-46ac-8488-28207f2bc760",
        "name": "Vinícius Costa",
        "status": true,
        "cpf": "666.777.888-99",
        "rg": "6667778-9",
        "birthDate": "1995-10-25",
        "email": "vinicius.costa@example.com",
        "phone": "(48) 98765-4321",
        "address": "Rua das Palmas, 789, Florianópolis, SC",
        "street": "Rua das Palmas",
        "number": "789",
        "neighborhood": "Palmarejo",
        "cep": "88000-010",
        "uf": "SC",
        "city": "Florianópolis",
        "registerCfmCrm": "RST12345",
        "specialty": "Psiquiatria",
        "currencyHour": "1,99",
        "service": "Consulta Online",
        "regionActing": "Ingleses",
        "created_at": "2024-03-30"
    },
    {
        "id": 15,
        "image": "https://firebasestorage.googleapis.com/v0/b/projects-cd0f3.appspot.com/o/umbaraco%2Fprofile_pic_woman.png?alt=media&token=7b2826e0-2319-41c4-b05b-62274855d793",
        "name": "Patrícia Almeida",
        "status": true,
        "cpf": "777.888.999-00",
        "rg": "7778889-0",
        "birthDate": "1987-05-15",
        "email": "patricia.almeida@example.com",
        "phone": "(31) 98765-4321",
        "address": "Rua das Acácias, 789, Belo Horizonte, MG",
        "street": "Rua das Acácias",
        "number": "789",
        "neighborhood": "Flores do Campo",
        "cep": "30150-010",
        "uf": "MG",
        "city": "Belo Horizonte",
        "registerCfmCrm": "UVW12345",
        "specialty": "Dermatologia",
        "currencyHour": "1,99",
        "service": "Consulta Online",
        "regionActing": "Savassi",
        "created_at": "2024-03-30"
    },
    {
        "id": 16,
        "image": "https://firebasestorage.googleapis.com/v0/b/projects-cd0f3.appspot.com/o/umbaraco%2Fprofile_pic_man.png?alt=media&token=2a1c1256-c7d6-46ac-8488-28207f2bc760",
        "name": "Ricardo Ferreira",
        "status": true,
        "cpf": "888.999.000-11",
        "rg": "8889990-1",
        "birthDate": "1985-09-20",
        "email": "ricardo.ferreira@example.com",
        "phone": "(11) 98765-4321",
        "address": "Rua das Oliveiras, 456, São Paulo, SP",
        "street": "Rua das Oliveiras",
        "number": "456",
        "neighborhood": "Jardim das Flores",
        "cep": "05010-010",
        "uf": "SP",
        "city": "São Paulo",
        "registerCfmCrm": "XYZ12345",
        "specialty": "Dermatologia",
        "currencyHour": "1,99",
        "service": "Consulta Online",
        "regionActing": "Pinheiros",
        "created_at": "2024-03-30"
    },
    {
        "id": 17,
        "image": "https://firebasestorage.googleapis.com/v0/b/projects-cd0f3.appspot.com/o/umbaraco%2Fprofile_pic_woman.png?alt=media&token=7b2826e0-2319-41c4-b05b-62274855d793",
        "name": "Isabela Santos",
        "status": true,
        "cpf": "999.000.111-22",
        "rg": "9990001-1",
        "birthDate": "1983-12-10",
        "email": "isabela.santos@example.com",
        "phone": "(21) 98765-4321",
        "address": "Avenida das Palmeiras, 456, Rio de Janeiro, RJ",
        "street": "Avenida das Palmeiras",
        "number": "456",
        "neighborhood": "Palmeiral",
        "cep": "22000-010",
        "uf": "RJ",
        "city": "Rio de Janeiro",
        "registerCfmCrm": "ABC12345",
        "specialty": "Dermatologia",
        "currencyHour": "1,99",
        "service": "Consulta Online",
        "regionActing": "Copacabana",
        "created_at": "2024-03-30"
    },
    {
        "id": 18,
        "image": "https://firebasestorage.googleapis.com/v0/b/projects-cd0f3.appspot.com/o/umbaraco%2Fprofile_pic_man.png?alt=media&token=2a1c1256-c7d6-46ac-8488-28207f2bc760",
        "name": "Fernando Lima",
        "status": true,
        "cpf": "111.222.333-44",
        "rg": "1112223-4",
        "birthDate": "1980-07-05",
        "email": "fernando.lima@example.com",
        "phone": "(41) 98765-4321",
        "address": "Avenida dos Ipês, 789, Curitiba, PR",
        "street": "Avenida dos Ipês",
        "number": "789",
        "neighborhood": "Jardim das Flores",
        "cep": "80050-010",
        "uf": "PR",
        "city": "Curitiba",
        "registerCfmCrm": "DEF12345",
        "specialty": "Dermatologia",
        "currencyHour": "1,99",
        "service": "Consulta Online",
        "regionActing": "Batel",
        "created_at": "2024-04-30"
    },
    {
        "id": 19,
        "image": "https://firebasestorage.googleapis.com/v0/b/projects-cd0f3.appspot.com/o/umbaraco%2Fprofile_pic_woman.png?alt=media&token=7b2826e0-2319-41c4-b05b-62274855d793",
        "name": "Mariana Oliveira",
        "status": true,
        "cpf": "222.333.444-55",
        "rg": "2223334-5",
        "birthDate": "1992-02-18",
        "email": "mariana.oliveira@example.com",
        "phone": "(85) 98765-4321",
        "address": "Rua das Flores, 456, Fortaleza, CE",
        "street": "Rua das Flores",
        "number": "456",
        "neighborhood": "Flores do Campo",
        "cep": "60000-010",
        "uf": "CE",
        "city": "Fortaleza",
        "registerCfmCrm": "GHI12345",
        "specialty": "Dermatologia",
        "currencyHour": "1,99",
        "service": "Consulta Online",
        "regionActing": "Aldeota",
        "created_at": "2024-04-30"
    },
    {
        "id": 20,
        "image": "https://firebasestorage.googleapis.com/v0/b/projects-cd0f3.appspot.com/o/umbaraco%2Fprofile_pic_woman.png?alt=media&token=7b2826e0-2319-41c4-b05b-62274855d793",
        "name": "Mariana Oliveira",
        "status": true,
        "cpf": "444.333.444-55",
        "rg": "2244434-5",
        "birthDate": "1944-02-18",
        "email": "mariana.o444liveira@example.com",
        "phone": "(85) 98765-4441",
        "address": "Rua das Flores, 444, Fortaleza, CE",
        "street": "Rua das Flores",
        "number": "444",
        "neighborhood": "Flores do Campo",
        "cep": "60000-010",
        "uf": "CE",
        "city": "Fortaleza",
        "registerCfmCrm": "GHI12445",
        "specialty": "Dermatologia",
        "currencyHour": "1,99",
        "service": "Consulta Online",
        "regionActing": "Aldeota",
        "created_at": "2024-03-30"
    }

]

export default defaultDatabase