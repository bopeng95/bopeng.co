import { Link, HStack } from '@chakra-ui/react';

const IconList = (props) => {
  const { icons = [], size = 5 } = props;

  const list = icons.map((item) => {
    const { Icon, name, link, color = 'red.300', ...rest } = item;
    const key = `iconList${name}`;
    return (
      <Link
        href={link}
        key={key}
        cursor="pointer"
        _hover={{ color }}
        transition="color 0.2s"
        mr={4}
        {...rest}
        w={size}
        h={size}
      >
        <Icon size="100%" />
      </Link>
    );
  });

  return (
    <HStack my={5} justify="flex-start" alignItems="center">
      {list}
    </HStack>
  );
};

export default IconList;
