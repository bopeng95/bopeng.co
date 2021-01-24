import {
  List,
  ListIcon,
  ListItem,
  Box,
  Link,
  useTheme,
  useColorModeValue,
} from '@chakra-ui/react';

import Tags from '@/components/Tags';

const ProjectList = (props) => {
  const { projects = [] } = props;
  const theme = useTheme();
  const { gray } = theme;

  const color = useColorModeValue('black', 'white');
  const defaultColor = useColorModeValue(gray.light, gray.dark);

  const list = projects.map((item) => {
    const { name, Icon, iconColor, link = '#', tech = [] } = item;
    const key = `ProjectList${name}`;

    return (
      <Box key={key}>
        <ListItem>
          {Icon && <ListIcon as={Icon} color={iconColor} />}
          <Link
            href={link}
            color={defaultColor}
            fontSize="xl"
            _hover={{ color }}
            _focus={{}}
          >
            {name}
          </Link>
        </ListItem>
        {tech.length && <Tags tags={tech} />}
      </Box>
    );
  });

  return (
    <List my={10} spacing={6}>
      {list}
    </List>
  );
};

export default ProjectList;
