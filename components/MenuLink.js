import { Box, Text, useColorModeValue } from '@chakra-ui/react';

const MenuLink = (props) => {
  const { item, active = false, onClick } = props;

  const color = useColorModeValue('white, black');

  return (
    <Box>
      <Text
        mr={5}
        borderBottom={active && '1px'}
        borderBottomColor={color}
        display="inline-block"
        mb={[5, 5, 0]}
        cursor="pointer"
        onClick={onClick}
      >
        {item}
      </Text>
    </Box>
  );
};

export default MenuLink;
