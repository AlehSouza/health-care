"use client"

import React, { ReactNode, createContext, useContext, useEffect, useState } from "react"
import defaultDatabase from "./../services/defaultDatabase"

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
    filteredProfessionals: Array<Professional>,
    setProfessionals: React.Dispatch<React.SetStateAction<Array<Professional>>>,
    addProfessional: (newProfessional: Professional) => void,
    removeProfessional: (id: number) => void,
    updateProfessional: (updatedProfessional: Professional) => void,
    getAllProfessionals: () => number,
    getByStatus: (status: boolean) => number,
    getByOccupation: (occupation: string) => number,
    getByActualMonth: () => number,
    getFilteredProfessionas: (name?: string, status?: boolean, occupation?: string) => void
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

    const getByOccupation = (occupation: string) => {
        const draft = professionals.filter((professional) => professional.occupation === occupation);
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
            if (filters.occupation && professional.occupation != filters.occupation) {
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

