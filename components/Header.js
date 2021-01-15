import {
  HStack,
  Text,
  keyframes,
  useColorMode,
  useBreakpoint,
  useDisclosure,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import { fadeInDown } from 'react-animations';

import IconButton from '@/components/IconButton';
import SideMenu from '@/components/SideMenu';
import DrawerMenu from '@/components/Drawer/DrawerMenu';

const Header = (props) => {
  const { title = 'bo', nav = [] } = props;
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const breakpoint = useBreakpoint();

  const smallWindow = breakpoint === 'sm' || breakpoint === 'base';

  const navList = nav.map((item) => (
    <Text key={item} mr={5} mb={[5, 5, 0]} cursor="pointer">
      {item}
    </Text>
  ));

  const Mode = colorMode === 'dark' ? <MoonIcon /> : <SunIcon />;
  const fadeAnimation = keyframes`${fadeInDown}`;

  const NavMenu = (
    <>
      {navList}
      <IconButton
        icon={Mode}
        maxW={0}
        aria="colormode"
        onClick={toggleColorMode}
      />
    </>
  );

  const HamMenu = (
    <IconButton icon={<HamburgerIcon onClick={onOpen} />} aria="menu" />
  );

  return (
    <>
      {!smallWindow ? (
        <SideMenu />
      ) : (
        <DrawerMenu nav={NavMenu} onClose={onClose} isOpen={isOpen} />
      )}
      <HStack
        justify="space-between"
        w="100%"
        maxW="1280px"
        position="fixed"
        p={4}
        top={0}
        animation={`1.2s ${fadeAnimation} ease`}
      >
        <HStack>
          <Text fontWeight="bold">{title}</Text>
        </HStack>
        <HStack>{smallWindow ? HamMenu : NavMenu}</HStack>
      </HStack>
    </>
  );
};

export default Header;
