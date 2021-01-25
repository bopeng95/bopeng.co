import {
  Box,
  Text,
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
    const { name, Icon, iconColor, link = '#', tech = [], status } = item;
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
          <Text mb={3}>status: {status}</Text>
          <Link href={link}>link</Link>
          {tech.length && <Tags tags={tech} />}
        </AccordionPanel>
      </AccordionItem>
    );
  });

  return (
    <Accordion allowMultiple defaultIndex={[0]} allowToggle my={10}>
      {list}
    </Accordion>
  );
};

export default AccordionList;
