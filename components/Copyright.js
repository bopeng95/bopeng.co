import { HStack, Text } from '@chakra-ui/react';
import { FaRegCopyright } from 'react-icons/fa';

const Copyright = () => {
  const date = new Date();
  return (
    <HStack fontSize="xs" px={4} pt={40} pb={20} color="gray.500">
      <Text>copyright</Text>
      <FaRegCopyright />
      <Text>{`bo peng ${date.getFullYear()}`}</Text>
    </HStack>
  );
};

export default Copyright;
