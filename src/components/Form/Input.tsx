import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label: string;
  type?: string;
}
export function Input({ name, label, type, ...rest }: InputProps) {
  return (
    <FormControl>
     { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
      <ChakraInput
        id={name}
        name={name}
        type={type || 'text'}
        focusBorderColor='pink.500'
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900',
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  )
}