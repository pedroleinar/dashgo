import { Button } from '@chakra-ui/react';

type Props = {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
};

export const PaginationItem = ({
  isCurrent,
  number,
  onPageChange,
}: Props) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default',
        }}
      >
        {number}
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
        bgColor: 'gray.500',
      }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  );
};
