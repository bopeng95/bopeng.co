import { Box, Flex, useColorModeValue } from '@chakra-ui/react';

const SideScrollBar = (props) => {
  const { w = '50px', innerW = '2px', value = 0 } = props;

  const bg = useColorModeValue('black', 'white');
  const container = useColorModeValue('gray.300', 'gray.600');

  return (
    <Flex
      position="fixed"
      alignItems="center"
      justify="flex-end"
      top={0}
      left={0}
      h="100%"
      w={w}
    >
      <Box
        w={innerW}
        bg={container}
        borderRadius={5}
        h="60%"
        position="relative"
      >
        <Box
          position="absolute"
          w="100%"
          h={`${value}%`}
          top={0}
          bg={bg}
          animation="height 0.6s ease"
        />
      </Box>
    </Flex>
  );
};

export default SideScrollBar;
