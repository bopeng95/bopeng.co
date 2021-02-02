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
    const { name, Icon, iconColor, description, links = [], tech = [] } = item;
    const key = `ProjectList${name}`;

    const linkList = links.map(({ title, href }) => (
      <Link key={`projectList${title}`} href={href} color="blue.500" isExternal>
        {title}
      </Link>
    ));

    const LinkComponent = (
      <HStack mb={0} spacing={3}>
        {linkList}
      </HStack>
    );

    return (
      <AccordionItem key={key} border="none">
        <AccordionButton _focus={{}}>
          <Box minH="31px" fontFamily="Roboto Mono" _focus={{}}>
            {Icon && <ListIcon as={Icon} color={iconColor} mr={3} />}
            {name}
          </Box>
        </AccordionButton>
        <AccordionPanel borderLeft="1px solid">
          {LinkComponent}
          <Text mb={5} mt={3}>
            {description}
          </Text>
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
