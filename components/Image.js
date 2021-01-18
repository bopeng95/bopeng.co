import { Box, Tag, Image as ChakraImage } from '@chakra-ui/react';

const Image = (props) => {
  const { description, animation, ...rest } = props;
  return (
    <Box w="100%" h="auto" position="relative" animation={animation}>
      <ChakraImage w={['100%']} {...rest} />
      <Tag position="absolute" bottom={2} left={2} colorScheme="red">
        {description}
      </Tag>
    </Box>
  );
};

export default Image;
