import { forwardRef } from "react"

import { FieldError } from "react-hook-form"

import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Select,
    SelectProps,
} from "@chakra-ui/react"

type ISelectProps = SelectProps & {
    name: string
    label?: string
    error?: FieldError | null
    isReq: boolean
}

const SelectEnhanced: React.ForwardRefRenderFunction<HTMLButtonElement, ISelectProps> = (
    { children, name, label, isReq, error = null, ...props },
    ref
) => {
    return (
        <>
            <FormControl mb={1} isInvalid={!!error} isRequired={isReq}>
                <FormLabel
                    htmlFor={name}
                    fontSize="sm"
                    color="gray"
                    m={0}
                    my={2}
                >
                    {label}
                </FormLabel>
                <Select
                    mt={1}
                    id={name}
                    name={name}
                    ref={ref}
                    size="md"
                    borderRadius={5}
                    fontSize="sm"
                    {...props}
                >
                    {children}
                </Select>
                {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
            </FormControl>
        </>
    )
}

export default forwardRef(SelectEnhanced)
