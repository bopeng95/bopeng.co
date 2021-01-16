import {
  useColorModeValue,
  keyframes,
  Drawer as ChakraDrawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerContent,
  DrawerBody,
} from '@chakra-ui/react';
import { fadeInLeft } from 'react-animations';

const Drawer = (props) => {
  const { children, onClose, isOpen } = props;

  // #303030
  const bg = useColorModeValue('white', '#282828');
  const fadeAnimation = keyframes`${fadeInLeft}`;

  return (
    <ChakraDrawer
      size="full"
      isOpen={isOpen}
      onClose={onClose}
      placement="right"
    >
      <DrawerOverlay>
        <DrawerContent bg={bg}>
          <DrawerCloseButton
            mt={3}
            mr={2}
            _hover={{}}
            _active={{}}
            _focus={{}}
          />
          <DrawerHeader mt={2}>menu</DrawerHeader>
          <DrawerBody animation={`1s ${fadeAnimation} ease`}>
            {children}
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </ChakraDrawer>
  );
};

export default Drawer;
