import { Tooltip, Link, useColorModeValue } from '@chakra-ui/react';

const SideLink = (props) => {
  const { label, size = '9px' } = props;

  const color = useColorModeValue('gray.700', 'gray.200');

  return (
    <Tooltip placement="right" label={label}>
      <Link
        href={`#${label}`}
        w={size}
        mb={6}
        h={size}
        border="1px"
        borderColor={color}
        cursor="pointer"
        _hover={{ bg: color }}
        _focus={{}}
        borderRadius="50%"
        transition="background 0.1s"
      />
    </Tooltip>
  );
};

export default SideLink;
