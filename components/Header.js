import { HStack, Text, IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Header = (props) => {
  const { title = 'bo', nav = [] } = props;
  const { colorMode, toggleColorMode } = useColorMode();

  const navList = nav.map((item) => (
    <Text key={item} mr={5} cursor="pointer">
      {item}
    </Text>
  ));

  const Mode = colorMode === 'dark' ? <MoonIcon /> : <SunIcon />;

  return (
    <HStack
      justify="space-between"
      w="100%"
      maxW="1280px"
      position="fixed"
      p={4}
      top={0}
      left="50%"
      transform="translate(-50%, 0)"
    >
      <HStack>
        <Text fontWeight="bold">{title}</Text>
      </HStack>
      <HStack>
        {navList}
        <IconButton
          icon={Mode}
          bg="transparent"
          _hover={{}}
          _active={{}}
          _focus={{}}
          aria-label="colormode"
          onClick={toggleColorMode}
        />
      </HStack>
    </HStack>
  );
};

export default Header;
