import { Text, VStack } from '@chakra-ui/react';

const Sidebar = () => {
  // const { menu } = props;

  return (
    <VStack
      position="fixed"
      p={3}
      left={0}
      w="50px"
      h="100%"
      // borderRight="1px solid white"
      justify="center"
      alignItems="center"
    >
      <Text>o</Text>
      <Text>o</Text>
      <Text>o</Text>
      <Text>o</Text>
    </VStack>
  );
};

export default Sidebar;
