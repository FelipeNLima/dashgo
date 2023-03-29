import { Box, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      spacing="6"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationItem numberOfPages={1} isCurrent/>
        <PaginationItem numberOfPages={2} />
        <PaginationItem numberOfPages={3} />
        <PaginationItem numberOfPages={4} />
        <PaginationItem numberOfPages={5} />
      </Stack>
    </Stack>
  )
}