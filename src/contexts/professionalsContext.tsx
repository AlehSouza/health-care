"use client"

import React, { ReactNode, createContext, useContext, useEffect, useState } from "react"
import defaultDatabase from "./../services/defaultDatabase"

interface Professional {
    id?: number,
    image?: string,
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
    neighborhood?: string,
    currency_hour?: string,
    service: string,
    area_acting: string,
    cep?: string,
    uf?: string,
    city?: string,
    register_cfm_crm?: string,
    specialty?: string,
    created_at?: string,
}

interface ProfessionalContextType {
    professionals: Array<Professional>,
    filteredProfessionals: Array<Professional>,
    setProfessionals: React.Dispatch<React.SetStateAction<Array<Professional>>>,
    addProfessional: (newProfessional: Professional) => void,
    removeProfessional: (id: number) => void,
    updateProfessional: (updatedProfessional: Professional) => void,
    getAllProfessionals: () => number,
    getByStatus: (status: boolean) => number,
    getByCpf: (cpf: string) => boolean | Professional[],
    getByOccupation: (specialty: string) => number,
    getByActualMonth: () => number,
    getFilteredProfessionas: (name?: string, status?: boolean, specialty?: string) => void
}

const ProfessionalContext = createContext<ProfessionalContextType | undefined>(undefined)

export function ProviderProfessional({ children }: { children: ReactNode }) {
    const [professionals, setProfessionals] = useState<Array<Professional>>(defaultDatabase)
    const [filteredProfessionals, setFilteredProfessionals] = useState<Array<Professional>>([])

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

    const getByCpf = (cpf: string) => {
        const draft = professionals.filter((professional) => professional.cpf?.replace(/[^\d]/g, '') === cpf.replace(/[^\d]/g, ''))
        return draft.length > 0 ? true : false
    };

    const getByOccupation = (specialty: string) => {
        const draft = professionals.filter((professional) => professional.specialty === specialty);
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

    const getFilteredProfessionas = (filters: any) => {
        if (Object.keys(filters).length === 0) {
            return professionals;
        }
        const draft = professionals.filter(professional => {
            if (filters.name && professional.name != filters.name) {
                return false;
            }
            if (filters.status && professional?.status?.toString() !== filters.status) {
                return false;
            }
            if (filters.specialty && professional.specialty != filters.specialty) {
                return false;
            }
            return true;
        });
        setFilteredProfessionals(draft)
    }

    useEffect(() => {
        setFilteredProfessionals(professionals)
    }, [professionals])

    return (
        <ProfessionalContext.Provider
            value={{
                professionals,
                filteredProfessionals,
                setProfessionals,
                addProfessional,
                removeProfessional,
                updateProfessional,
                getAllProfessionals,
                getByStatus,
                getByCpf,
                getByOccupation,
                getByActualMonth,
                getFilteredProfessionas
            }}
        >
            {children}
        </ProfessionalContext.Provider>
    )
}

export function useProfessional() {
    const context = useContext(ProfessionalContext)
    if (!context) {
        throw new Error("useProfessional mus be use within a ProfessionalProvider")
    }
    return context
}

