import {
  Box,
  Text,
  HStack,
  Link,
  ListIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';

import Tags from '@/components/Tags';

const AccordionList = (props) => {
  const { projects = [] } = props;

  const list = projects.map((item) => {
    const { name, Icon, iconColor, link = '#', tech = [] } = item;
    const key = `ProjectList${name}`;

    return (
      <AccordionItem key={key} border="none">
        <AccordionButton _focus={{}}>
          <Box minH="31px" fontSize={['lg', 'lg', 'xl']} _focus={{}}>
            {Icon && <ListIcon as={Icon} color={iconColor} mr={3} />}
            {name}
          </Box>
        </AccordionButton>
        <AccordionPanel borderLeft="1px solid">
          <HStack mb={0}>
            <Link href={link} color="blue.400">
              github
            </Link>
          </HStack>
          <Text>description here</Text>
          {tech.length && <Tags tags={tech} mt={3} />}
        </AccordionPanel>
      </AccordionItem>
    );
  });

  return (
    <Accordion allowMultiple allowToggle my={10}>
      {list}
    </Accordion>
  );
};

export default AccordionList;
