"use client"

import React, { ReactNode, createContext, useContext, useEffect, useState } from "react"
import defaultDatabase from "../db/default.database"
import { Professional } from "@/types/professional.type"

interface ProfessionalContextType {
    professionals: Array<Professional>,
    filteredProfessionals: Array<Professional>,
    selectedProfessional: Professional | any,
    setSelectedProfessional: React.Dispatch<React.SetStateAction<Professional>> | any,
    setProfessionals: React.Dispatch<React.SetStateAction<Array<Professional>>>,
    addProfessional: (newProfessional: Professional) => void,
    removeProfessional: (id: number) => void,
    updateProfessional: (updatedProfessional: Professional) => void,
    getProfessionalsAll: () => number,
    getProfessionalsByStatus: (status: boolean) => number,
    getProfessionalByCpf: (cpf: string) => boolean | Professional[],
    getProfessionalsBySpecialty: (specialty: string) => number,
    getProfessionalsByCurrentMonth: () => number,
    getProfessionalsFiltered: (name?: string, status?: boolean, specialty?: string) => void
}

const ProfessionalContext = createContext<ProfessionalContextType | undefined>(undefined)

export function ProviderProfessional({ children }: { children: ReactNode }) {
    const [professionals, setProfessionals] = useState<Array<Professional>>(defaultDatabase)
    const [filteredProfessionals, setFilteredProfessionals] = useState<Array<Professional>>([])
    const [selectedProfessional, setSelectedProfessional] = useState<Professional>()

    const addProfessional = (newProfessional: Professional) => {
        setProfessionals(prevProfessionals => [...prevProfessionals, newProfessional])
    }

    const removeProfessional = (id: number) => {
        setProfessionals(prevProfessionals =>
            prevProfessionals.filter(professional => professional.id !== id)
        )
    }

    const updateProfessional = (updatedProfessional: Professional) => {
        setProfessionals(prevProfessionals =>
            prevProfessionals.map(professional => {
                if (professional.id === updatedProfessional.id) {
                    return { ...professional, ...updatedProfessional }
                } else {
                    return professional
                }
            })
        )
    }

    const getProfessionalsAll = () => {
        return professionals.length
    }

    const getProfessionalsByStatus = (status: boolean) => {
        const draft = professionals.filter((professional) => professional.status === status || professional?.status?.toString() === `${status}`)
        return draft.length
    }

    const getProfessionalByCpf = (cpf: string) => {
        const draft = professionals.filter((professional) => professional.cpf?.replace(/[^\d]/g, '') === cpf.replace(/[^\d]/g, ''))
        return draft.length > 0 ? true : false
    }

    const getProfessionalsBySpecialty = (specialty: string) => {
        const draft = professionals.filter((professional) => professional.specialty === specialty)
        return draft.length
    }

    const getProfessionalsByCurrentMonth = () => {
        let dateInst = new Date();
        const draft = professionals.filter((profissional) => {
            let slicedDate = profissional.created_at.split("-")
            let actualMonth = dateInst.getMonth() + 1;
            const createdMonth = parseInt(slicedDate[1])
            return actualMonth === createdMonth
        })
        return draft.length
    }

    const getProfessionalsFiltered = (filters: any) => {
        if (Object.keys(filters).length === 0) {
            return professionals
        }
        const draft = professionals.filter(professional => {
            if (filters.name && professional.name != filters.name) {
                return false
            }
            if (filters.registerCfmCrm && professional.registerCfmCrm !== filters.registerCfmCrm) {
                return false
            }
            if (filters.status && professional?.status?.toString() !== filters.status) {
                return false
            }
            if (filters.specialty && professional.specialty != filters.specialty) {
                return false
            }
            return true
        })
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
                selectedProfessional,
                setSelectedProfessional,
                setProfessionals,
                addProfessional,
                removeProfessional,
                updateProfessional,
                getProfessionalsAll,
                getProfessionalsByStatus,
                getProfessionalByCpf,
                getProfessionalsBySpecialty,
                getProfessionalsByCurrentMonth,
                getProfessionalsFiltered
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

