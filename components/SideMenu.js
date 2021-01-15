import { VStack } from '@chakra-ui/react';

import SideLink from '@/components/SideLink';

const Sidebar = (props) => {
  const { nav = [] } = props;

  const links = nav.map((item) => {
    return <SideLink key={`SideLink${item}`} label={item} />;
  });

  return (
    <VStack
      position="fixed"
      p={3}
      left={0}
      w="50px"
      h="100%"
      justify="center"
      alignItems="center"
    >
      {links}
    </VStack>
  );
};

export default Sidebar;
