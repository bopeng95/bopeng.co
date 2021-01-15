import { IconButton as ChakraIconButton } from '@chakra-ui/react';

const IconButton = (props) => {
  const { aria, ...rest } = props;

  return (
    <ChakraIconButton
      bg="transparent"
      _hover={{}}
      _active={{}}
      _focus={{}}
      aria-label={aria}
      {...rest}
    />
  );
};

export default IconButton;
