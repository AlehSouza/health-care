'use client'

import React, { ReactNode, createContext, useContext, useState } from 'react'

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

interface ProfessionalContextType {
    professionals: Array<Professional>,
    setProfessionals: React.Dispatch<React.SetStateAction<Array<Professional>>>,
    addProfessional: (newProfessional: Professional) => void,
    removeProfessional: (id: number) => void,
    updateProfessional: (updatedProfessional: Professional) => void,
    getAllProfessionals: () => number,
    getByStatus:(status: boolean) => number,
    getByActualMonth: () => number,
}

const ProfessionalContext = createContext<ProfessionalContextType | undefined>(undefined)

export function ProviderProfessional({ children }: { children: ReactNode }) {
    const [professionals, setProfessionals] = useState<Array<Professional>>([
        {
            "id": 0,
            "name": "Ana Silva",
            "status": true,
            "cpf": "123.456.789-00",
            "rg": "1234567-8",
            "birth_date": "1985-03-15",
            "email": "ana.silva@example.com",
            "phone": "(11) 98765-4321",
            "address": "Rua das Flores, 123, São Paulo, SP",
            "street": "Rua das Flores",
            "number": "123",
            "cep": "17450-081",
            "uf": "SP",
            "city": "São Paulo",
            "cfm": "ABC12345",
            "occupation": "Pediatria",
            "created_at": "2024-03-28",
        },
        {
            "id": 1,
            "name": "Maria Santos",
            "status": true,
            "cpf": "555.444.333-22",
            "rg": "5554443-4",
            "birth_date": "1976-07-25",
            "email": "maria.santos@example.com",
            "phone": "(31) 98765-4321",
            "address": "Rua das Palmeiras, 789, Belo Horizonte, MG",
            "street": "Rua das Palmeiras",
            "number": "789",
            "cep": "30140-040",
            "uf": "MG",
            "city": "Belo Horizonte",
            "cfm": "DEF67890",
            "occupation": "Pediatria",
            "created_at": "2024-03-28",
        },
        {
            "id": 2,
            "name": "João Oliveira",
            "status": false,
            "cpf": "987.654.321-00",
            "rg": "9876543-2",
            "birth_date": "1990-10-20",
            "email": "joao.oliveira@example.com",
            "phone": "(21) 12345-6789",
            "address": "Avenida Principal, 456, Rio de Janeiro, RJ",
            "street": "Avenida Principal",
            "number": "456",
            "cep": "22010-010",
            "uf": "RJ",
            "city": "Rio de Janeiro",
            "cfm": "XYZ54321",
            "occupation": "Pediatria",
            "created_at": "2024-03-28",
        },
        {
            "id": 3,
            "name": "Fernanda Lima",
            "status": true,
            "cpf": "999.888.777-66",
            "rg": "9998887-6",
            "birth_date": "1988-12-05",
            "email": "fernanda.lima@example.com",
            "phone": "(41) 12345-6789",
            "address": "Avenida das Águas, 321, Curitiba, PR",
            "street": "Avenida das Águas",
            "number": "321",
            "cep": "80010-010",
            "uf": "PR",
            "city": "Curitiba",
            "cfm": "JKL54321",
            "occupation": "Pediatria",
            "created_at": "2024-03-28",
        },
        {
            "id": 4,
            "name": "Carlos Souza",
            "status": false,
            "cpf": "111.222.333-44",
            "rg": "1112223-4",
            "birth_date": "1980-05-10",
            "email": "carlos.souza@example.com",
            "phone": "(51) 98765-4321",
            "address": "Rua dos Pinheiros, 567, Porto Alegre, RS",
            "street": "Rua dos Pinheiros",
            "number": "567",
            "cep": "90035-001",
            "uf": "RS",
            "city": "Porto Alegre",
            "cfm": "GHI67890",
            "occupation": "Pediatria",
            "created_at": "2024-03-28",
        },
        {
            "id": 5,
            "name": "Pedro Oliveira",
            "status": false,
            "cpf": "777.888.999-00",
            "rg": "7778889-0",
            "birth_date": "1975-08-22",
            "email": "pedro.oliveira@example.com",
            "phone": "(81) 98765-4321",
            "address": "Rua das Oliveiras, 789, Recife, PE",
            "street": "Rua das Oliveiras",
            "number": "789",
            "cep": "50050-100",
            "uf": "PE",
            "city": "Recife",
            "cfm": "MNO12345",
            "occupation": "Pediatria",
            "created_at": "2024-03-28",
        },
        {
            "id": 6,
            "name": "Amanda Ferreira",
            "status": true,
            "cpf": "666.555.444-33",
            "rg": "6665554-3",
            "birth_date": "1992-04-18",
            "email": "amanda.ferreira@example.com",
            "phone": "(62) 12345-6789",
            "address": "Rua dos Coqueiros, 456, Goiânia, GO",
            "street": "Rua dos Coqueiros",
            "number": "456",
            "cep": "74000-010",
            "uf": "GO",
            "city": "Goiânia",
            "cfm": "PQR56789",
            "occupation": "Pediatria",
            "created_at": "2024-04-28",
        },
        {
            "id": 7,
            "name": "Lucas Oliveira",
            "status": true,
            "cpf": "222.333.444-55",
            "rg": "2223334-5",
            "birth_date": "1987-11-25",
            "email": "lucas.oliveira@example.com",
            "phone": "(85) 98765-4321",
            "address": "Rua das Palmeiras, 123, Fortaleza, CE",
            "street": "Rua das Palmeiras",
            "number": "123",
            "cep": "60010-010",
            "uf": "CE",
            "city": "Fortaleza",
            "cfm": "STU67890",
            "occupation": "Pediatria",
            "created_at": "2024-04-28",
        },
        {
            "id": 8,
            "name": "Juliana Costa",
            "status": false,
            "cpf": "888.777.666-55",
            "rg": "8887776-5",
            "birth_date": "1984-06-30",
            "email": "juliana.costa@example.com",
            "phone": "(67) 12345-6789",
            "address": "Avenida Central, 789, Campo Grande, MS",
            "street": "Avenida Central",
            "number": "789",
            "cep": "79000-010",
            "uf": "MS",
            "city": "Campo Grande",
            "cfm": "UVW12345",
            "occupation": "Pediatria",
            "created_at": "2024-04-28",
        },
        {
            "id": 9,
            "name": "Marcela Santos",
            "status": true,
            "cpf": "333.444.555-66",
            "rg": "3334445-6",
            "birth_date": "1995-02-12",
            "email": "marcela.santos@example.com",
            "phone": "(55) 12345-6789",
            "address": "Rua das Flores, 456, Manaus, AM",
            "street": "Rua das Flores",
            "number": "456",
            "cep": "69000-010",
            "uf": "AM",
            "city": "Manaus",
            "cfm": "XYZ98765",
            "occupation": "Pediatria",
            "created_at": "2024-04-28",
        },
        {
            "id": 10,
            "name": "Roberto Almeida",
            "status": false,
            "cpf": "444.555.666-77",
            "rg": "4445556-7",
            "birth_date": "1982-09-08",
            "email": "roberto.almeida@example.com",
            "phone": "(91) 98765-4321",
            "address": "Avenida dos Ipês, 321, Belém, PA",
            "street": "Avenida dos Ipês",
            "number": "321",
            "cep": "66000-010",
            "uf": "PA",
            "city": "Belém",
            "cfm": "BCD23456",
            "occupation": "Pediatria",
            "created_at": "2024-04-28",
        },
    ])

    const addProfessional = (newProfessional: Professional) => {
        setProfessionals(prevProfessionals => [...prevProfessionals, newProfessional]);
    }

    const removeProfessional = (id: number) => {
        setProfessionals(prevProfessionals =>
            prevProfessionals.filter(professional => professional.id !== id)
        );
    }

    const updateProfessional = (updatedProfessional: Professional) => {
        setProfessionals(prevProfessionals =>
            prevProfessionals.map(professional => {
                if (professional.id === updatedProfessional.id) {
                    return { ...professional, ...updatedProfessional };
                } else {
                    return professional;
                }
            })
        );
    }

    const getAllProfessionals = () => {
        return professionals.length
    }

    const getByStatus = (status: boolean) => {
        const draft = professionals.filter((professional) => professional.status === status || professional?.status?.toString() === `${status}`);
        return draft.length
    }

    const getByActualMonth = () => {
        const dataAtual = new Date();
        const mesAtual = dataAtual.getMonth() + 1;

        const draft = professionals.filter((profissional) => {
            // Ignore because the date is saving like string not date
            // @ts-ignore
            const dataCriacao = new Date(profissional?.created_at);
            const mesCriacao = dataCriacao.getMonth() + 1;

            return mesCriacao === mesAtual;
        });

        return draft.length
    }

    return (
        <ProfessionalContext.Provider
            value={{
                professionals,
                setProfessionals,
                addProfessional,
                removeProfessional,
                updateProfessional,
                getAllProfessionals,
                getByStatus,
                getByActualMonth,
            }}
        >
            {children}
        </ProfessionalContext.Provider>
    )
}

export function useProfessional() {
    const context = useContext(ProfessionalContext)
    if (!context) {
        throw new Error('useProfessional mus be use within a ProfessionalProvider')
    }
    return context
}

