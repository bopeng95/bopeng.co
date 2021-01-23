import { Box, Flex, useColorModeValue, useTheme } from '@chakra-ui/react';

import useScrollPercentage from '@/hooks/useScrollPercentage';

const SideScrollBar = (props) => {
  const { w = '50px', innerW = '2px' } = props;
  const value = useScrollPercentage();
  const { scrollBar } = useTheme();

  const bg = useColorModeValue('black', 'white');
  const container = useColorModeValue(scrollBar.light, scrollBar.dark);

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
