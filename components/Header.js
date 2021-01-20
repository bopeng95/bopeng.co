import {
  HStack,
  Text,
  keyframes,
  useColorMode,
  useBreakpoint,
  useDisclosure,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import { fadeInDown, fadeInLeft } from 'react-animations';
import { useRouter } from 'next/router';

import IconButton from '@/components/IconButton';
import DrawerMenu from '@/components/Drawer/DrawerMenu';
import MenuLink from '@/components/MenuLink';

import { nav } from '@/utils/fixtures';

const Header = (props) => {
  const { title = 'bo', icon, maxW } = props;
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const breakpoint = useBreakpoint();

  const frontPage = router.pathname === '/';
  const smallWindow = breakpoint === 'sm' || breakpoint === 'base';
  const active = (name) => router.pathname === name;

  const goHome = () => {
    if (router.pathname !== '/') router.push('/');
  };

  const navList = nav.map((item) => {
    const link = `/${item}`;
    const handleClick = () => router.push(link);
    return (
      <MenuLink
        key={`MenuLink${item}`}
        item={item}
        active={active(link)}
        onClick={handleClick}
      />
    );
  });

  const Mode = colorMode === 'dark' ? <MoonIcon /> : <SunIcon />;
  const fadeAnimation = keyframes`${fadeInDown}`;
  const fadeLeft = keyframes`${fadeInLeft}`;

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
      {smallWindow && (
        <DrawerMenu nav={NavMenu} onClose={onClose} isOpen={isOpen} />
      )}
      <HStack
        justify="space-between"
        w="100%"
        maxW={maxW}
        position="fixed"
        p={4}
        top={0}
        animation={frontPage && `1s ${fadeAnimation} ease`}
        zIndex={1}
      >
        <HStack
          onClick={goHome}
          cursor="pointer"
          animation={!frontPage && `1s ${fadeLeft} ease`}
        >
          {icon}
          <Text fontWeight="bold">{title}</Text>
        </HStack>
        <HStack>{smallWindow ? HamMenu : NavMenu}</HStack>
      </HStack>
    </>
  );
};

export default Header;
