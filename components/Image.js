import { Box, Text, Image as ChakraImage } from '@chakra-ui/react';

const Image = (props) => {
  const { description, animation, ...rest } = props;
  return (
    <Box w="100%" h="auto" position="relative" animation={animation}>
      <ChakraImage w={['100%']} {...rest} />
      <Text position="absolute" bottom={2} left={4}>
        {description}
      </Text>
    </Box>
  );
};

export default Image;
