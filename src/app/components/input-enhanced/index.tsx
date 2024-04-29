import { FieldError } from "react-hook-form"
import { forwardRef } from "react"
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react"
import React from "react"
import { FormEvent } from "react"
import masks from "./masks"

type IInputProps = InputProps & {
  name: string
  label?: string
  error?: FieldError | { message: string }
  mask?: string
  isReq?: boolean
}

const Index: React.ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  { name, label, error = null, mask = "defauldValue", isReq, ...props },
  ref
) => {
  function applyMask(event: FormEvent<HTMLInputElement>) {
    masks[mask as keyof typeof masks](event)
  }
  return (
    <FormControl isRequired={isReq} isInvalid={!!error}>
      {label && (
        <FormLabel
          m={0}
          my={2}
          htmlFor={name}
          fontSize="sm"
          color={'grey'}
        >
          {label}
        </FormLabel>
      )}

      <Input
        mt={1}
        id={name}
        onInput={applyMask}
        name={name}
        borderRadius={5}
        fontSize="sm"
        ref={ref}
        size="md"
        {...props}
      />

      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export default forwardRef(Index)
