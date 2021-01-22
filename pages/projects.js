import { Container, Text } from '@chakra-ui/react';

import Page from '@/components/Page';
import Content from '@/components/Content';

const Projects = () => {
  const path = 'projects';

  return (
    <Page name={path} path={`/${path}`}>
      <Content>
        <Container p={0}>
          <Text>projects</Text>
        </Container>
      </Content>
    </Page>
  );
};

export default Projects;
