import { VStack } from '@chakra-ui/react';
import Drawer from '@/components/Drawer';

const DrawerMenu = (props) => {
  const { nav = [], ...rest } = props;

  return (
    <Drawer {...rest}>
      <VStack alignItems="left">{nav}</VStack>
    </Drawer>
  );
};

export default DrawerMenu;
