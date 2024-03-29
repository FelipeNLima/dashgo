import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  numberOfPages: number
  isCurrent?: boolean;
}

export function PaginationItem({ isCurrent = false, numberOfPages }: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'default',
        }}
      >
        {numberOfPages}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: 'gray.500',
      }}
    >
      {numberOfPages}
    </Button>
  );
}